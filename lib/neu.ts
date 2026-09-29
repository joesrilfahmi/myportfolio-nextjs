import { cn } from "./cn";

/** Single source of truth for building neumorphic surface classes. */
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
  /** Inset wells rise to raised on hover (raised surfaces are moved by Motion). */
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
    interactive && tone === "inset" && "neu-pop",
  );
}
