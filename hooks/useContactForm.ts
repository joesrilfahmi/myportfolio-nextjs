import { useCallback, useEffect, useState, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

export type ContactStatus = "idle" | "sending" | "success" | "error";

const initialValues = { name: "", email: "", message: "" };

interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

type ApiResult<T = object> = Partial<T> & { message?: string };

/**
 * Owns the contact form's state and submission flow:
 * 1. validate + deliver to Telegram through our API route,
 * 2. then send the email through EmailJS.
 */
export function useContactForm() {
  const [values, setValues] = useState(initialValues);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [alertMessage, setAlertMessage] = useState("");

  // Clear the success / error notice after a while.
  useEffect(() => {
    if (status === "idle" || status === "sending") return;

    const timeout = window.setTimeout(
      () => {
        setStatus("idle");
        setAlertMessage("");
      },
      status === "error" ? 7000 : 5000,
    );

    return () => window.clearTimeout(timeout);
  }, [status]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setValues((previous) => ({ ...previous, [name]: value }));
    },
    [],
  );

  const submit = useCallback(
    async (form: HTMLFormElement) => {
      if (!form.reportValidity()) return;

      const { name, email, message } = values;
      const website = String(new FormData(form).get("website") ?? "");

      setStatus("sending");
      setAlertMessage("");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message, website, startedAt }),
        });
        const result = (await response.json()) as ApiResult;

        if (!response.ok) {
          throw new Error(result.message ?? "Pesan gagal dikirim.");
        }

        const configResponse = await fetch("/api/contact/config");
        const config =
          (await configResponse.json()) as ApiResult<EmailJsConfig>;
        const { serviceId, templateId, publicKey } = config;

        if (!configResponse.ok || !serviceId || !templateId || !publicKey) {
          throw new Error(
            config.message ?? "Konfigurasi EmailJS belum lengkap.",
          );
        }

        await emailjs.send(
          serviceId,
          templateId,
          {
            name,
            email,
            message: [
              `Name : ${name}`,
              `Email : ${email}`,
              `Message : ${message}`,
            ].join("\n"),
            from_name: name,
            from_email: email,
            reply_to: email,
            user_name: name,
            user_email: email,
          },
          publicKey,
        );

        setStatus("success");
        setAlertMessage("Pesan berhasil dikirim.");
        setValues(initialValues);
        setStartedAt(Date.now());
      } catch (error) {
        setStatus("error");
        setAlertMessage(
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan saat mengirim pesan.",
        );
      }
    },
    [values, startedAt],
  );

  return { values, handleChange, submit, status, alertMessage };
}
