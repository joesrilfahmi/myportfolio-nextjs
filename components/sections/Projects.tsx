import { ArrowUpRight, FolderSearch } from "lucide-react";
import { projects, projectsContent } from "@/lib/data/projects";
import { githubLink } from "@/lib/data/shared";
import { stagger } from "@/lib/motion";
import { Reveal } from "../motion/Reveal";
import { FeaturedProject } from "../shared/FeaturedProject";
import { ProjectCard } from "../shared/ProjectCard";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { IconBadge } from "../ui/IconBadge";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

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
          <h3 className="font-display text-xl font-bold text-foreground">
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

/**
 * The first project is featured at full width; any others follow in a grid.
 * Add entries to `lib/data/projects.ts` and this renders them.
 */
export function Projects() {
  const [featured, ...others] = projects;

  return (
    <Section id="projects" titleId="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow={projectsContent.eyebrow}
        title={projectsContent.title}
        description={projectsContent.description}
      />

      {featured ? (
        <div className="flex flex-col gap-8 md:gap-10">
          <Reveal>
            <FeaturedProject project={featured} />
          </Reveal>

          {others.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {others.map((project, index) => (
                <Reveal
                  key={project.title}
                  delay={stagger(index)}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      ) : (
        <EmptyState />
      )}
    </Section>
  );
}
