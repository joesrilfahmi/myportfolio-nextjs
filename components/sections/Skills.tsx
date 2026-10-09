import { skillGroups, skillsContent, type SkillGroup } from "@/lib/data/skills";
import { stagger } from "@/lib/motion";
import { Reveal } from "../motion/Reveal";
import { SkillPanel } from "../shared/SkillPanel";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

/** Bento placement: a tall frontend panel, a wide database strip. */
const placement: Record<SkillGroup["id"], string> = {
  frontend: "lg:col-span-7 lg:row-span-2",
  backend: "lg:col-span-5",
  mobile: "lg:col-span-5",
  database: "lg:col-span-12",
};

export function Skills() {
  return (
    <Section id="skills" titleId="skills-title">
      <SectionHeading
        id="skills-title"
        eyebrow={skillsContent.eyebrow}
        title={skillsContent.title}
        description={skillsContent.description}
      />

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            delay={stagger(index)}
            className={placement[group.id]}
          >
            <SkillPanel group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
