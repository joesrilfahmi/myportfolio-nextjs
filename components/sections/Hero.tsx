import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/data/hero";
import { personalInfo } from "@/lib/data/shared";
import { stagger } from "@/lib/motion";
import { Reveal } from "../motion/Reveal";
import { HeroPortrait } from "../shared/HeroPortrait";
import { RoleTypewriter } from "../shared/RoleTypewriter";
import { SocialLinks } from "../shared/SocialLinks";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export function Hero() {
  return (
    <Section id="top" titleId="hero-title" spacing="hero">
      <div className="grid items-center gap-16 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
        <div className="flex flex-col items-start">
          <Reveal variant="rise">
            <p className="text-base font-medium text-muted sm:text-lg">
              {heroContent.greeting}
            </p>
          </Reveal>

          <Reveal variant="rise" delay={stagger(1)}>
            <h1
              id="hero-title"
              className="mt-2 text-5xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              {personalInfo.name}
            </h1>
          </Reveal>

          <Reveal variant="rise" delay={stagger(2)}>
            <p className="mt-5 min-h-7 text-xl leading-none font-semibold text-primary-ink sm:min-h-8 sm:text-2xl">
              <RoleTypewriter roles={personalInfo.role} />
            </p>
          </Reveal>

          <Reveal variant="rise" delay={stagger(3)}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {heroContent.summary}
            </p>
          </Reveal>

          <Reveal
            delay={stagger(4)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              href="#projects"
              variant="primary"
              icon={<ArrowRight size={16} strokeWidth={2} />}
            >
              View Projects
            </Button>
            <Button href="#contact" variant="inset">
              Contact Me
            </Button>
          </Reveal>

          <Reveal delay={stagger(5)} className="mt-12">
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="flex justify-center">
          <HeroPortrait />
        </Reveal>
      </div>
    </Section>
  );
}
