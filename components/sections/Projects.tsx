"use client";

import { useState } from "react";
import { ArrowUpRight, FolderSearch, Github } from "lucide-react";
import { projects, projectsContent, socialLinks } from "@/lib/data";
import { scrollToSection } from "@/lib/scroll";
import { ProjectCard } from "../ProjectCard";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { IconBadge } from "../ui/IconBadge";
import { Pagination } from "../ui/Pagination";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

const PAGE_SIZE = 6;
const githubLink = socialLinks.find((link) => link.icon === "github");

/** Shown until the first project is added to `lib/data.ts`. */
function EmptyState() {
  return (
    <Reveal>
      <Card
        tone="inset"
        radius="container"
        className="flex flex-col items-center gap-6 px-6 py-14 text-center md:py-16"
      >
        <IconBadge icon={FolderSearch} size="lg" />
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            {projectsContent.emptyTitle}
          </h3>
          <p className="mx-auto mt-2 max-w-md text-balance text-sm leading-relaxed text-muted">
            {projectsContent.emptyDescription}
          </p>
        </div>
        {githubLink && (
          <Button
            href={githubLink.href}
            icon={<ArrowUpRight size={15} strokeWidth={2} />}
          >
            <Github size={16} strokeWidth={1.75} aria-hidden="true" />
            Browse GitHub
          </Button>
        )}
      </Card>
    </Reveal>
  );
}

export function Projects() {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(projects.length / PAGE_SIZE);
  const visible = projects.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function changePage(next: number) {
    setPage(next);
    // Wait a tick so the new page is rendered, then jump back to the top.
    window.setTimeout(() => scrollToSection("projects", "instant"), 0);
  }

  return (
    <Section id="projects">
      <SectionHeading
        title={projectsContent.title}
        description={projectsContent.description}
      />

      {visible.length > 0 ? (
        <div key={page} className="grid gap-6 sm:grid-cols-2 md:gap-8">
          {visible.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
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
    </Section>
  );
}
