import { formatPeriod, type JourneyEntry } from "@/lib/data/journey";
import { cn } from "@/lib/cn";
import { Reveal } from "../motion/Reveal";
import { Card } from "../ui/Card";
import { Chip } from "../ui/Chip";

interface JourneyItemProps {
  entry: JourneyEntry;
  /** Seconds to wait before the reveal, for a staggered list. */
  delay?: number;
}

/**
 * One stop on the timeline: a raised card with a marker on the rail.
 * The current role gets a gradient marker; past roles get a muted one.
 */
export function JourneyItem({ entry, delay = 0 }: JourneyItemProps) {
  const isCurrent = entry.end == null;

  return (
    <li>
      <Reveal delay={delay} className="relative">
        <span
          aria-hidden="true"
          className="neu neu-sm absolute top-6 -left-10 flex size-8 items-center justify-center rounded-full sm:top-8 sm:-left-14"
        >
          <span
            className={cn(
              "size-3 rounded-full",
              isCurrent ? "bg-gradient-brand" : "bg-primary-muted",
            )}
          />
        </span>

        <Card as="article" radius="3xl" className="p-6 sm:p-8">
          <Chip>
            <time>{formatPeriod(entry)}</time>
          </Chip>

          <h3 className="mt-4 font-display text-xl font-bold text-foreground sm:text-2xl">
            {entry.organization}
          </h3>

          {entry.role ? (
            <p className="mt-1 font-medium text-primary-ink">{entry.role}</p>
          ) : null}

          {entry.summary ? (
            <p className="mt-4 leading-relaxed text-muted">{entry.summary}</p>
          ) : null}
        </Card>
      </Reveal>
    </li>
  );
}
