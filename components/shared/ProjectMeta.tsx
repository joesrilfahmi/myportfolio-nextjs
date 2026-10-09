import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/cn";
import { Chip } from "../ui/Chip";

/** Category and year chips shared by every project layout. */
export function ProjectMeta({
  project,
  className,
}: {
  project: Pick<Project, "category" | "year">;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Chip>{project.category}</Chip>
      <Chip muted>
        <time dateTime={String(project.year)}>{project.year}</time>
      </Chip>
    </div>
  );
}
