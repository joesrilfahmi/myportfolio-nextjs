import { personalInfo } from "@/lib/data/shared";
import { Card } from "../ui/Card";
import { ChipList } from "../ui/Chip";
import { HeroPortrait } from "./HeroPortrait";
import { SocialLinks } from "./SocialLinks";

/** The developer identity panel beside the hero headline. */
export function IdentityPanel() {
  return (
    <Card
      radius="4xl"
      depth="lg"
      className="mx-auto flex w-full max-w-sm flex-col items-center p-6 text-center sm:p-8 lg:mr-0 lg:ml-auto"
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
