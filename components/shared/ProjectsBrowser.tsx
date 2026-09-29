"use client";

import { useState } from "react";
import { ArrowUpRight, FolderSearch } from "lucide-react";
import { projectsContent, type Project } from "@/lib/data/projects";
import { githubLink } from "@/lib/data/shared";
import { stagger } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";
import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { IconBadge } from "../ui/IconBadge";
import { Pagination } from "../ui/Pagination";
import { ProjectCard } from "./ProjectCard";

const PAGE_SIZE = 6;

/** Shown until the first project is added to `lib/data/projects.ts`. */
function EmptyState() {
  const GithubIcon = githubLink.icon;

  return (
    <Reveal>
      <Card
        tone="inset"
        radius="4xl"
        className="flex flex-col items-center gap-6 px-6 py-14 text-center md:py-16"
      >
        <IconBadge icon={FolderSearch} size="lg" />
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            {projectsContent.emptyTitle}
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-balance text-muted">
            {projectsContent.emptyDescription}
          </p>
        </div>
        <Button
          href={githubLink.href}
          icon={<ArrowUpRight size={15} strokeWidth={2} />}
        >
          <GithubIcon size={16} strokeWidth={1.75} aria-hidden="true" />
          Browse GitHub
        </Button>
      </Card>
    </Reveal>
  );
}

/** The project grid and its pagination (the only stateful part of the section). */
export function ProjectsBrowser({
  projects,
}: {
  projects: readonly Project[];
}) {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(projects.length / PAGE_SIZE);
  const visible = projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function changePage(next: number) {
    setPage(next);
    // Wait a tick so the new page is rendered, then jump back to the top.
    window.setTimeout(() => scrollToSection("projects", "instant"), 0);
  }

  return (
    <>
      {visible.length > 0 ? (
        <div key={page} className="grid gap-6 sm:grid-cols-2 md:gap-8">
          {visible.map((project, index) => (
            <Reveal
              key={project.title}
              delay={stagger(index)}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      <Pagination
        page={page}
        pageCount={pageCount}
        onChange={changePage}
        label="Projects pagination"
      />
    </>
  );
}
