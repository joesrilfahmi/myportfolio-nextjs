"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { navLinks, personalInfo } from "@/lib/data/shared";
import { cn } from "@/lib/cn";
import { transitions } from "@/lib/motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Card } from "../ui/Card";
import { IconButton } from "../ui/Button";
import { ThemeToggle } from "../shared/ThemeToggle";

const sectionHrefs = navLinks.map((link) => link.href);

const initials = personalInfo.name
  .trim()
  .split(/\s+/)
  .map((word) => word.charAt(0))
  .join("");

/** Delay before scrolling so the mobile menu can finish closing first. */
const MENU_CLOSE_DELAY = 250;

const linkLayouts = {
  desktop: {
    list: "flex items-center gap-1",
    link: "rounded-full px-4 py-2",
    radius: 9999,
  },
  mobile: {
    list: "flex flex-col gap-1",
    link: "rounded-2xl px-4 py-3",
    radius: 16,
  },
} as const;

interface NavLinksProps {
  activeHref: string;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
  variant: keyof typeof linkLayouts;
}

/** The link list, rendered once per layout (desktop bar / mobile sheet). */
function NavLinks({ activeHref, onNavigate, variant }: NavLinksProps) {
  const layout = linkLayouts[variant];

  return (
    <ul className={layout.list}>
      {navLinks.map(({ label, href }) => {
        const isActive = activeHref === href;

        return (
          <li key={href} className="relative">
            <a
              href={href}
              onClick={(event) => onNavigate(event, href)}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "relative z-10 block text-sm font-medium transition-colors duration-300 ease-neu",
                layout.link,
                isActive
                  ? "text-primary-ink"
                  : "text-muted hover:text-foreground",
              )}
            >
              {label}
            </a>

            {/* One shared indicator that slides between links. */}
            {isActive && (
              <m.span
                layoutId={`nav-active-${variant}`}
                transition={transitions.spring}
                style={{ borderRadius: layout.radius }}
                aria-hidden="true"
                className="neu neu-sm neu-well absolute inset-0"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeHref, navigate } = useScrollSpy(sectionHrefs);

  const handleNavigate =
    (closeMenu: boolean) =>
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      if (closeMenu) setIsOpen(false);
      navigate(href, closeMenu ? MENU_CLOSE_DELAY : 0);
    };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-3xl">
        <Card
          radius="full"
          className="flex items-center justify-between gap-2 px-3 py-2.5"
        >
          <IconButton
            href="#top"
            label="Back to top"
            accent
            onClick={() => setIsOpen(false)}
            className="text-sm font-bold tracking-tight"
          >
            {initials}
          </IconButton>

          <nav aria-label="Primary" className="hidden md:block">
            <NavLinks
              variant="desktop"
              activeHref={activeHref}
              onNavigate={handleNavigate(false)}
            />
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <IconButton
              label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              active={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="md:hidden"
            >
              {isOpen ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </IconButton>
          </div>
        </Card>

        <AnimatePresence>
          {isOpen && (
            <m.nav
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={transitions.fast}
              className="origin-top md:hidden"
            >
              <Card radius="3xl" className="mt-3 p-3">
                <NavLinks
                  variant="mobile"
                  activeHref={activeHref}
                  onNavigate={handleNavigate(true)}
                />
              </Card>
            </m.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
