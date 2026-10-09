import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_OFFSET, scrollToSection } from "@/lib/scroll";

/**
 * Tracks which section is in view and provides a `navigate` function that
 * scrolls to one. While a navigation is in flight the clicked link stays
 * active, so the highlight doesn't flicker through every section passed.
 */
export function useScrollSpy(hrefs: readonly string[]) {
  const [activeHref, setActiveHref] = useState<string>(hrefs[0]);
  const timeoutRef = useRef<number | null>(null);
  const pendingHrefRef = useRef<string | null>(null);
  const pendingTimeoutRef = useRef<number | null>(null);

  const navigate = useCallback((href: string, delay = 0) => {
    setActiveHref(href);
    pendingHrefRef.current = href;

    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    if (pendingTimeoutRef.current !== null) {
      window.clearTimeout(pendingTimeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      scrollToSection(href.slice(1));
      timeoutRef.current = null;
    }, delay);

    pendingTimeoutRef.current = window.setTimeout(() => {
      pendingHrefRef.current = null;
      pendingTimeoutRef.current = null;
    }, delay + 900);
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

    let frameId: number | null = null;
    const updateActiveSection = () => {
      frameId = null;
      const marker = NAV_OFFSET + 32;
      let activeSection = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          activeSection = section;
        } else {
          break;
        }
      }

      const atPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      if (atPageBottom) activeSection = sections[sections.length - 1];

      const pendingHref = pendingHrefRef.current;
      if (pendingHref) {
        const pendingSection = sections.find(
          (section) => `#${section.id}` === pendingHref,
        );
        const targetReached =
          pendingHref === "#top"
            ? window.scrollY <= 1
            : pendingSection &&
              (Math.abs(
                pendingSection.getBoundingClientRect().top - NAV_OFFSET,
              ) <= 32 ||
                (atPageBottom && activeSection === pendingSection));

        if (!targetReached) return;
        pendingHrefRef.current = null;
      }

      setActiveHref(`#${activeSection.id}`);
    };

    const onScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      if (pendingTimeoutRef.current !== null) {
        window.clearTimeout(pendingTimeoutRef.current);
      }
      window.history.scrollRestoration = "auto";
    };
  }, [hrefs]);

  return { activeHref, navigate };
}
