"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { EASE } from "@/lib/motion";
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: turn, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: -turn, scale: 0.5 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="absolute"
        >
          <Icon size={18} strokeWidth={1.75} />
        </motion.span>
      </AnimatePresence>
    </IconButton>
  );
}
