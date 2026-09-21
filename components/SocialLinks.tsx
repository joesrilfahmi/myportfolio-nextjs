import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data/shared";
import { cn } from "@/lib/cn";
import { IconButton } from "./ui/Button";

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 18 }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socialLinks.map(({ label, href, icon }) => {
        const Icon = icons[icon];
        return (
          <li key={label}>
            <IconButton href={href} label={label}>
              <Icon size={iconSize} strokeWidth={1.75} />
            </IconButton>
          </li>
        );
      })}
    </ul>
  );
}
