import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------
   Action - renders a link when given an href, otherwise a button.
   Button and IconButton share it, so external-link handling and the
   default button type live in one place. Hover lift and press depth are
   CSS (see .neu-lift / .neu-press / .btn-primary), so this is a Server
   Component unless the caller passes an onClick.
   ------------------------------------------------------------------ */

interface ActionProps extends Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "type"
  | "disabled"
  | "aria-label"
  | "aria-expanded"
  | "aria-controls"
  | "aria-current"
> {
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  children?: ReactNode;
}

function Action({
  href,
  onClick,
  className,
  children,
  type = "button",
  ...aria
}: ActionProps) {
  if (href) {
    const isExternal = /^https?:\/\//.test(href);

    return (
      <a
        href={href}
        onClick={onClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={className}
        {...aria}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className} {...aria}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------
   Button
   ------------------------------------------------------------------ */

const buttonVariants = {
  /** The main call to action: an orange key. */
  primary: "btn-primary text-white",
  /** Secondary: a raised surface that sinks in when pressed. */
  raised:
    "neu neu-md neu-lift neu-press text-foreground hover:text-primary-ink",
  /** Tertiary: a recessed well that pops out on hover. */
  inset:
    "neu neu-md neu-well neu-pop neu-press text-muted hover:text-foreground",
} as const;

const buttonSizes = {
  md: "min-h-12 px-7 py-3.5",
  sm: "min-h-11 px-5 py-2.5",
} as const;

interface ButtonProps extends ActionProps {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  /** Trailing icon; nudges right on hover. */
  icon?: ReactNode;
}

export function Button({
  variant = "raised",
  size = "md",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Action
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold select-none",
        "disabled:cursor-not-allowed disabled:opacity-60",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      {children}
      {icon ? (
        <span
          aria-hidden="true"
          className="flex transition-transform duration-300 ease-neu group-hover:translate-x-0.5"
        >
          {icon}
        </span>
      ) : null}
    </Action>
  );
}

/* ------------------------------------------------------------------
   IconButton
   ------------------------------------------------------------------ */

const iconSizes = {
  md: "h-11 w-11",
  sm: "h-10 w-10",
} as const;

interface IconButtonProps extends Omit<ActionProps, "aria-label"> {
  /** Accessible name - required because there is no visible text. */
  label: string;
  size?: keyof typeof iconSizes;
  /** Pressed / selected state: the surface stays sunken and orange. */
  active?: boolean;
}

export function IconButton({
  label,
  size = "md",
  active = false,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <Action
      aria-label={label}
      className={cn(
        "neu neu-sm neu-lift neu-press inline-flex shrink-0 items-center justify-center rounded-full text-sm select-none",
        "disabled:pointer-events-none disabled:opacity-40",
        active
          ? "neu-well text-primary-ink"
          : "text-foreground hover:text-primary-ink",
        iconSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Action>
  );
}
