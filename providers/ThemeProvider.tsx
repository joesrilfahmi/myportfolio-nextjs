"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const THEME_STORAGE_KEY = "portfolio-theme";
/** How long the cross-fade class stays on <html> after a toggle (ms). */
const THEME_TRANSITION_MS = 140;

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * Inline, blocking script rendered before hydration. It reads the persisted
 * theme (or falls back to the OS preference) and applies the `dark` class to
 * <html> immediately, so there is no flash of the wrong theme on load.
 */
export function ThemeInitScript() {
  const script = `
    (function () {
      try {
        var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
        var theme = stored === "light" || stored === "dark"
          ? stored
          : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        }
      } catch (e) {}
    })();
  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  // Briefly enable the cross-fade so colors and shadows re-light smoothly.
  root.classList.add("theme-transition");
  root.classList.toggle("dark", theme === "dark");
  window.setTimeout(
    () => root.classList.remove("theme-transition"),
    THEME_TRANSITION_MS,
  );

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // localStorage may be unavailable (e.g. privacy mode) — theme still
    // works for the current session.
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
