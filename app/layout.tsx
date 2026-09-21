import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeInitScript, ThemeProvider } from "@/providers/ThemeProvider";

/** One family for the whole site: rounded, geometric forms suit the soft
 *  neumorphic surfaces and stay legible at small sizes. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yusril Fahmi — Fullstack & Mobile Developer",
  description:
    "Portfolio of Yusril Fahmi, a Fullstack and Mobile Developer building practical, maintainable web and mobile applications with Next.js, Laravel, and Flutter.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "Yusril Fahmi",
    "Fullstack Developer",
    "Mobile Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Laravel Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Yusril Fahmi - Fullstack & Mobile Developer",
    description:
      "Building practical, maintainable web and mobile applications with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
