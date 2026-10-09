/** Height reserved for the fixed navbar when scrolling to a section.
 *  Keep in sync with `scroll-mt-24` on <Section>. */
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
