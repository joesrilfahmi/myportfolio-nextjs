import { useCallback, useEffect, useRef, useState } from "react";
import { scrollToSection } from "@/lib/scroll";

/**
 * Tracks which section is in view and provides a `navigate` function that
 * scrolls to one. While a navigation is in flight the clicked link stays
 * active, so the highlight doesn't flicker through every section passed.
 */
export function useScrollSpy(hrefs: readonly string[]) {
  const [activeHref, setActiveHref] = useState<string>(hrefs[0]);
  const pendingHrefRef = useRef<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const navigate = useCallback((href: string, delay = 0) => {
    setActiveHref(href);
    pendingHrefRef.current = href;

    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      scrollToSection(href.slice(1));
      timeoutRef.current = null;
    }, delay);
  }, []);

  useEffect(() => {
    // Always start at the top, without a stale #hash in the URL.
    window.history.scrollRestoration = "manual";
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "auto" });

    const sections = hrefs
      .map((href) => document.getElementById(href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible[0]) return;

        const pendingHref = pendingHrefRef.current;
        const pendingEntry = pendingHref
          ? visible.find((entry) => `#${entry.target.id}` === pendingHref)
          : undefined;

        if (pendingHref && !pendingEntry) return;

        pendingHrefRef.current = null;
        setActiveHref(`#${(pendingEntry ?? visible[0]).target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      window.history.scrollRestoration = "auto";
    };
  }, [hrefs]);

  return { activeHref, navigate };
}
