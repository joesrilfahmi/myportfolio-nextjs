import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/data/hero";
import { Reveal } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";

export function Hero() {
  return (
    <Section id="top" titleId="hero-title" spacing="hero" className="w-full">
      <Reveal>
        <Card
          radius="4xl"
          depth="md"
          className="px-6 py-8 sm:px-10 sm:py-12 md:px-12 md:py-14"
        >
          <p className="text-base font-medium text-muted sm:text-lg">
            {heroContent.greeting}
          </p>
          <h1
            id="hero-title"
            className="mt-4 max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Building practical digital experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {heroContent.summary}
          </p>
          <Button
            href="#projects"
            variant="primary"
            className="mt-8"
            icon={<ArrowRight size={16} strokeWidth={2} />}
          >
            View Projects
          </Button>
        </Card>
      </Reveal>
    </Section>
  );
}
