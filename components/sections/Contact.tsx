import { contactContent } from "@/lib/data/contact";
import { Reveal } from "../motion/Reveal";
import { ContactForm } from "../shared/ContactForm";
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
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
