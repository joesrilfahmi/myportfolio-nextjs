import { NextResponse } from "next/server";

export function GET() {
  const config = {
    serviceId: process.env.VITE_EMAILJS_SERVICE_ID,
    templateId: process.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  if (Object.values(config).some((value) => !value)) {
    return NextResponse.json(
      { message: "Konfigurasi EmailJS belum lengkap." },
      { status: 500 },
    );
  }

  return NextResponse.json(config, {
    headers: { "Cache-Control": "public, max-age=3600" },
  });
}
