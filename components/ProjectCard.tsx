import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data";
import { Button, IconButton } from "./ui/Button";
import { Card } from "./ui/Card";
import { Chip, ChipList } from "./ui/Chip";
import { ProjectThumbnail } from "./ProjectThumbnail";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="article" interactive className="flex h-full flex-col p-6 sm:p-7">
      <ProjectThumbnail kind={project.kind} />

      <div className="mt-6">
        <Chip>{project.category}</Chip>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ChipList items={project.stack} size="sm" limit={5} className="mt-6" />

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
            <Github size={17} strokeWidth={1.75} />
          </IconButton>
        )}
      </div>
    </Card>
  );
}
