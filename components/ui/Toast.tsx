"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { neu } from "@/lib/neu";

export type ToastStatus = "success" | "error";

interface ToastProps {
  status: ToastStatus | null;
  message: string;
}

/** Bottom-center notice that slides up like a raised tile. */
export function Toast({ status, message }: ToastProps) {
  const isError = status === "error";
  const Icon = isError ? AlertCircle : CheckCircle2;

  return status ? (
    <div
      role={isError ? "alert" : "status"}
      aria-live="polite"
      className={cn(
        neu({ depth: "md" }),
        "fixed bottom-6 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground sm:bottom-8",
      )}
    >
      <Icon
        size={18}
        className={isError ? "text-danger" : "text-accent-ink"}
        aria-hidden="true"
      />
      <span>{message}</span>
    </div>
  ) : null;
}
