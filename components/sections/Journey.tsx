import { timeline } from "@/lib/data";
import { TimelineItem } from "../TimelineItem";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";

export function Journey() {
  return (
    <Section id="journey" width="narrow">
      <SectionHeading title="Journey" />

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
