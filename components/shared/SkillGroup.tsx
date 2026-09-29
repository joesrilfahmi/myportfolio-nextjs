import type { SkillGroupData } from "@/lib/data/skills";
import { cn } from "@/lib/cn";
import { Card } from "../ui/Card";
import { ChipList } from "../ui/Chip";
import { IconBadge } from "../ui/IconBadge";

export function SkillGroup({
  title,
  note,
  icon,
  skills,
  wide,
}: SkillGroupData) {
  return (
    <Card
      interactive
      className={cn(
        "flex h-full flex-col gap-6 p-7",
        // A wide card puts the intro on the left and the chips on the right.
        wide &&
          "md:grid md:grid-cols-[minmax(0,13rem)_1fr] md:items-center md:gap-8",
      )}
    >
      <div className="flex items-start gap-4">
        <IconBadge icon={icon} />
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{note}</p>
        </div>
      </div>

      <ChipList items={skills} />
    </Card>
  );
}
