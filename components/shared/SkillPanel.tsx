import type { SkillGroup } from "@/lib/data/skills";
import { Card } from "../ui/Card";
import { IconBadge } from "../ui/IconBadge";

/** A recessed well holding one category, with each technology as a raised tile. */
export function SkillPanel({ group }: { group: SkillGroup }) {
  return (
    <Card
      tone="inset"
      radius="4xl"
      className="h-full p-6 sm:p-8"
      aria-labelledby={`skills-${group.id}`}
      role="group"
    >
      <div className="flex items-center gap-4">
        <IconBadge icon={group.icon} />
        <h3
          id={`skills-${group.id}`}
          className="font-display text-xl font-bold tracking-tight text-foreground"
        >
          {group.title}
        </h3>
      </div>

      <ul className="mt-7 flex flex-wrap gap-3">
        {group.skills.map(({ name, icon }) => (
          <li key={name}>
            <Card
              depth="sm"
              radius="2xl"
              interactive
              className="flex items-center gap-3 px-4 py-3"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-5 shrink-0 text-primary-ink"
                fill="currentColor"
              >
                <path d={icon.path} />
              </svg>
              <span className="text-sm font-medium text-foreground">
                {name}
              </span>
            </Card>
          </li>
        ))}
      </ul>
    </Card>
  );
}
