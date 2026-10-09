import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { MotionProvider } from "@/providers/MotionProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeScript } from "@/providers/ThemeScript";

/* Two self-hosted variable fonts (Latin subset, SIL OFL): no request to
   Google at build or run time, one file per family, and a size-adjusted
   fallback so text does not jump when the font arrives. */

/** Body and UI text. */
const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

/** Headings: geometric and slightly technical, with strong personality. */
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-space-grotesk",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_US",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e6ebf4" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

/** Without JavaScript nothing can run the scroll reveals, so show everything. */
const noScriptCss =
  ".reveal-item{opacity:1!important;transform:none!important;--elev:1!important}";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <noscript>
          <style>{noScriptCss}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only rounded-full bg-surface-raised px-5 py-3 text-sm font-semibold text-primary-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70]"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
