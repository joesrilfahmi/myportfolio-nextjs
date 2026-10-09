import { navLinks, personalInfo } from "@/lib/data/shared";
import { SocialLinks } from "../shared/SocialLinks";
import { Wordmark } from "./Wordmark";

/** Quiet footer: no card, just a hairline, identity, links and copyright. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-28 sm:px-8 md:pb-12">
      <div className="border-t border-border pt-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Wordmark />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="rounded transition-colors duration-300 hover:text-primary-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks iconSize={17} />
        </div>

        <p className="mt-10 text-sm text-muted">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
