import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Card } from "./Card";

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm",
} as const;

type ChipSize = keyof typeof sizes;

/** A single inset pill: a project category, a skill, a "+N" overflow. */
export function Chip({
  children,
  size = "sm",
  muted = false,
  className,
}: {
  children: ReactNode;
  size?: ChipSize;
  muted?: boolean;
  className?: string;
}) {
  return (
    <Card
      tone="inset"
      depth="sm"
      radius="full"
      className={cn(
        "inline-block font-medium",
        muted ? "text-muted" : "text-foreground",
        sizes[size],
        className,
      )}
    >
      {children}
    </Card>
  );
}

interface ChipListProps {
  items: readonly string[];
  size?: ChipSize;
  /** Show at most this many chips, then a "+N" chip for the rest. */
  limit?: number;
  className?: string;
}

/** A wrapped list of chips, used for skills and project stacks. */
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
      {visible.map((item) => (
        <li key={item}>
          <Chip size={size}>{item}</Chip>
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <Chip size={size} muted>
            +{hidden}
          </Chip>
        </li>
      )}
    </ul>
  );
}
