import type { CSSProperties } from "react";
import type { Transition, Variants } from "motion/react";

/**
 * The motion language of the site: soft, smooth, subtle. Everything that
 * animates through Motion pulls its easing, timing and variants from here.
 * (Hover and press feedback is plain CSS; see globals.css.)
 */

export const EASE = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  /** Default entrance / reveal. */
  smooth: { duration: 0.5, ease: EASE },
  /** Small UI state changes. */
  fast: { duration: 0.25, ease: EASE },
} satisfies Record<string, Transition>;

/** Seconds between consecutive items in a revealed list. */
export const STAGGER_STEP = 0.07;
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
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  extrude: {
    hidden: { opacity: 0, y: 16, "--elev": 0 },
    visible: { opacity: 1, y: 0, "--elev": 1 },
  },
} satisfies Record<string, Variants>;

export type RevealVariant = keyof typeof revealVariants;

/** Entrance/exit motion for the floating toast. */
export const toastVariants = {
  hidden: { opacity: 0, y: 24, "--elev": 0 },
  visible: { opacity: 1, y: 0, "--elev": 1 },
  exit: { opacity: 0, y: 12, "--elev": 0 },
} satisfies Variants;

/** Start delay for the CSS-only hero entrance (`hero-in` in globals.css). */
export const heroDelay = (ms: number) =>
  ({ "--delay": `${ms}ms` }) as CSSProperties;
