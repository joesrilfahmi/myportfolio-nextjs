import type { ComponentType } from "react";

/** Props every icon in the project understands (Lucide and brand icons alike). */
export interface IconProps {
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}

export type IconType = ComponentType<IconProps>;
