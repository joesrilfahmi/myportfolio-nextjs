import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/data/hero";
import { personalInfo } from "@/lib/data/shared";
import { heroDelay } from "@/lib/motion";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/SectionHeading";

/**
 * Server Component with a CSS-only entrance (`hero-in`), so the first
 * paint never waits for JavaScript.
 */
export function Hero() {
  const { greeting, headline, summary } = heroContent;

  return (
    <Section id="top" titleId="hero-title" spacing="hero" className="lg:px-0">
      <div className="flex items-center">
        <div>
          <Eyebrow className="hero-in">
            {greeting} {personalInfo.name}
          </Eyebrow>

          <h1
            id="hero-title"
            style={heroDelay(80)}
            className="mt-6 hero-in font-display text-display font-bold text-foreground"
          >
            {headline.before}{" "}
            <span className="text-primary">{headline.emphasis}</span>{" "}
            {headline.after}
          </h1>

          <p
            style={heroDelay(160)}
            className="mt-7 max-w-xl hero-in text-lead text-muted"
          >
            {summary}
          </p>

          <div
            style={heroDelay(240)}
            className="mt-10 flex hero-in flex-wrap gap-4"
          >
            <Button
              href="#projects"
              variant="primary"
              icon={<ArrowRight size={16} strokeWidth={2} />}
            >
              View Projects
            </Button>
            <Button href="#contact">Contact Me</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
