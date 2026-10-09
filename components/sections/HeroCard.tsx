import { personalInfo } from "@/lib/data/shared";
import { Card } from "../ui/Card";
import { ChipList } from "../ui/Chip";
import { HeroPortrait } from "../shared/HeroPortrait";
import { SocialLinks } from "../shared/SocialLinks";

/** Persistent profile card shown beside the page content on larger screens. */
export function HeroCard() {
  return (
    <Card
      radius="4xl"
      depth="lg"
      className="mx-auto flex min-h-[min(38rem,calc(100svh-7rem))] w-full max-w-sm flex-col items-center justify-center p-8 text-center lg:min-h-0 lg:max-w-none"
    >
      <HeroPortrait />

      <p className="mt-7 font-display text-2xl font-bold tracking-tight text-foreground">
        {personalInfo.name}
      </p>
      <ChipList
        items={personalInfo.role}
        size="sm"
        className="mt-4 justify-center"
      />

      <div className="mt-6 w-full border-t border-border pt-6">
        <SocialLinks iconSize={17} className="justify-center" />
      </div>
    </Card>
  );
}
