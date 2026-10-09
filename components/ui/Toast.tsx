"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { cn } from "@/lib/cn";
import { toastVariants, transitions } from "@/lib/motion";
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

  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-24 z-60 flex justify-center md:bottom-8">
      <AnimatePresence>
        {status && (
          <m.div
            key={status}
            role={isError ? "alert" : "status"}
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={transitions.fast}
            className={cn(
              neu(),
              "pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground",
            )}
          >
            <Icon
              size={18}
              className={isError ? "text-danger" : "text-primary-ink"}
              aria-hidden="true"
            />
            <span>{message}</span>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
