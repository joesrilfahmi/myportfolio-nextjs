# Yusril Fahmi — Portfolio

Personal portfolio built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4** and **Motion**, styled as a soft, blue neumorphic design system with light and dark themes.

## Getting started

```bash
bun install
bun run dev        # http://localhost:3000
```

| Script              | What it does                     |
| ------------------- | -------------------------------- |
| `bun run dev`       | Start the dev server             |
| `bun run build`     | Production build                 |
| `bun run start`     | Serve the production build       |
| `bun run lint`      | ESLint (`eslint-config-next`)    |
| `bun run typecheck` | `tsc --noEmit`                   |
| `bun run format`    | Prettier (with Tailwind sorting) |

## Environment variables

The contact form delivers to Telegram (server-side) and sends an email through EmailJS.
All are read on the server only:

```
VITE_TELEGRAM_BOT_TOKEN=
VITE_TELEGRAM_CHAT_ID=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_SITE_URL=https://your-domain.com   # canonical URL for Open Graph
```

## Project structure

```
app/                 routes, layout, global CSS (design tokens live here)
components/
  ui/                primitives: Card, Button, Chip, Field, Toast…
  motion/            Reveal, MotionCard
  layout/            Navbar, Footer
  sections/          Hero, About, Skills, Projects, Journey, Contact
  shared/            feature components used by the sections
hooks/               useScrollSpy, useContactForm, useTypewriter…
lib/data/            all page content (edit here to change copy)
lib/motion.ts        motion variants, easing, timings
providers/           Theme + Motion providers
```

## Editing content

Everything shown on the page is data in `lib/data/*`: add a project to `projects.ts`,
a skill group to `skills.ts`, or a timeline entry to `journey.ts`; the UI renders it.

## Design system

- **Tokens** (`app/globals.css`): `background`, `surface`, `surface-raised`, `surface-inset`,
  `foreground`, `muted`, `border`, `primary` (+ `-hover`, `-active`, `-soft`, `-muted`, `-ink`), `shadow-light`, `shadow-dark`.
  Tailwind exposes them as utilities (`bg-surface`, `text-primary-ink`).
- **Neumorphism**: `Card` (`tone="raised" | "inset"`, `depth`, `radius`, `interactive`),
  `Button` (`primary | raised | inset`), `IconButton`, `InputField`/`TextAreaField`.
- **Motion**: variants and timings in `lib/motion.ts`; `<Reveal>` for scroll entrances.
  `prefers-reduced-motion` is respected.
