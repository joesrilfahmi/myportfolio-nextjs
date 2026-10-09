import { aboutContent, aboutHighlights } from "@/lib/data/about";
import { stagger } from "@/lib/motion";
import { Reveal } from "../motion/Reveal";
import { GitHubContributions } from "../shared/GitHubContributions";
import { Card } from "../ui/Card";
import { IconBadge } from "../ui/IconBadge";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export async function About() {
  return (
    <Section id="about" titleId="about-title">
      <Reveal>
        <Card tone="inset" radius="4xl" className="p-8 md:p-14">
          <SectionHeading id="about-title" title={aboutContent.title} />

          <div className="grid gap-12 md:grid-cols-5 md:gap-16">
            <Reveal
              variant="rise"
              delay={0.05}
              className="md:col-span-3 md:self-center"
            >
              <p className="text-lg leading-relaxed text-muted">
                {aboutContent.paragraph}
              </p>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-3 md:col-span-2 md:grid-cols-1">
              {aboutHighlights.map(({ icon, label, value }, index) => (
                <li key={label}>
                  <Reveal delay={0.1 + stagger(index)} className="h-full">
                    <Card
                      depth="sm"
                      radius="2xl"
                      className="flex h-full items-center gap-4 p-5 sm:flex-col sm:items-start md:flex-row md:items-center"
                    >
                      <IconBadge icon={icon} />
                      <div>
                        <p className="text-xs font-medium text-muted">
                          {label}
                        </p>
                        <p className="mt-1 text-base font-semibold text-foreground">
                          {value}
                        </p>
                      </div>
                    </Card>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <GitHubContributions />
        </Card>
      </Reveal>
    </Section>
  );
}
