import { cn } from "@/lib/cn";
import { Card } from "./Card";

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm",
} as const;

interface ChipListProps {
  items: readonly string[];
  size?: keyof typeof sizes;
  /** Show at most this many chips, then a "+N" chip for the rest. */
  limit?: number;
  className?: string;
}

/** A wrapped list of inset pills — used for skills and project stacks. */
export function ChipList({
  items,
  size = "md",
  limit,
  className,
}: ChipListProps) {
  const visible = limit ? items.slice(0, limit) : items;
  const hidden = items.length - visible.length;

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {visible.map((item, index) => (
        <li key={`${item}-${index}`}>
          <Card
            as="div"
            tone="inset"
            depth="sm"
            radius="full"
            className={cn("font-medium text-foreground", sizes[size])}
          >
            {item}
          </Card>
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <Card
            as="div"
            tone="inset"
            depth="sm"
            radius="full"
            className={cn("font-medium text-muted", sizes[size])}
          >
            +{hidden}
          </Card>
        </li>
      )}
    </ul>
  );
}

/** A single label pill (e.g. a project category). */
export function Chip({
  children,
  size = "sm",
}: {
  children: React.ReactNode;
  size?: keyof typeof sizes;
}) {
  return (
    <Card
      tone="inset"
      depth="sm"
      radius="full"
      className={cn("inline-block font-medium text-muted", sizes[size])}
    >
      {children}
    </Card>
  );
}
