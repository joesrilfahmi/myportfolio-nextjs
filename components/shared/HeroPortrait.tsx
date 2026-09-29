"use client";

import Image from "next/image";
import { m } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { EASE } from "@/lib/motion";
import { personalInfo } from "@/lib/data/shared";
import { Card } from "../ui/Card";

/** Profile photo in a neumorphic frame, with a blue arc that draws once. */
export function HeroPortrait() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div className="relative aspect-square w-[min(19rem,calc(100vw-5rem))] sm:w-80 md:w-[23rem] lg:w-[26rem]">
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 z-10 h-[calc(100%+3rem)] w-[calc(100%+3rem)] -rotate-90"
      >
        <m.circle
          cx="50"
          cy="50"
          r="49"
          fill="none"
          strokeWidth="1.1"
          strokeLinecap="round"
          className="stroke-primary-ink"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 0.64 }}
          transition={{
            duration: reduceMotion ? 0 : 1.6,
            delay: reduceMotion ? 0 : 0.6,
            ease: EASE,
          }}
        />
      </svg>

      <Card radius="full" depth="lg" className="h-full w-full p-4">
        <Card
          tone="inset"
          radius="full"
          className="neu-over relative h-full w-full overflow-hidden"
        >
          <Image
            src="/images/profile.png"
            alt={`Portrait of ${personalInfo.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 416px, (min-width: 768px) 368px, (min-width: 640px) 320px, 304px"
            className="object-cover"
          />
        </Card>
      </Card>
    </div>
  );
}
