export interface JourneyEntry {
  organization: string;
  /** Year the role started. */
  start: number;
  /** Year the role ended. Leave out (or `null`) for the current role. */
  end?: number | null;
  /** Optional. Rendered under the organization name when present. */
  role?: string;
  /** Optional. A short description of the work. */
  summary?: string;
}

export const journeyContent = {
  eyebrow: "Journey",
  title: "Career Timeline",
  description: "Where I have worked, newest first.",
} as const;

/** Newest first. Add `role` and `summary` to an entry and they render. */
export const journey: readonly JourneyEntry[] = [
  {
    organization: "RSU Assakinah Medika",
    start: 2026,
    end: null,
    summary:
      "I build web and mobile software for hospital operations and patient services with Next.js, TypeScript, and Flutter.",
  },
  {
    organization: "RS Siti Khodijah",
    start: 2019,
    end: 2026,
    summary: "I worked on software for daily hospital operations.",
  },
];

/** "2019 - 2026", or "2026 - Now" for the current role. */
export const formatPeriod = ({ start, end }: JourneyEntry) =>
  `${start} - ${end ?? "Now"}`;
