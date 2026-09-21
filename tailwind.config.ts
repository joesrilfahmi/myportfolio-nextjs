import type { Config } from "tailwindcss";

/**
 * Colors are stored as space-separated RGB channels in CSS variables
 * (see app/globals.css), which lets Tailwind apply opacity modifiers
 * such as `bg-accent/20` while the light/dark themes swap the values.
 */
const channel = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: channel("background"),
        surface: channel("surface"),
        foreground: channel("foreground"),
        muted: channel("muted"),
        accent: channel("accent"),
        "accent-light": channel("accent-light"),
        "accent-strong": channel("accent-strong"),
        "accent-ink": channel("accent-ink"),
        "on-accent": channel("on-accent"),
        danger: channel("danger"),
        border: "rgb(var(--foreground) / 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "26px",
        container: "34px",
      },
      transitionTimingFunction: {
        neu: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
