import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const spacings = {
  default: "py-20 md:py-28",
  /** Clears the top navbar (md and up) and fills the first screen on large displays. */
  hero: "pt-16 pb-20 md:pt-36 md:pb-24 lg:flex lg:min-h-svh lg:items-center",
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
      className={cn(
        "mx-auto w-full max-w-6xl scroll-mt-24",
        spacings[spacing],
        className,
      )}
    >
      {/* The hero's flex centering needs a full-width child. */}
      <div className="w-full">{children}</div>
    </section>
  );
}
