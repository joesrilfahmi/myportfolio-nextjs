import type { Project } from "@/lib/data/projects";
import { Card } from "../ui/Card";
import { ChipList } from "../ui/Chip";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMeta } from "./ProjectMeta";
import { ProjectThumbnail } from "./ProjectThumbnail";

/** The lead project: a wide raised panel with a large preview beside the story. */
export function FeaturedProject({ project }: { project: Project }) {
  return (
    <Card
      as="article"
      radius="4xl"
      depth="lg"
      className="grid gap-8 p-4 sm:p-6 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-8"
    >
      <div className="lg:col-span-7">
        <ProjectThumbnail
          kind={project.kind}
          thumbnail={project.thumbnail}
          title={project.title}
          className="h-56 sm:h-80 lg:h-[26rem]"
          sizes="(min-width: 1024px) 640px, 100vw"
        />
      </div>

      <div className="px-2 pb-2 sm:px-0 lg:col-span-5 lg:pb-0">
        <ProjectMeta project={project} />

        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-balance text-foreground sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-muted">
          {project.description}
        </p>

        <ChipList items={project.stack} size="sm" className="mt-6" />

        <ProjectLinks project={project} className="mt-8" />
      </div>
    </Card>
  );
}
