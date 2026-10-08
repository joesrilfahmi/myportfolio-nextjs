interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface GitHubContributions {
  username: string;
  totalContributions: number;
  weeks: { contributionDays: ContributionDay[] }[];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseContributions(payload: unknown): GitHubContributions {
  if (!isRecord(payload)) {
    throw new Error("GitHub returned an invalid response.");
  }

  if (Array.isArray(payload.errors) && payload.errors.length > 0) {
    throw new Error("GitHub GraphQL request failed.");
  }

  const data = payload.data;
  const user = isRecord(data) && isRecord(data.user) ? data.user : undefined;
  const calendar =
    user &&
    isRecord(user.contributionsCollection) &&
    isRecord(user.contributionsCollection.contributionCalendar)
      ? user.contributionsCollection.contributionCalendar
      : undefined;

  if (
    !user ||
    typeof user.login !== "string" ||
    !calendar ||
    typeof calendar.totalContributions !== "number" ||
    !Array.isArray(calendar.weeks)
  ) {
    throw new Error("GitHub contribution data was incomplete.");
  }

  const weeks = calendar.weeks.map((week) => {
    if (!isRecord(week) || !Array.isArray(week.contributionDays)) {
      throw new Error("GitHub contribution data was invalid.");
    }

    return {
      contributionDays: week.contributionDays.map((day) => {
        if (
          !isRecord(day) ||
          typeof day.date !== "string" ||
          typeof day.contributionCount !== "number"
        ) {
          throw new Error("GitHub contribution data was invalid.");
        }

        return {
          date: day.date,
          contributionCount: day.contributionCount,
        };
      }),
    };
  });

  return {
    username: user.login,
    totalContributions: calendar.totalContributions,
    weeks,
  };
}

export async function getGitHubContributions() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return null;
  }

  const now = new Date();
  const from = new Date(Date.UTC(now.getUTCFullYear(), 0, 1)).toISOString();
  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        login
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { login: username, from, to: now.toISOString() },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub returned HTTP ${response.status}.`);
    }

    return parseContributions(await response.json());
  } catch (error) {
    console.error("Unable to load GitHub contributions.", error);
    return { error: true as const };
  }
}
