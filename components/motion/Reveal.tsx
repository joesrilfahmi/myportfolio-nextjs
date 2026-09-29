"use client";

import type { ReactNode } from "react";
import { m } from "motion/react";
import {
  VIEWPORT,
  revealVariants,
  transitions,
  type RevealVariant,
} from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait once the element enters the viewport. */
  delay?: number;
  /** `extrude` for surfaces, `rise` for plain text. */
  variant?: RevealVariant;
  className?: string;
}

/** Scroll-triggered reveal. The single entrance animation used site-wide. */
export function Reveal({
  children,
  delay = 0,
  variant = "extrude",
  className,
}: RevealProps) {
  return (
    <m.div
      className={className}
      variants={revealVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ ...transitions.smooth, delay }}
    >
      {children}
    </m.div>
  );
}
