import { createElement, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { neu, type NeuDepth, type NeuTone } from "@/lib/neu";
import { MotionCard, type CardElement } from "../motion/MotionCard";

/** Larger radii for larger surfaces: xl controls -> 4xl page sections. */
const radii = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
  full: "rounded-full",
} as const;

interface CardProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "style" | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
> {
  as?: CardElement;
  /** `raised` stands out of the surface, `inset` is a recessed well. */
  tone?: NeuTone;
  depth?: NeuDepth;
  radius?: keyof typeof radii;
  /** Adds the hover response (lift for raised, pop for inset). */
  interactive?: boolean;
}

/**
 * The one neumorphic container. Cards, wells, chips, the navbar and forms
 * all use it. Static cards render as plain elements (no client JS); only
 * `interactive` ones hydrate to animate on hover.
 */
export function Card({
  as = "div",
  tone = "raised",
  depth = "md",
  radius = "3xl",
  interactive = false,
  className,
  ...props
}: CardProps) {
  const classes = cn(
    neu({ tone, depth, interactive }),
    radii[radius],
    className,
  );

  if (interactive) {
    return <MotionCard as={as} className={classes} {...props} />;
  }
  return createElement(as, { className: classes, ...props });
}
