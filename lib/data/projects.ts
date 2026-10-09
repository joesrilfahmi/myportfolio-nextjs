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
  emptyTitle: "Projects are on the way",
  emptyDescription:
    "New case studies are being written up. Until then, the code lives on GitHub.",
} as const;

export const projects: Project[] = [
  {
    title: "Healthcare Mobile Platform",
    year: 2026,
    category: "Mobile · Flutter",
    kind: "mobile",
    thumbnail: "/images/project/contoh.jpg",
    description:
      "A mobile application designed to simplify access to hospital services — booking appointments, viewing lab results, and messaging care staff from one place.",
    stack: [
      "Flutter",
      "Dart",
      "REST API",
      "Firebase",
      "Google Maps API",
      "Google Cloud",
    ],
    githubHref: "https://github.com/yusrilfahmi/healthcare-mobile-platform",
  },
];
