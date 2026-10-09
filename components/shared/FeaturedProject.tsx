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
      className="grid min-w-0 gap-6 p-3 min-[375px]:p-4 sm:gap-8 sm:p-6 xl:grid-cols-12 xl:items-center xl:gap-10 xl:p-8"
    >
      <div className="min-w-0 xl:col-span-7">
        <ProjectThumbnail
          kind={project.kind}
          thumbnail={project.thumbnail}
          title={project.title}
          className="h-[clamp(13rem,55vw,20rem)] sm:h-[clamp(18rem,45vw,22rem)] xl:h-[26rem]"
          sizes="(min-width: 1280px) 640px, (min-width: 640px) 80vw, 100vw"
        />
      </div>

      <div className="min-w-0 px-1 pb-1 min-[375px]:px-2 sm:px-0 sm:pb-0 xl:col-span-5">
        <ProjectMeta project={project} />

        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-balance text-foreground min-[375px]:text-2xl sm:mt-5 sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
          {project.description}
        </p>

        <ChipList items={project.stack} size="sm" className="mt-6" />

        <ProjectLinks project={project} className="mt-8" />
      </div>
    </Card>
  );
}
