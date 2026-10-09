import type { TimelineEntry } from "@/lib/data/journey";
import { cn } from "@/lib/cn";
import { Reveal } from "../motion/Reveal";
import { Card } from "../ui/Card";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
}

/**
 * One timeline row. The card is rendered once and placed with CSS grid:
 * on desktop it alternates between the left and right of a center rail,
 * on mobile it sits to the right of a left rail.
 */
export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <li className="relative pb-12 pl-14 last:pb-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:pl-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute top-10 bottom-0 left-4 w-px -translate-x-1/2 bg-border md:left-1/2"
        />
      )}

      <Card
        tone="inset"
        depth="sm"
        radius="full"
        className="absolute top-0.5 left-0 flex h-8 w-8 items-center justify-center md:relative md:top-0 md:col-start-2 md:row-start-1"
      >
        <span className="relative z-10 h-3 w-3 rounded-full bg-primary-ink ring-2 ring-surface" />
      </Card>

      <Reveal
        className={cn(
          "md:row-start-1",
          isEven ? "md:col-start-1" : "md:col-start-3",
        )}
      >
        <Card depth="sm" className="p-6 sm:p-7">
          <p className="text-xs font-semibold text-primary-ink">
            {entry.label}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            {entry.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {entry.description}
          </p>
        </Card>
      </Reveal>
    </li>
  );
}
