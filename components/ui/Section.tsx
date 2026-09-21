import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const widths = {
  wide: "max-w-6xl",
  narrow: "max-w-6xl",
} as const;

const spacings = {
  default: "py-20 md:py-28",
  hero: "pb-20 pt-36 md:pb-24 md:pt-40",
} as const;

interface SectionProps {
  id: string;
  width?: keyof typeof widths;
  spacing?: keyof typeof spacings;
  className?: string;
  children: ReactNode;
}

/** Shared page-section wrapper: one width, one rhythm, one scroll offset. */
export function Section({
  id,
  width = "wide",
  spacing = "default",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto px-6",
        widths[width],
        spacings[spacing],
        className,
      )}
    >
      {children}
    </section>
  );
}
