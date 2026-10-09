import { cn } from "@/lib/cn";
import { personalInfo } from "@/lib/data/shared";
import { Card } from "../ui/Card";

/** Minimal identity mark: initials in a small recessed disc, plus the name. */
export function Wordmark({
  className,
  showName = true,
}: {
  className?: string;
  showName?: boolean;
}) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <Card
        tone="inset"
        depth="sm"
        radius="full"
        className="flex h-10 w-10 shrink-0 items-center justify-center font-display text-sm font-bold tracking-tight text-primary-ink"
      >
        <span aria-hidden="true">{personalInfo.initials}</span>
      </Card>
      {showName ? (
        <span className="font-display text-base font-bold tracking-tight text-foreground">
          {personalInfo.name}
        </span>
      ) : null}
    </div>
  );
}
