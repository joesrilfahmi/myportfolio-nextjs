import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const spacings = {
  default: "py-20 md:py-28",
  hero: "pt-36 pb-20 md:pt-40 md:pb-24",
} as const;

interface SectionProps {
  id: string;
  /** Id of the section's heading, so the landmark has an accessible name. */
  titleId?: string;
  spacing?: keyof typeof spacings;
  className?: string;
  children: ReactNode;
}

/** Shared page-section wrapper: one width, one rhythm, one scroll offset. */
export function Section({
  id,
  titleId,
  spacing = "default",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn("mx-auto max-w-6xl px-6", spacings[spacing], className)}
    >
      {children}
    </section>
  );
}
