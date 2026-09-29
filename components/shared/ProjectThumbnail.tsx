import Image from "next/image";
import { cn } from "@/lib/cn";
import { Card } from "../ui/Card";

type Shape =
  | {
      t: "rect";
      x: number;
      y: number;
      w: number;
      h: number;
      r: number;
      c: string;
    }
  | { t: "circle"; x: number; y: number; r: number; c: string };

/** Class names are literal so Tailwind can see them. */
const frame = "fill-surface stroke-primary-muted";

const illustrations: Record<"mobile" | "web", Shape[]> = {
  mobile: [
    { t: "rect", x: 82, y: 14, w: 70, h: 132, r: 14, c: frame },
    { t: "rect", x: 90, y: 26, w: 54, h: 94, r: 6, c: "fill-primary/15" },
    { t: "rect", x: 96, y: 34, w: 42, h: 6, r: 3, c: "fill-primary/50" },
    { t: "rect", x: 96, y: 46, w: 30, h: 4, r: 2, c: "fill-primary/30" },
    { t: "rect", x: 96, y: 60, w: 42, h: 18, r: 5, c: "fill-primary/20" },
    { t: "rect", x: 96, y: 84, w: 42, h: 18, r: 5, c: "fill-primary/15" },
    { t: "circle", x: 117, y: 132, r: 4, c: "fill-primary/40" },
    { t: "circle", x: 40, y: 40, r: 16, c: "fill-primary-hover/20" },
    { t: "circle", x: 185, y: 120, r: 22, c: "fill-primary/10" },
  ],
  web: [
    { t: "rect", x: 24, y: 24, w: 172, h: 112, r: 12, c: frame },
    { t: "rect", x: 24, y: 24, w: 172, h: 22, r: 12, c: "fill-primary/15" },
    { t: "circle", x: 38, y: 35, r: 3, c: "fill-primary/50" },
    { t: "circle", x: 48, y: 35, r: 3, c: "fill-primary/30" },
    { t: "circle", x: 58, y: 35, r: 3, c: "fill-primary/20" },
    { t: "rect", x: 38, y: 60, w: 60, h: 60, r: 8, c: "fill-primary/15" },
    { t: "rect", x: 106, y: 60, w: 80, h: 18, r: 5, c: "fill-primary/25" },
    { t: "rect", x: 106, y: 84, w: 80, h: 10, r: 4, c: "fill-primary/15" },
    { t: "rect", x: 106, y: 100, w: 60, h: 10, r: 4, c: "fill-primary/10" },
    { t: "circle", x: 188, y: 128, r: 18, c: "fill-primary-hover/20" },
  ],
};

interface ProjectThumbnailProps {
  kind: "mobile" | "web";
  thumbnail?: string;
  /** Project title, used to describe the screenshot. */
  title: string;
}

export function ProjectThumbnail({
  kind,
  thumbnail,
  title,
}: ProjectThumbnailProps) {
  return (
    <Card
      tone="inset"
      radius="2xl"
      className="relative flex h-48 items-center justify-center overflow-hidden sm:h-56"
    >
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 768px) 400px, 100vw"
          className="object-cover"
        />
      ) : (
        <svg
          viewBox="0 0 220 160"
          fill="none"
          aria-hidden="true"
          className="h-full w-full"
        >
          {illustrations[kind].map((shape, index) =>
            shape.t === "rect" ? (
              <rect
                key={index}
                x={shape.x}
                y={shape.y}
                width={shape.w}
                height={shape.h}
                rx={shape.r}
                strokeWidth={shape.c === frame ? 1.5 : undefined}
                className={cn(shape.c)}
              />
            ) : (
              <circle
                key={index}
                cx={shape.x}
                cy={shape.y}
                r={shape.r}
                className={cn(shape.c)}
              />
            ),
          )}
        </svg>
      )}
    </Card>
  );
}
