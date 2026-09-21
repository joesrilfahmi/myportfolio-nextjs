import type { TimelineEntry } from "@/lib/data";
import { cn } from "@/lib/cn";
import { Card } from "./ui/Card";
import { Reveal } from "./ui/Reveal";

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
      {/* rail: from below the marker to the next row */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-4 top-10 w-px -translate-x-1/2 bg-border md:left-1/2"
        />
      )}

      {/* marker */}
      <Card
        tone="inset"
        depth="sm"
        radius="full"
        className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center md:relative md:col-start-2 md:row-start-1 md:top-0"
      >
        <span className="relative z-10 h-3 w-3 rounded-full bg-accent-ink ring-2 ring-surface shadow-[0_1px_3px_rgb(var(--accent-strong)/0.45)]" />
      </Card>

      <Reveal
        className={cn(
          "md:row-start-1",
          isEven ? "md:col-start-1" : "md:col-start-3",
        )}
      >
        <Card depth="sm" className="p-6 sm:p-7">
          <p className="text-xs font-semibold text-accent-ink">{entry.label}</p>
          <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
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
