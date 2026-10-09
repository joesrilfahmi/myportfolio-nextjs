import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/cn";
import { Button } from "../ui/Button";
import { GithubIcon } from "../ui/BrandIcons";

/**
 * The links a project really has. A live demo is the primary action; when
 * there is none, the repository takes that role. No links, nothing rendered.
 */
export function ProjectLinks({
  project,
  size = "md",
  className,
}: {
  project: Pick<Project, "title" | "href" | "githubHref">;
  size?: "sm" | "md";
  className?: string;
}) {
  const { href, githubHref } = project;
  if (!href && !githubHref) return null;

  return (
    <div
      className={cn("flex flex-nowrap items-center gap-3 sm:gap-4", className)}
    >
      {href && (
        <Button
          href={href}
          size={size}
          variant="primary"
          className="px-2.5 text-xs whitespace-nowrap min-[375px]:px-3 sm:px-5 sm:text-sm"
          icon={<ArrowUpRight size={15} strokeWidth={2} />}
        >
          View Project
        </Button>
      )}
      {githubHref && (
        <Button
          href={githubHref}
          size={size}
          variant={href ? "raised" : "primary"}
          aria-label={`${project.title} source code on GitHub`}
          className="px-2.5 text-xs whitespace-nowrap min-[375px]:px-3 sm:px-5 sm:text-sm"
          icon={<GithubIcon size={16} strokeWidth={1.75} aria-hidden="true" />}
        >
          Source Code
        </Button>
      )}
    </div>
  );
}
