"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait once the element enters the viewport. */
  delay?: number;
  /**
   * `extrude` — surfaces rise out of the base plane (shadows grow in).
   * `rise`    — a quieter lift for plain text.
   */
  variant?: "extrude" | "rise";
  className?: string;
}

/**
 * Scroll-triggered reveal. Visibility is driven by a data attribute and the
 * animation itself lives in CSS (see `[data-reveal]` in globals.css), which
 * keeps it SSR-safe and lets `prefers-reduced-motion` switch it off.
 */
export function Reveal({
  children,
  delay = 0,
  variant = "extrude",
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      data-reveal={variant}
      data-inview={inView}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
