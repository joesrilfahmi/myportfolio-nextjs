import { journeyContent, timeline } from "@/lib/data/journey";
import { TimelineItem } from "../shared/TimelineItem";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Journey() {
  return (
    <Section id="journey" titleId="journey-title">
      <SectionHeading id="journey-title" title={journeyContent.title} />

      <ol>
        {timeline.map((entry, index) => (
          <TimelineItem
            key={entry.label}
            entry={entry}
            index={index}
            isLast={index === timeline.length - 1}
          />
        ))}
      </ol>
    </Section>
  );
}
