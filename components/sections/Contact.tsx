import { ArrowUpRight } from "lucide-react";
import { contactContent } from "@/lib/data/contact";
import { personalInfo } from "@/lib/data/shared";
import { Reveal } from "../motion/Reveal";
import { ContactForm } from "../shared/ContactForm";
import { SocialLinks } from "../shared/SocialLinks";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
  return (
    <Section id="contact" titleId="contact-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            eyebrow={contactContent.eyebrow}
            title={contactContent.title}
            description={contactContent.description}
          />

          <Reveal variant="rise" delay={0.1}>
            <p className="text-sm font-medium text-muted">Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group mt-2 inline-flex items-center gap-2 rounded font-display text-lg font-bold tracking-tight break-all text-foreground transition-colors duration-300 hover:text-primary-ink sm:text-2xl"
            >
              {personalInfo.email}
              <ArrowUpRight
                size={20}
                strokeWidth={2}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-300 ease-neu group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <SocialLinks className="mt-8" />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
