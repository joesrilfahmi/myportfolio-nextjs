import { projects, projectsContent } from "@/lib/data/projects";
import { ProjectsBrowser } from "../shared/ProjectsBrowser";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Projects() {
  return (
    <Section id="projects" titleId="projects-title">
      <SectionHeading
        id="projects-title"
        title={projectsContent.title}
        description={projectsContent.description}
      />

      <ProjectsBrowser projects={projects} />
    </Section>
  );
}
