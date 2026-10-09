import { skills, skillsContent } from "@/lib/data/skills";
import { stagger } from "@/lib/motion";
import { Reveal } from "../motion/Reveal";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Skills() {
  return (
    <Section id="skills" titleId="skills-title">
      <SectionHeading
        id="skills-title"
        title={skillsContent.title}
        description={skillsContent.description}
      />

      <ul
        aria-label="Technologies"
        className="flex flex-wrap items-end justify-center gap-x-5 gap-y-8 sm:justify-start sm:gap-x-8 sm:gap-y-10"
      >
        {skills.map(({ name, icon }, index) => (
          <li key={name}>
            <Reveal
              delay={stagger(index % 6)}
              className="flex w-24 flex-col items-center gap-3 text-center"
            >
              <Card
                as="div"
                depth="sm"
                radius="full"
                interactive
                className="flex size-[4.5rem] items-center justify-center text-primary-ink sm:size-20"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-8 sm:size-9"
                  fill="currentColor"
                >
                  <path d={icon.path} />
                </svg>
              </Card>
              <span className="text-sm font-medium text-muted">{name}</span>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
