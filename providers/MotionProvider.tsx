"use client";

import type { ReactNode } from "react";
import { LazyMotion, MotionConfig } from "motion/react";

const loadFeatures = () =>
  import("@/lib/motion-features").then((module) => module.default);

/**
 * App-wide Motion setup.
 * - LazyMotion: the animation engine loads after first paint; components use
 *   the lightweight `m.*` elements (`strict` enforces that).
 * - reducedMotion="user": transform animations switch off for
 *   visitors who enable prefers-reduced-motion.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
