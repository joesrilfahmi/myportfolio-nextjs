import {
  Database,
  Monitor,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import {
  siBootstrap,
  siCss,
  siDart,
  siFlutter,
  siHtml5,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siReact,
  siSvelte,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

export const skillsContent = {
  eyebrow: "Skills",
  title: "Skills",
  description: "Technologies I use to build web and mobile products.",
} as const;

export interface Skill {
  name: string;
  icon: SimpleIcon;
}

export interface SkillGroup {
  id: "frontend" | "backend" | "mobile" | "database";
  title: string;
  icon: LucideIcon;
  skills: readonly Skill[];
}

/** Same technologies as before, grouped by what they are used for. */
export const skillGroups: readonly SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "HTML", icon: siHtml5 },
      { name: "CSS", icon: siCss },
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Svelte", icon: siSvelte },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Bootstrap", icon: siBootstrap },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "PHP", icon: siPhp },
      { name: "Laravel", icon: siLaravel },
      { name: "Node.js", icon: siNodedotjs },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Dart", icon: siDart },
      { name: "Flutter", icon: siFlutter },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", icon: siMysql },
      { name: "PostgreSQL", icon: siPostgresql },
    ],
  },
];
