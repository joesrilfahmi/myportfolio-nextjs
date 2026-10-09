import { personalInfo } from "@/lib/data/shared";
import { Reveal } from "../motion/Reveal";
import { HeroPortrait } from "../shared/HeroPortrait";
import { RoleTypewriter } from "../shared/RoleTypewriter";
import { SocialLinks } from "../shared/SocialLinks";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function HeroCard() {
  return (
    <Reveal className="mx-auto w-full md:max-w-[26rem]">
      <Card
        radius="4xl"
        depth="lg"
        className="flex w-full flex-col items-center gap-5 p-5 text-center sm:gap-6 sm:p-8"
      >
        <Reveal delay={0.15} className="flex justify-center">
          <HeroPortrait />
        </Reveal>

        <div className="flex flex-col items-center">
          <Reveal variant="rise">
            <h2 className="text-3xl leading-[1.08] font-bold tracking-tight text-foreground sm:text-4xl">
              {personalInfo.name}
            </h2>
          </Reveal>

          <Reveal variant="rise" delay={0.08}>
            <p className="mt-4 min-h-7 text-lg leading-none font-semibold text-primary-ink sm:text-xl">
              <RoleTypewriter roles={personalInfo.role} />
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-6">
            <SocialLinks iconSize={16} />
          </Reveal>

          <Reveal delay={0.24} className="mt-6">
            <Button href="#contact" variant="inset" size="sm">
              Contact Me
            </Button>
          </Reveal>
        </div>
      </Card>
    </Reveal>
  );
}
