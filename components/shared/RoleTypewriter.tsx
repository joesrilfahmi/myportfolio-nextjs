"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useTypewriter } from "@/hooks/useTypewriter";

/**
 * Cycles through the given roles with a typing effect. Screen readers get
 * the full list once (the animation is hidden from them), and visitors who
 * prefer reduced motion see the roles as static text.
 */
export function RoleTypewriter({ roles }: { roles: readonly string[] }) {
  const reduceMotion = usePrefersReducedMotion();
  const text = useTypewriter(roles, { enabled: !reduceMotion });

  return (
    <>
      <span className="sr-only">{roles.join(" and ")}</span>
      {reduceMotion ? (
        <span aria-hidden="true">{roles.join(" · ")}</span>
      ) : (
        <span
          aria-hidden="true"
          className="inline-flex h-7 items-center whitespace-nowrap sm:h-8"
        >
          {text}
          <span className="ml-1 animate-pulse text-primary-ink">|</span>
        </span>
      )}
    </>
  );
}
