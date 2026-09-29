import { skillGroups, skillsContent } from "@/lib/data/skills";
import { cn } from "@/lib/cn";
import { stagger } from "@/lib/motion";
import { Reveal } from "../motion/Reveal";
import { SkillGroup } from "../shared/SkillGroup";
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

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            delay={stagger(index)}
            className={cn("h-full", group.wide && "md:col-span-3")}
          >
            <SkillGroup {...group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
