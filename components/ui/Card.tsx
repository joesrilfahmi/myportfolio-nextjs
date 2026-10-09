import { createElement, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { neu, type NeuDepth, type NeuTone } from "@/lib/neu";

/** Larger radii for larger surfaces: xl controls -> 4xl page sections. */
const radii = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
  full: "rounded-full",
} as const;

type CardElement = "div" | "article" | "section" | "li" | "form";

interface CardProps extends HTMLAttributes<HTMLElement> {
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
 * all use it. It is a plain Server Component: hover and press feedback
 * are CSS, so no client JavaScript is shipped for it.
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
  return createElement(as, {
    className: cn(neu({ tone, depth, interactive }), radii[radius], className),
    ...props,
  });
}
