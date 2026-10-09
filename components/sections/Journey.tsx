import { journey, journeyContent } from "@/lib/data/journey";
import { stagger } from "@/lib/motion";
import { JourneyItem } from "../shared/JourneyItem";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Journey() {
  return (
    <Section id="journey" titleId="journey-title">
      <SectionHeading
        id="journey-title"
        eyebrow={journeyContent.eyebrow}
        title={journeyContent.title}
        description={journeyContent.description}
      />

      <div className="relative max-w-3xl">
        {/* The rail the markers sit on: it fades out below the last entry. */}
        <span
          aria-hidden="true"
          className="absolute top-8 bottom-8 left-4 w-0.5 -translate-x-1/2 rounded-full bg-linear-to-b from-primary-muted to-border"
        />
        <ol className="space-y-8 pl-10 sm:pl-14">
          {journey.map((entry, index) => (
            <JourneyItem
              key={`${entry.organization}-${entry.start}`}
              entry={entry}
              delay={stagger(index)}
            />
          ))}
        </ol>
      </div>
    </Section>
  );
}
