import { CodeXml, Compass, Layers } from "lucide-react";
import type { IconType } from "@/types/ui";

export interface AboutHighlight {
  icon: IconType;
  label: string;
  value: string;
}

export const aboutContent = {
  eyebrow: "About",
  title: "About Me",
  paragraph:
    "I work across the full stack. I design APIs and structure databases, then build the interfaces on top of them. On mobile, I write Flutter apps that share logic and feel consistent across platforms. I spend most of my time keeping systems easy to extend.",
} as const;

export const aboutHighlights: readonly AboutHighlight[] = [
  { icon: Layers, label: "Primary Focus", value: "Web & Mobile Products" },
  { icon: CodeXml, label: "Core Stack", value: "Next.js · Laravel · Flutter" },
  {
    icon: Compass,
    label: "Approach",
    value: "Structured · Iterative",
  },
];
