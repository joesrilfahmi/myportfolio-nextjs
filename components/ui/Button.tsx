"use client";

import type {
  ButtonHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from "react";
import { m } from "motion/react";
import { cn } from "@/lib/cn";
import { interactions, transitions } from "@/lib/motion";
import { isSectionHash, navigateToSection } from "@/lib/scroll";

/* ------------------------------------------------------------------
   Action - renders a link when given an href, otherwise a button.
   Button and IconButton share it, so external links, in-page section
   links, default button type and press/hover motion live in one place.
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
  /** Tap feedback; icon buttons press a little deeper. */
  tap?: (typeof interactions)["buttonTap"];
}

function Action({
  href,
  onClick,
  className,
  children,
  tap = interactions.buttonTap,
  disabled,
  type = "button",
  ...aria
}: ActionProps) {
  const motionProps = {
    whileHover: disabled ? undefined : interactions.buttonHover,
    whileTap: disabled ? undefined : tap,
    transition: transitions.fast,
  };

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    const handleClick = (event: MouseEvent<HTMLElement>) => {
      onClick?.(event);
      // `#section` links scroll with the navbar offset instead of jumping.
      if (isSectionHash(href) && !event.defaultPrevented) {
        event.preventDefault();
        navigateToSection(href);
      }
    };

    return (
      <m.a
        href={href}
        onClick={handleClick}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={className}
        {...aria}
        {...motionProps}
      >
        {children}
      </m.a>
    );
  }

  return (
    <m.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...aria}
      {...motionProps}
    >
      {children}
    </m.button>
  );
}

/* ------------------------------------------------------------------
   Button
   ------------------------------------------------------------------ */

const buttonVariants = {
  /** The main call to action: a blue key. */
  primary: "btn-primary",
  /** Secondary: a raised surface that sinks in when pressed. */
  raised: "neu neu-md neu-press text-foreground hover:text-primary-ink",
  /** Tertiary: a recessed well that pops out on hover. */
  inset:
    "neu neu-md neu-well neu-pop neu-press text-muted hover:text-foreground",
} as const;

const buttonSizes = {
  md: "px-7 py-3.5",
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

interface IconButtonProps extends Omit<ActionProps, "aria-label" | "tap"> {
  /** Accessible name - required because there is no visible text. */
  label: string;
  size?: keyof typeof iconSizes;
  /** Pressed / selected state: the surface stays sunken and blue. */
  active?: boolean;
  /** Use the primary text color instead of the default. */
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
      tap={interactions.iconTap}
      className={cn(
        "neu neu-sm neu-press inline-flex shrink-0 items-center justify-center rounded-full text-sm select-none",
        "disabled:pointer-events-none disabled:opacity-40",
        active
          ? "neu-well text-primary-ink"
          : accent
            ? "text-primary-ink"
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
