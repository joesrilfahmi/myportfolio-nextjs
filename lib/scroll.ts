import type { MouseEvent } from "react";

/** Height reserved for the fixed navbar when scrolling to a section. */
export const NAV_OFFSET = 96;

export function scrollToSection(
  id: string,
  behavior: ScrollBehavior = "smooth",
) {
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: Math.max(0, top - NAV_OFFSET), behavior });
}

/** Props for an in-page anchor that scrolls with the navbar offset applied. */
export function sectionLink(hash: `#${string}`) {
  return {
    href: hash,
    onClick: (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      window.dispatchEvent(
        new CustomEvent("portfolio:section-navigate", { detail: hash }),
      );
    },
  };
}
