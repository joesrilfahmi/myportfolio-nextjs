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
  title: "Skills",
  description: "Technologies I use to build web and mobile products.",
} as const;

export interface Skill {
  name: string;
  icon: SimpleIcon;
}

export const skills: Skill[] = [
  { name: "HTML", icon: siHtml5 },
  { name: "CSS", icon: siCss },
  { name: "JavaScript", icon: siJavascript },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Bootstrap", icon: siBootstrap },
  { name: "TypeScript", icon: siTypescript },
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Svelte", icon: siSvelte },
  { name: "PHP", icon: siPhp },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Laravel", icon: siLaravel },
  { name: "Dart", icon: siDart },
  { name: "Flutter", icon: siFlutter },
  { name: "MySQL", icon: siMysql },
  { name: "PostgreSQL", icon: siPostgresql },
];
