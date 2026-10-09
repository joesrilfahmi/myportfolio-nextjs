"use client";

import type { MouseEvent } from "react";
import {
  FolderKanban,
  House,
  Mail,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { m } from "motion/react";
import { navLinks } from "@/lib/data/shared";
import { transitions } from "@/lib/motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Card } from "../ui/Card";
import { ThemeToggle } from "../shared/ThemeToggle";

const sectionHrefs = navLinks.map((link) => link.href);

const navIcons = {
  "#top": House,
  "#about": UserRound,
  "#projects": FolderKanban,
  "#contact": Mail,
} satisfies Record<(typeof navLinks)[number]["href"], LucideIcon>;

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
    <header className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 md:inset-x-auto md:top-1/2 md:right-[max(1rem,calc((100vw-1920px)/2+1rem))] md:bottom-auto md:-translate-y-1/2">
      <Card
        radius="full"
        depth="md"
        className="flex items-center gap-1.5 px-2.5 py-2.5 md:flex-col"
      >
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 md:flex-col">
            {navLinks.map(({ label, href }) => {
              const Icon = navIcons[href];
              const isActive = activeHref === href;

              return (
                <li key={href} className="relative">
                  <a
                    href={href}
                    onClick={(event) => handleNavigate(event, href)}
                    aria-label={label}
                    aria-current={isActive ? "location" : undefined}
                    title={label}
                    className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ease-neu ${
                      isActive
                        ? "text-primary-ink"
                        : "text-muted hover:text-primary-ink"
                    }`}
                  >
                    <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                  {isActive && (
                    <m.span
                      layoutId="navbar-active-indicator"
                      transition={transitions.spring}
                      aria-hidden="true"
                      className="neu neu-sm neu-well absolute inset-0 rounded-full"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <span
          aria-hidden="true"
          className="mx-1 h-7 w-px bg-border md:mx-0 md:my-1 md:h-px md:w-7"
        />
        <ThemeToggle />
      </Card>
    </header>
  );
}
