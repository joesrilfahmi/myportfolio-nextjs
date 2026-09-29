import { socialLinks } from "@/lib/data/shared";
import { cn } from "@/lib/cn";
import { IconButton } from "../ui/Button";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 18 }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <IconButton href={href} label={label}>
            <Icon size={iconSize} strokeWidth={1.75} aria-hidden="true" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}
