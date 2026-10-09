import { personalInfo } from "@/lib/data/shared";
import { Reveal } from "../motion/Reveal";
import { SocialLinks } from "../shared/SocialLinks";
import { Card } from "../ui/Card";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-6xl px-6 pt-6 pb-10 md:mx-0 md:max-w-none md:px-0">
      <Reveal>
        <Card
          depth="sm"
          radius="4xl"
          className="flex flex-col items-center gap-6 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-lg font-semibold text-foreground">
            {personalInfo.name}
          </p>

          <SocialLinks />

          <p className="text-sm text-muted">© {year} All rights reserved.</p>
        </Card>
      </Reveal>
    </footer>
  );
}
