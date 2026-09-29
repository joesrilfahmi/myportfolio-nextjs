/** Height reserved for the fixed navbar when scrolling to a section. */
export const NAV_OFFSET = 96;

/** Fired by any in-page link; the navbar's scroll spy listens for it. */
export const SECTION_NAVIGATE_EVENT = "portfolio:section-navigate";

export function scrollToSection(
  id: string,
  behavior: ScrollBehavior = "smooth",
) {
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: Math.max(0, top - NAV_OFFSET), behavior });
}

/** Asks the scroll spy to navigate to a `#section` (offset + active state). */
export function navigateToSection(hash: string) {
  window.dispatchEvent(
    new CustomEvent<string>(SECTION_NAVIGATE_EVENT, { detail: hash }),
  );
}

/** True for `#about`-style links; a bare `#` is left to the browser. */
export const isSectionHash = (href: string) =>
  href.startsWith("#") && href.length > 1;
