import type { Project } from "@/lib/data/projects";
import { Card } from "../ui/Card";
import { ChipList } from "../ui/Chip";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMeta } from "./ProjectMeta";
import { ProjectThumbnail } from "./ProjectThumbnail";

/** Compact card for projects after the featured one. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      as="article"
      interactive
      radius="4xl"
      className="flex h-full min-w-0 flex-col p-4 min-[375px]:p-5 sm:p-6"
    >
      <ProjectThumbnail
        kind={project.kind}
        thumbnail={project.thumbnail}
        title={project.title}
      />

      <ProjectMeta project={project} className="mt-6" />

      <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ChipList items={project.stack} size="sm" limit={4} className="mt-6" />

      <ProjectLinks project={project} size="sm" className="mt-7" />
    </Card>
  );
}
