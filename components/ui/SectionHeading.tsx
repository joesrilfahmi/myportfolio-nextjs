import { cn } from "@/lib/cn";
import { Reveal } from "../motion/Reveal";

interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  id,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      variant="rise"
      className={cn("mb-12 max-w-2xl md:mb-14", className)}
    >
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
