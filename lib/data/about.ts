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
    "I work across the full stack — designing APIs, structuring databases, and shipping the interfaces people actually use. On the mobile side, I build Flutter applications that share logic and feel consistent across platforms. Most of my time goes into keeping systems easy to extend, not just easy to launch.",
} as const;

export const aboutHighlights: readonly AboutHighlight[] = [
  { icon: Layers, label: "Primary Focus", value: "Web & Mobile Products" },
  { icon: CodeXml, label: "Core Stack", value: "Next.js · Laravel · Flutter" },
  {
    icon: Compass,
    label: "Approach",
    value: "Practical · Structured · Iterative",
  },
];
