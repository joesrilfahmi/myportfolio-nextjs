import type { TargetAndTransition, Transition, Variants } from "motion/react";

/**
 * The motion language of the site: soft, smooth, subtle. Everything that
 * animates pulls its easing, timing and variants from here.
 */

export const EASE = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  /** Default entrance / reveal. */
  smooth: { duration: 0.6, ease: EASE },
  /** Hover, press and small UI state changes. */
  fast: { duration: 0.25, ease: EASE },
  /** Shared-layout moves such as the navbar's active indicator. */
  spring: { type: "spring", stiffness: 420, damping: 34 },
} satisfies Record<string, Transition>;

/** Seconds between consecutive items in a revealed list. */
export const STAGGER_STEP = 0.08;
export const stagger = (index: number, step = STAGGER_STEP) => index * step;

/** Reveal once, when 20% of the element is visible. */
export const VIEWPORT = { once: true, amount: 0.2 } as const;

/**
 * Reveal variants.
 *  rise    - plain text: fades up.
 *  extrude - surfaces: fade up while their shadows grow from flat (--elev
 *            0 -> 1), so the surface rises out of the page.
 */
export const revealVariants = {
  rise: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  extrude: {
    hidden: { opacity: 0, y: 20, scale: 0.98, "--elev": 0 },
    visible: { opacity: 1, y: 0, scale: 1, "--elev": 1 },
  },
} satisfies Record<string, Variants>;

export type RevealVariant = keyof typeof revealVariants;

/** Interaction targets, deliberately tiny. */
export const interactions = {
  cardHover: { y: -2 },
  buttonHover: { y: -2 },
  buttonTap: { y: 0 },
  iconTap: { y: 0 },
} satisfies Record<string, TargetAndTransition>;
