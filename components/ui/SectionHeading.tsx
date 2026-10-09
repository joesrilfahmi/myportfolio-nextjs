import { cn } from "@/lib/cn";
import { Reveal } from "../motion/Reveal";

interface SectionHeadingProps {
  id: string;
  title: string;
  /** Small label above the title, e.g. "About". */
  eyebrow?: string;
  description?: string;
  /** Drop the bottom margin when the heading sits in a grid column. */
  flush?: boolean;
  className?: string;
}

export function SectionHeading({
  id,
  title,
  eyebrow,
  description,
  flush = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      variant="rise"
      className={cn("max-w-2xl", !flush && "mb-12 md:mb-14", className)}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className="mt-4 font-display text-title font-bold text-foreground"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

/** A short orange rule followed by an uppercase label. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-primary uppercase",
        className,
      )}
    >
      <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-primary" />
      {children}
    </p>
  );
}
