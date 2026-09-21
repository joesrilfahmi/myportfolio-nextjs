export const personalInfo = {
  name: "Yusril Fahmi",
  username: "joesrilfahmi",
  role: ["Fullstack Developer", "Mobile Developer"],
  email: "joesrilfahmi@gmail.com",
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/joesrilfahmi",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/joesrilfahmi",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: "mail",
  },
] as const;

/* ------------------------------------------------------------------
   Page copy
   ------------------------------------------------------------------ */

export const heroContent = {
  summary:
    "I build practical web and mobile applications with modern technologies and maintainable architecture.",
} as const;

export const aboutContent = {
  title: "About Me",
  paragraph:
    "I work across the full stack — designing APIs, structuring databases, and shipping the interfaces people actually use. On the mobile side, I build Flutter applications that share logic and feel consistent across platforms. Most of my time goes into keeping systems easy to extend, not just easy to launch.",
  highlights: [
    { icon: "layers", label: "Primary Focus", value: "Web & Mobile Products" },
    { icon: "code", label: "Core Stack", value: "Next.js · Laravel · Flutter" },
    {
      icon: "compass",
      label: "Approach",
      value: "Practical · Structured · Iterative",
    },
  ],
} as const;

export const skillsContent = {
  title: "Skills",
  description:
    "Tools I reach for regularly, grouped by where they fit in a product.",
} as const;

export const projectsContent = {
  title: "Selected Projects",
  description:
    "A few products I've built end to end, from schema to shipped interface.",
  emptyTitle: "Projects are on the way",
  emptyDescription:
    "New case studies are being written up. Until then, the code lives on GitHub.",
} as const;

export const contactContent = {
  title: "Let’s Build Something Useful.",
  description: "Have a project, idea, or technical challenge? Let’s talk.",
} as const;

/* ------------------------------------------------------------------
   Skills
   ------------------------------------------------------------------ */

export type SkillCategory = "frontend" | "backend" | "mobile" | "database";

export interface SkillGroupData {
  id: SkillCategory;
  title: string;
  note: string;
  skills: string[];
  /** Spans the full row on larger screens (used for the longest group). */
  wide?: boolean;
}

export const skillGroups: SkillGroupData[] = [
  {
    id: "frontend",
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
    title: "Backend",
    note: "APIs and services that hold up under real usage.",
    skills: ["PHP", "Node.js", "Laravel"],
  },
  {
    id: "mobile",
    title: "Mobile",
    note: "Cross-platform apps from a single codebase.",
    skills: ["Dart", "Flutter"],
  },
  {
    id: "database",
    title: "Database",
    note: "Schemas designed around how the data is actually used.",
    skills: ["MySQL", "PostgreSQL"],
  },
];

/* ------------------------------------------------------------------
   Projects
   ------------------------------------------------------------------ */

export interface Project {
  title: string;
  category: string;
  kind: "mobile" | "web";
  description: string;
  stack: string[];
  href: string;
  githubHref: string;
}

export const projects: Project[] = [
  {
    title: "Healthcare Mobile Platform",
    category: "Mobile · Flutter",
    kind: "mobile",
    description:
      "A mobile application designed to simplify access to hospital services — booking appointments, viewing lab results, and messaging care staff from one place.",
    stack: ["Flutter", "Dart", "REST API"],
    href: "#",
    githubHref: "https://github.com/yusrilfahmi/healthcare-mobile-platform",
  },
];

/* ------------------------------------------------------------------
   Journey (section is currently disabled in app/page.tsx)
   ------------------------------------------------------------------ */

export interface TimelineEntry {
  label: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    label: "Now",
    title: "Fullstack & Mobile Developer",
    description:
      "Building web and mobile applications with practical architecture.",
  },
  {
    label: "Focus",
    title: "Web · API · Mobile",
    description:
      "Working across frontend, backend, database and Flutter applications.",
  },
  {
    label: "Approach",
    title: "Learn by Building",
    description: "Turning real requirements into working software.",
  },
];
