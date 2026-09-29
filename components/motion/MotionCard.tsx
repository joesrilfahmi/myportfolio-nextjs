"use client";

import type { HTMLMotionProps } from "motion/react";
import { m } from "motion/react";
import { interactions, transitions } from "@/lib/motion";

const elements = { div: m.div, article: m.article, ul: m.ul } as const;

export type CardElement = keyof typeof elements;

interface MotionCardProps extends HTMLMotionProps<"div"> {
  as: CardElement;
}

/**
 * The hover behaviour of an interactive Card: it rises a few pixels. Only
 * interactive cards use it, so static surfaces stay Server Components.
 */
export function MotionCard({ as, ...props }: MotionCardProps) {
  const Element = elements[as] as typeof m.div;

  return (
    <Element
      whileHover={interactions.cardHover}
      transition={transitions.fast}
      {...props}
    />
  );
}
