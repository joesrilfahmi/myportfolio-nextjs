import { cn } from "./cn";

/**
 * Single source of truth for building neumorphic surfaces.
 *
 * The class names are written out as literals on purpose: Tailwind only keeps
 * `@layer components` rules whose class names it can find in the source, so
 * building them dynamically (`neu-${depth}`) would get them purged.
 */
export type NeuDepth = "sm" | "md" | "lg";
export type NeuTone = "raised" | "inset";

const depthClass: Record<NeuDepth, string> = {
  sm: "neu-sm",
  md: "neu-md",
  lg: "neu-lg",
};

interface NeuOptions {
  tone?: NeuTone;
  depth?: NeuDepth;
  /** Adds the hover response: raised surfaces lift, inset wells pop out. */
  interactive?: boolean;
}

export function neu({
  tone = "raised",
  depth = "md",
  interactive = false,
}: NeuOptions = {}) {
  return cn(
    "neu",
    depthClass[depth],
    tone === "inset" && "neu-well",
    interactive && (tone === "raised" ? "neu-lift" : "neu-pop"),
  );
}
