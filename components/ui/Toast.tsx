"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { EASE } from "@/lib/motion";
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

  return (
    <AnimatePresence>
      {status && (
        <motion.div
          role={isError ? "alert" : "status"}
          aria-live="polite"
          initial={{ opacity: 0, y: 32, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 24, x: "-50%" }}
          transition={{ duration: 0.3, ease: EASE }}
          className={cn(
            neu({ depth: "md" }),
            "fixed bottom-6 left-1/2 z-[60] flex w-[calc(100%-2rem)] max-w-md items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-foreground sm:bottom-8",
          )}
        >
          <Icon
            size={18}
            className={isError ? "text-danger" : "text-accent-ink"}
            aria-hidden="true"
          />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
