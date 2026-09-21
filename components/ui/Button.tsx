import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------
   Action — renders a link when given an href, otherwise a button.
   Button and IconButton share it so there is one place that handles
   external links, default button type and click handlers.
   ------------------------------------------------------------------ */

interface ActionProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> {
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

function Action({ href, onClick, className, children, ...rest }: ActionProps) {
  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={rest["aria-label"]}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className} {...rest}>
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
  raised: "neu neu-sm neu-lift neu-press text-foreground hover:text-accent-ink",
  /** Tertiary: a recessed well that pops out on hover. */
  inset:
    "neu neu-sm neu-well neu-pop neu-press text-muted hover:text-foreground",
} as const;

const buttonSizes = {
  md: "px-6 py-3.5",
  sm: "px-5 py-2.5",
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
        "group inline-flex select-none items-center justify-center gap-2 rounded-full text-sm font-semibold",
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

interface IconButtonProps extends ActionProps {
  /** Accessible name — required because there is no visible text. */
  label: string;
  size?: keyof typeof iconSizes;
  /** Pressed / selected state: the surface stays sunken in orange. */
  active?: boolean;
  /** Use the orange text color instead of the default. */
  accent?: boolean;
}

export function IconButton({
  label,
  size = "md",
  active = false,
  accent = false,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <Action
      aria-label={label}
      className={cn(
        "neu neu-sm neu-press inline-flex shrink-0 select-none items-center justify-center rounded-full text-sm",
        "disabled:pointer-events-none disabled:opacity-40",
        active
          ? "neu-well text-accent-ink"
          : cn(
              "neu-lift",
              accent
                ? "text-accent-ink"
                : "text-foreground hover:text-accent-ink",
            ),
        iconSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Action>
  );
}
