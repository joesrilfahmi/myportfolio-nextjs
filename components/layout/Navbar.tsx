"use client";

import type { MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/data/shared";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeToggle } from "../shared/ThemeToggle";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Wordmark } from "./Wordmark";

const sectionHrefs = navLinks.map((link) => link.href);

/**
 * One navigation, two presentations:
 * - mobile: a compact floating dock at the bottom (icons only, thumb reach)
 * - md and up: a floating pill at the top with wordmark, labelled links,
 *   theme toggle and a contact button.
 * The active section is shown as a recessed well that fades in; the
 * state comes from `aria-current`, so there is no extra JavaScript.
 */
export function Navbar() {
  const { activeHref, navigate } = useScrollSpy(sectionHrefs);

  const handleNavigate = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    navigate(href);
  };

  return (
    <header className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:top-4 md:bottom-auto">
      <Card
        radius="full"
        depth="md"
        className="flex items-center gap-1.5 p-2 md:w-full md:max-w-4xl md:justify-between md:gap-4 md:py-2 md:pr-2.5 md:pl-3"
      >
        <a
          href="#top"
          onClick={(event) => handleNavigate(event, "#top")}
          aria-label="Back to top"
          className="hidden rounded-full md:inline-flex"
        >
          <Wordmark />
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ label, href, icon: Icon, cta }) => {
              const isActive = activeHref === href;

              return (
                <li
                  key={href}
                  // Home is the wordmark on desktop and is dropped from the
                  // dock below 360px so the dock fits; Contact is the button.
                  className={cn(
                    href === "#top" && "max-[359px]:hidden md:hidden",
                    cta && "md:hidden",
                  )}
                >
                  <a
                    href={href}
                    onClick={(event) => handleNavigate(event, href)}
                    aria-current={isActive ? "location" : undefined}
                    title={label}
                    className={cn(
                      "group relative inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ease-neu md:h-10 md:w-auto md:px-4",
                      isActive
                        ? "text-primary-ink"
                        : "text-muted hover:text-primary-ink",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "neu neu-sm neu-well absolute inset-0 rounded-full transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <Icon
                      size={19}
                      strokeWidth={1.75}
                      aria-hidden="true"
                      className="relative md:hidden"
                    />
                    <span className="sr-only text-sm font-medium md:not-sr-only md:relative">
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <span
          aria-hidden="true"
          className="mx-1 h-7 w-px bg-border md:hidden"
        />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Wrapped, because Button already sets its own `display`. */}
          <div className="hidden md:block">
            <Button href="#contact" variant="primary" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </Card>
    </header>
  );
}
