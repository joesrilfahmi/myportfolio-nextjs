import { personalInfo } from "@/lib/data/shared";

const role = "Fullstack & Mobile Developer";

export const siteConfig = {
  name: personalInfo.name,
  title: `${personalInfo.name} | Portfolio`,
  shortDescription:
    "Building practical, maintainable web and mobile applications with modern technologies.",
  description: `Portfolio of ${personalInfo.name}, a ${role} building practical, maintainable web and mobile applications with Next.js, Laravel, and Flutter.`,
  keywords: [
    personalInfo.name,
    "Fullstack Developer",
    "Mobile Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Laravel Developer",
    "Portfolio",
  ] as string[],
  /** Set NEXT_PUBLIC_SITE_URL in production; Vercel's URL is used as a fallback. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
} as const;
