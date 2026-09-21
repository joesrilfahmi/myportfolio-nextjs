"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { heroContent } from "@/lib/data/hero";
import { personalInfo } from "@/lib/data/shared";
import { sectionLink } from "@/lib/scroll";
import { SocialLinks } from "../SocialLinks";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

/** Delay between each hero element as the page loads. */
const STEP = 0.09;

function RoleTypewriter() {
  const [text] = useTypewriter({
    words: [...personalInfo.role],
    loop: true,
    typeSpeed: 65,
    deleteSpeed: 35,
    delaySpeed: 1800,
  });

  return (
    <span className="inline-flex h-[1.75rem] items-center whitespace-nowrap leading-none sm:h-[2rem]">
      <span aria-live="polite">{text}</span>
      <span className="ml-1 text-accent-ink opacity-65" aria-hidden="true">
        <Cursor cursorStyle="|" cursorColor="currentColor" />
      </span>
    </span>
  );
}

function Portrait() {
  return (
    <Reveal delay={0.2} className="flex justify-center">
      <div className="relative aspect-square w-[min(19rem,calc(100vw-5rem))] sm:w-80 md:w-[23rem] lg:w-[26rem]">
        {/* An orange arc that draws itself once, pointing at the portrait. */}
        <svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="pointer-events-none absolute z-10 -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] -rotate-90"
        >
          <circle
            cx="50"
            cy="50"
            r="49"
            pathLength="1"
            fill="none"
            strokeWidth="1.1"
            strokeLinecap="round"
            className="ring-arc stroke-accent-ink"
          />
        </svg>

        <Card radius="full" depth="lg" className="h-full w-full p-4">
          <Card
            tone="inset"
            radius="full"
            className="neu-over relative h-full w-full overflow-hidden"
          >
            <Image
              src="/images/profile.png"
              alt={`Portrait of ${personalInfo.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 416px, (min-width: 768px) 368px, (min-width: 640px) 320px, 304px"
              className="object-cover"
            />
          </Card>
        </Card>
      </div>
    </Reveal>
  );
}

export function Hero() {
  return (
    <Section id="top" spacing="hero">
      <div className="grid items-center gap-16 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
        <div className="flex flex-col items-start">
          <Reveal variant="rise">
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {personalInfo.name}
            </h1>
          </Reveal>

          <Reveal variant="rise" delay={STEP}>
            <p className="mt-5 h-[1.75rem] text-xl font-semibold leading-none text-accent-ink sm:h-[2rem] sm:text-2xl">
              <RoleTypewriter />
            </p>
          </Reveal>

          <Reveal variant="rise" delay={STEP * 2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {heroContent.summary}
            </p>
          </Reveal>

          <Reveal
            delay={STEP * 3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="primary"
              icon={<ArrowRight size={16} strokeWidth={2} />}
              {...sectionLink("#projects")}
            >
              View Projects
            </Button>
            <Button variant="inset" {...sectionLink("#contact")}>
              Contact Me
            </Button>
          </Reveal>

          <Reveal delay={STEP * 4} className="mt-12">
            <SocialLinks />
          </Reveal>
        </div>

        <Portrait />
      </div>
    </Section>
  );
}
