"use client";

import type { MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/data/shared";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeToggle } from "../shared/ThemeToggle";
import { Card } from "../ui/Card";

const sectionHrefs = navLinks.map((link) => link.href);

/**
 * One icon-only navigation in both layouts: a bottom dock on small screens
 * and a vertical dock beside the content on larger screens.
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
    <header className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 max-[359px]:px-2 lg:sticky lg:top-1/2 lg:bottom-auto lg:h-fit lg:translate-y-[-50%] lg:self-start lg:px-0">
      <Card
        radius="full"
        depth="md"
        className="flex items-center gap-1.5 p-2 lg:flex-col"
      >
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 lg:flex-col">
            {navLinks.map(({ label, href, icon: Icon }) => {
              const isActive = activeHref === href;

              return (
                <li
                  key={href}
                  className={cn(href === "#top" && "max-[399px]:hidden")}
                >
                  <a
                    href={href}
                    onClick={(event) => handleNavigate(event, href)}
                    aria-current={isActive ? "location" : undefined}
                    title={label}
                    aria-label={label}
                    className={cn(
                      "group relative inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ease-neu max-[359px]:h-10 max-[359px]:w-10",
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
                      className="relative"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <span
          aria-hidden="true"
          className="mx-1 h-7 w-px bg-border lg:mx-0 lg:my-1 lg:h-px lg:w-7"
        />

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </Card>
    </header>
  );
}
