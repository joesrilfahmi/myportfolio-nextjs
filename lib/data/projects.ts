export interface Project {
  title: string;
  year: number;
  category: string;
  kind: "mobile" | "web";
  thumbnail?: string;
  description: string;
  stack: string[];
  /** Live demo or case study. Leave out until one exists. */
  href?: string;
  /** Source repository. */
  githubHref?: string;
}

export const projectsContent = {
  eyebrow: "Projects",
  title: "Selected Projects",
  description:
    "A few products I've built end to end, from schema to shipped interface.",
  emptyTitle: "No projects listed yet",
  emptyDescription:
    "I'm writing up new case studies. Until they're ready, my code is on GitHub.",
} as const;

export const projects: Project[] = [
  {
    title: "Healthcare Mobile Platform",
    year: 2026,
    category: "Mobile · Flutter",
    kind: "mobile",
    thumbnail: "/images/project/contoh.jpg",
    description:
      "A mobile app that gives patients one place to book appointments, view lab results, and message care staff.",
    stack: [
      "Flutter",
      "Dart",
      "REST API",
      "Firebase",
      "Google Maps API",
      "Google Cloud",
    ],
    href: "https://github.com/yusrilfahmi/healthcare-mobile-platform",
    githubHref: "https://github.com/yusrilfahmi/healthcare-mobile-platform",
  },
];
