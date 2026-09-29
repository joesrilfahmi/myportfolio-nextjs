"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { IconButton } from "../ui/Button";

/** Both icons are always rendered; CSS (`dark:`) swaps them, so the right
 *  one shows before React hydrates and nothing flickers. */
const iconClass = "ease-neu absolute transition-all duration-300";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="relative"
    >
      <Sun
        size={18}
        strokeWidth={1.75}
        aria-hidden="true"
        className={`${iconClass} scale-100 rotate-0 opacity-100 dark:scale-50 dark:rotate-90 dark:opacity-0`}
      />
      <Moon
        size={18}
        strokeWidth={1.75}
        aria-hidden="true"
        className={`${iconClass} scale-50 -rotate-90 opacity-0 dark:scale-100 dark:rotate-0 dark:opacity-100`}
      />
    </IconButton>
  );
}
