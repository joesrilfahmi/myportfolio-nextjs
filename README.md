# Yusril Fahmi — Portfolio

Personal developer portfolio built with **Next.js (App Router)**, **React 19**,
**TypeScript (strict)**, **Tailwind CSS v4** and **Motion**. The design is a
soft, professional **orange neumorphism** (`#D65400`) with a full light and
dark theme.

## Features

- Orange neumorphic design system driven by CSS design tokens, light and dark.
- Theme follows the OS until the visitor chooses; the choice persists and is
  applied before first paint, so there is no wrong-theme flash.
- Floating navigation with an active-section indicator (top pill on desktop,
  bottom dock on mobile).
- Server Components by default; client JavaScript only where it is needed
  (navigation, theme, scroll reveals, contact form).
- CSS-only hero entrance, Motion scroll reveals, and full `prefers-reduced-motion`
  support. Content stays visible without JavaScript.
- Contact form with validation, honeypot, rate limiting and delivery to
  Telegram (server-side) and email (EmailJS). It reports an error instead of
  pretending to succeed when delivery is not configured.
- Optional GitHub contribution calendar (server-side, cached for one hour).
- SEO: metadata, Open Graph / Twitter images, canonical URL, `robots.txt`,
  `sitemap.xml`, generated icons.
- Self-hosted fonts (Inter and Space Grotesk, Latin subset): no third-party
  font requests.

## Tech stack

| Area      | Choice                                            |
| --------- | ------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack) · React 19     |
| Language  | TypeScript, `strict`                              |
| Styling   | Tailwind CSS v4 + CSS variables (design tokens)   |
| Motion    | `motion` (LazyMotion, `domAnimation`) + CSS       |
| Icons     | `lucide-react`, `simple-icons` (technology logos) |
| Email     | `@emailjs/browser`                                |
| Quality   | ESLint (`eslint-config-next`), Prettier, `tsc`    |

## Prerequisites

- Node.js **20.9 or newer** (Node 22 LTS recommended)
- npm (the project is npm-only; `package-lock.json` is the lockfile)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                           |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Start the development server           |
| `npm run build`     | Production build                       |
| `npm run start`     | Serve the production build             |
| `npm run lint`      | ESLint                                 |
| `npm run typecheck` | `tsc --noEmit`                         |
| `npm run format`    | Prettier (with Tailwind class sorting) |

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need. Everything is
read on the server only. The site runs without any of them; the features below
simply stay off.

| Variable                                                                         | Enables                                |
| -------------------------------------------------------------------------------- | -------------------------------------- |
| `VITE_TELEGRAM_BOT_TOKEN`, `VITE_TELEGRAM_CHAT_ID`                               | Contact form delivery to Telegram      |
| `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` | Contact form email via EmailJS         |
| `GITHUB_TOKEN`, `GITHUB_USERNAME`                                                | GitHub contribution calendar           |
| `NEXT_PUBLIC_SITE_URL`                                                           | Canonical URL for Open Graph / sitemap |

The `VITE_` prefix is kept from the original project so existing environments
keep working; these values are never exposed to the browser except the EmailJS
public key, which EmailJS designs to be public. Set `NEXT_PUBLIC_SITE_URL`
(e.g. `https://your-domain.com`) in production; on Vercel the production URL
is used as a fallback.

## Project structure

```
app/                  routes, layout, metadata files, global CSS (design tokens)
  api/contact/        contact form endpoints
  fonts/              self-hosted variable fonts (+ licences)
components/
  layout/             Navbar, Footer, Wordmark
  sections/           Hero, About, Skills, Projects, Contact
  shared/             feature components used by sections
  ui/                 primitives: Card, Button, Chip, Field, Toast…
  motion/             Reveal (scroll-triggered entrance)
hooks/                useScrollSpy, useContactForm
lib/data/             all page content (edit here to change copy)
lib/                  motion, neumorphism helpers, site config, utilities
providers/            Theme and Motion providers
types/                shared TypeScript types
```

## Editing content

Everything on the page is data in `lib/data/*`:

- `projects.ts`: add a project and it renders. The first one is featured at
  full width; the rest appear in a grid. `href` (live demo) and `githubHref`
  are optional, and buttons only appear for links that exist.
- `skills.ts`: technology groups and their icons.
- `about.ts`, `hero.ts`, `contact.ts`, `shared.ts`: copy, navigation and
  social links.

Project preview images go in `public/images/project/`. The current
`contoh.jpg` is a placeholder; replace it with a real screenshot.

## Design system

- **Tokens** live in `app/globals.css`: `background`, `surface`, `foreground`,
  `muted`, `border`, `primary` (+ `-hover`, `-ink`, `-soft`, `-muted`,
  `-foreground`) and the shadow pair. Tailwind exposes them as utilities
  (`bg-surface`, `text-primary-ink`). Change the brand colour in one place.
- **Contrast**: `#D65400` is used for fills and large text. White on it is
  4.1:1, so the primary button uses dark text (4.7:1). Orange _text_ and icons
  on surfaces use `primary-ink` (≥ 5:1 in both themes).
- **Neumorphism**: `Card` (`tone="raised" | "inset"`, `depth`, `radius`,
  `interactive`), `Button` (`primary | raised | inset`), `IconButton`, and the
  field components. Shadow depth is controlled by the `--elev` variable.
- **Typography**: Space Grotesk for headings, Inter for body. Fluid sizes are
  defined as `text-display`, `text-title` and `text-lead`.
- **Motion**: timings and variants in `lib/motion.ts`; hover and press feedback
  are CSS. Animations use only `transform` and `opacity` (plus the shadow
  elevation on first reveal).

## Deployment

The app deploys as a standard Next.js project.

- **Vercel**: import the repository, add the environment variables above, and
  deploy. No extra configuration is needed.
- **Self-hosted**: `npm run build` then `npm run start` behind a reverse proxy.
  The contact API uses an in-memory rate limiter, which is per instance.

See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)
for other targets.

## Fonts

Inter and Space Grotesk are bundled under the SIL Open Font License 1.1; see
`app/fonts/`.
