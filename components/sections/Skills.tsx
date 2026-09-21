import { skillGroups, skillsContent } from "@/lib/data/skills";
import { cn } from "@/lib/cn";
import { SkillGroup } from "../SkillGroup";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title={skillsContent.title}
        description={skillsContent.description}
      />

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            delay={index * 0.08}
            className={cn("h-full", group.wide && "md:col-span-3")}
          >
            <SkillGroup {...group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
