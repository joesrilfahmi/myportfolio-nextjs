import { contactContent } from "@/lib/data/contact";
import { Reveal } from "../motion/Reveal";
import { ContactForm } from "../shared/ContactForm";
import { SocialLinks } from "../shared/SocialLinks";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Contact() {
  return (
    <Section id="contact" titleId="contact-title">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="md:self-center">
          <SectionHeading
            id="contact-title"
            title={contactContent.title}
            description={contactContent.description}
            className="mb-8 md:mb-8"
          />
          <Reveal variant="rise" delay={0.1}>
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
