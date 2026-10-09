import { getGitHubContributions } from "@/lib/github-contributions";
import { Card } from "../ui/Card";

/** From no activity (neutral) to the busiest days (full accent). */
const contributionColors = [
  "bg-foreground/10",
  "bg-primary/35",
  "bg-primary/60",
  "bg-primary/85",
  "bg-primary",
] as const;

function getContributionColor(count: number) {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

export async function GitHubContributions() {
  const contributions = await getGitHubContributions();

  if (!contributions) {
    return null;
  }

  if ("error" in contributions) {
    return (
      <Card
        tone="inset"
        radius="4xl"
        role="status"
        className="mt-16 p-6 text-sm text-muted sm:p-8"
      >
        GitHub contributions are temporarily unavailable.
      </Card>
    );
  }

  const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });

  return (
    <Card
      tone="inset"
      radius="4xl"
      role="region"
      aria-label="GitHub contributions"
      className="mt-16 p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">
            GitHub Contributions
          </h3>
          <p className="mt-1 text-sm text-muted">
            {contributions.totalContributions.toLocaleString()} contributions
            this year
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div
          className="w-full"
          role="img"
          aria-label="Daily contribution activity over the past year"
        >
          <div className="relative mb-2 h-3" aria-hidden="true">
            {contributions.weeks.map((week, index) => {
              const firstOfMonth = week.contributionDays.find((day) =>
                day.date.endsWith("-01"),
              );
              const monthDate =
                index === 0
                  ? new Date(`${week.contributionDays[0]?.date ?? ""}T00:00:00`)
                  : firstOfMonth
                    ? new Date(`${firstOfMonth.date}T00:00:00`)
                    : null;

              return monthDate ? (
                <span
                  key={`month-${index}`}
                  className="absolute text-[8px] leading-none text-muted sm:text-[10px]"
                  style={{
                    left: `${(index / Math.max(contributions.weeks.length - 1, 1)) * 100}%`,
                  }}
                >
                  {monthFormatter.format(monthDate)}
                </span>
              ) : null;
            })}
          </div>

          <div
            className="grid w-full gap-x-px sm:gap-x-1"
            style={{
              gridTemplateColumns: `repeat(${contributions.weeks.length}, minmax(0, 1fr))`,
            }}
          >
            {contributions.weeks.map((week, weekIndex) => (
              <div
                key={`week-${weekIndex}`}
                className="flex min-w-0 flex-col gap-px sm:gap-1"
              >
                {week.contributionDays.map((day) => (
                  <span
                    key={day.date}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                    className={`aspect-square w-full max-w-3 rounded-[1px] sm:rounded-sm ${contributionColors[getContributionColor(day.contributionCount)]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-4 flex items-center justify-end gap-2 text-xs text-muted"
        aria-hidden="true"
      >
        <span>Less</span>
        {contributionColors.map((color) => (
          <span key={color} className={`size-3 rounded-sm ${color}`} />
        ))}
        <span>More</span>
      </div>
    </Card>
  );
}
