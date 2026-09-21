import { personalInfo } from "@/lib/data/shared";
import { SocialLinks } from "../SocialLinks";
import { Card } from "../ui/Card";
import { Reveal } from "../ui/Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6">
      <Reveal>
        <Card
          depth="sm"
          radius="container"
          className="flex flex-col items-center gap-6 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {personalInfo.name}
            </p>
            {/* <p className="mt-1 text-sm text-muted">{personalInfo.role}</p> */}
          </div>

          <SocialLinks />

          <p className="text-sm text-muted">© {year} All rights reserved.</p>
        </Card>
      </Reveal>
    </footer>
  );
}
