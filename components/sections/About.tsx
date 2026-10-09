import { aboutContent, aboutHighlights } from "@/lib/data/about";
import { stagger } from "@/lib/motion";
import { Reveal } from "../motion/Reveal";
import { GitHubContributions } from "../shared/GitHubContributions";
import { IconBadge } from "../ui/IconBadge";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

/** Editorial layout: heading on the left, prose and a ruled list on the right. */
export async function About() {
  return (
    <Section id="about" titleId="about-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            id="about-title"
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            flush
            className="lg:sticky lg:top-32"
          />
        </div>

        <div className="lg:col-span-8">
          <Reveal variant="rise" delay={0.05}>
            <p className="text-lead text-foreground">
              {aboutContent.paragraph}
            </p>
          </Reveal>

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {aboutHighlights.map(({ icon, label, value }, index) => (
              <li key={label}>
                <Reveal
                  variant="rise"
                  delay={0.1 + stagger(index)}
                  className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="flex items-center gap-4 sm:w-60 sm:shrink-0">
                    <IconBadge icon={icon} />
                    <p className="text-sm font-medium text-muted">{label}</p>
                  </div>
                  <p className="font-display text-xl font-bold tracking-tight text-foreground">
                    {value}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <GitHubContributions />
    </Section>
  );
}
