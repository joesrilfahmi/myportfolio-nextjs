"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { IconButton } from "./ui/Button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const Icon = isDark ? Moon : Sun;
  // The icon turns in the direction of travel: in from one side, out the other.
  const turn = isDark ? -90 : 90;

  return (
    <IconButton
      label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="relative"
    >
      <span
        key={theme}
        className="absolute animate-theme-icon"
        style={{ "--theme-turn": `${turn}deg` } as React.CSSProperties}
      >
        <Icon size={18} strokeWidth={1.75} />
      </span>
    </IconButton>
  );
}
