import { createElement, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { neu, type NeuDepth, type NeuTone } from "@/lib/neu";

const radii = {
  card: "rounded-card",
  container: "rounded-container",
  xl: "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
} as const;

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "ul";
  /** `raised` stands out of the surface, `inset` is a recessed well. */
  tone?: NeuTone;
  depth?: NeuDepth;
  radius?: keyof typeof radii;
  /** Adds the hover response (lift for raised, pop for inset). */
  interactive?: boolean;
}

/** The one neumorphic container. Cards, wells, the navbar and forms use it. */
export function Card({
  as = "div",
  tone = "raised",
  depth = "md",
  radius = "card",
  interactive = false,
  className,
  ...props
}: CardProps) {
  return createElement(as, {
    className: cn(neu({ tone, depth, interactive }), radii[radius], className),
    ...props,
  });
}
