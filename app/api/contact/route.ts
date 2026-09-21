import { NextResponse } from "next/server";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const MIN_SUBMIT_TIME_MS = 500;
const MAX_BODY_BYTES = 12_000;

const requestLog = new Map<string, number[]>();
const submissionLog = new Map<string, number>();

function getClientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recentRequests = (requestLog.get(key) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS,
  );

  if (recentRequests.length >= MAX_REQUESTS) {
    requestLog.set(key, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(key, recentRequests);
  return false;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function containsControlCharacters(value: string) {
  return /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value);
}

function hasSuspiciousLinks(value: string) {
  return (value.match(/https?:\/\//gi) ?? []).length > 2;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { message: "Ukuran pesan terlalu besar." },
      { status: 413 },
    );
  }

  const clientKey = getClientKey(request);

  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { message: "Terlalu banyak percobaan. Silakan coba lagi nanti." },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";
    const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;

    if (website || !startedAt || Date.now() - startedAt < MIN_SUBMIT_TIME_MS) {
      return NextResponse.json(
        { message: "Pesan tidak dapat diproses." },
        { status: 400 },
      );
    }

    if (
      name.length < 2 ||
      name.length > 100 ||
      !isValidEmail(email) ||
      email.length > 254 ||
      message.length < 10 ||
      message.length > 5000 ||
      containsControlCharacters(name) ||
      containsControlCharacters(email) ||
      containsControlCharacters(message) ||
      hasSuspiciousLinks(message)
    ) {
      return NextResponse.json(
        { message: "Periksa kembali nama, email, dan isi pesan Anda." },
        { status: 400 },
      );
    }

    const submissionKey = `${clientKey}:${email.toLowerCase()}:${message.toLowerCase()}`;
    const previousSubmission = submissionLog.get(submissionKey);
    if (previousSubmission && Date.now() - previousSubmission < WINDOW_MS) {
      return NextResponse.json(
        { message: "Pesan yang sama sudah dikirim sebelumnya." },
        { status: 409 },
      );
    }
    const requiredEnv = [
      "VITE_TELEGRAM_BOT_TOKEN",
      "VITE_TELEGRAM_CHAT_ID",
    ] as const;

    if (requiredEnv.some((key) => !process.env[key])) {
      return NextResponse.json(
        { message: "Konfigurasi pengiriman pesan belum lengkap." },
        { status: 500 },
      );
    }

    const telegramText = [
      `Name : ${name}`,
      `Email : ${email}`,
      `Message : ${message}`,
    ].join("\n");

    const telegramRequest = fetch(
      `https://api.telegram.org/bot${process.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.VITE_TELEGRAM_CHAT_ID,
          text: telegramText,
        }),
      },
    );

    const telegramResponse = await telegramRequest;

    if (!telegramResponse.ok) {
      console.error("Telegram delivery failed", {
        status: telegramResponse.status,
        details: await telegramResponse.text(),
      });

      return NextResponse.json(
        {
          message:
            "Pengiriman ke Telegram gagal. Periksa konfigurasi Telegram.",
        },
        { status: 502 },
      );
    }

    submissionLog.set(submissionKey, Date.now());

    return NextResponse.json({ message: "Pesan berhasil dikirim." });
  } catch {
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengirim pesan." },
      { status: 500 },
    );
  }
}
