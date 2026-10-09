import type { CSSProperties } from "react";
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
        className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-8"
      >
        {skills.map(({ name, icon }, index) => (
          <li key={name}>
            <Reveal delay={stagger(index % 6)} className="h-full">
              <div
                className="group h-full"
                style={{ "--skill-color": `#${icon.hex}` } as CSSProperties}
              >
                <Card
                  as="div"
                  tone="inset"
                  depth="sm"
                  radius="3xl"
                  className="flex h-full min-h-40 flex-col items-center justify-center gap-5 p-5 text-center transition-colors duration-300 sm:min-h-48 sm:gap-6 sm:p-7"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-10 text-muted transition-colors duration-300 group-hover:text-[var(--skill-color)] sm:size-12"
                    fill="currentColor"
                  >
                    <path d={icon.path} />
                  </svg>
                  <span className="text-base font-semibold text-foreground sm:text-lg">
                    {name}
                  </span>
                </Card>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
