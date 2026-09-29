import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { Button, IconButton } from "../ui/Button";
import { GithubIcon } from "../ui/BrandIcons";
import { Card } from "../ui/Card";
import { Chip, ChipList } from "../ui/Chip";
import { ProjectThumbnail } from "./ProjectThumbnail";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="article" interactive className="flex h-full flex-col p-6 sm:p-7">
      <ProjectThumbnail
        kind={project.kind}
        thumbnail={project.thumbnail}
        title={project.title}
      />

      <div className="mt-6 flex items-center justify-between gap-3">
        <Chip>{project.category}</Chip>
        <Chip>
          <time dateTime={String(project.year)}>{project.year}</time>
        </Chip>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-foreground">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ChipList items={project.stack} size="sm" limit={4} className="mt-6" />

      <div className="mt-7 flex items-center gap-3">
        <Button
          href={project.href}
          size="sm"
          variant="primary"
          icon={<ArrowUpRight size={15} strokeWidth={2} />}
          className="flex-1"
        >
          View Project
        </Button>
        {project.githubHref && (
          <IconButton
            href={project.githubHref}
            label={`${project.title} on GitHub`}
            size="sm"
          >
            <GithubIcon size={17} strokeWidth={1.75} aria-hidden="true" />
          </IconButton>
        )}
      </div>
    </Card>
  );
}
