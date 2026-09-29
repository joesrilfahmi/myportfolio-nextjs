import { Database, Monitor, Server, Smartphone } from "lucide-react";
import type { IconType } from "@/types/ui";

export const skillsContent = {
  title: "Skills",
  description:
    "Tools I reach for regularly, grouped by where they fit in a product.",
} as const;

export type SkillCategory = "frontend" | "backend" | "mobile" | "database";

export interface SkillGroupData {
  id: SkillCategory;
  title: string;
  note: string;
  icon: IconType;
  skills: string[];
  wide?: boolean;
}

export const skillGroups: SkillGroupData[] = [
  {
    id: "frontend",
    icon: Monitor,
    title: "Frontend",
    note: "Interfaces that stay maintainable as they grow.",
    wide: true,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "Bootstrap",
      "TypeScript",
      "React",
      "Next.js",
      "Svelte",
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend",
    note: "APIs and services that hold up under real usage.",
    skills: ["PHP", "Node.js", "Laravel"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile",
    note: "Cross-platform apps from a single codebase.",
    skills: ["Dart", "Flutter"],
  },
  {
    id: "database",
    icon: Database,
    title: "Database",
    note: "Schemas designed around how the data is actually used.",
    skills: ["MySQL", "PostgreSQL"],
  },
];
