import { Code2, Compass, Layers } from "lucide-react";
import { aboutContent } from "@/lib/data";
import { Card } from "../ui/Card";
import { IconBadge } from "../ui/IconBadge";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

const icons = {
  layers: Layers,
  code: Code2,
  compass: Compass,
};

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <Card tone="inset" radius="container" className="p-8 md:p-14">
          <SectionHeading title={aboutContent.title} />

          <div className="grid gap-12 md:grid-cols-5 md:gap-16">
            <Reveal variant="rise" delay={0.05} className="md:col-span-3 md:self-center">
              <p className="text-lg leading-relaxed text-muted">
                {aboutContent.paragraph}
              </p>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-3 md:col-span-2 md:grid-cols-1">
              {aboutContent.highlights.map(({ icon, label, value }, index) => (
                <li key={label}>
                  <Reveal delay={0.1 + index * 0.08} className="h-full">
                    <Card
                      depth="sm"
                      className="flex h-full items-center gap-4 p-5 sm:flex-col sm:items-start md:flex-row md:items-center"
                    >
                      <IconBadge icon={icons[icon]} />
                      <div>
                        <p className="text-xs font-medium text-muted">{label}</p>
                        <p className="mt-1 font-display text-base font-semibold text-foreground">
                          {value}
                        </p>
                      </div>
                    </Card>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
