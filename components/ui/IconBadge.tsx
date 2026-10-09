import { cn } from "@/lib/cn";
import type { IconType } from "@/types/ui";
import { Card } from "./Card";

const sizes = {
  md: { box: "h-11 w-11", icon: 20 },
  lg: { box: "h-14 w-14", icon: 26 },
} as const;

interface IconBadgeProps {
  icon: IconType;
  size?: keyof typeof sizes;
  className?: string;
}

/** An accent glyph sitting in a small recessed circle. */
export function IconBadge({
  icon: Icon,
  size = "md",
  className,
}: IconBadgeProps) {
  const { box, icon } = sizes[size];

  return (
    <Card
      tone="inset"
      depth="sm"
      radius="full"
      className={cn(
        "flex shrink-0 items-center justify-center text-primary-ink",
        box,
        className,
      )}
    >
      <Icon size={icon} strokeWidth={1.75} aria-hidden="true" />
    </Card>
  );
}
