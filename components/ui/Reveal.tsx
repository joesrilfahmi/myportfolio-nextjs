"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

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
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

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
