import { Code2, FolderKanban, House, Mail, UserRound } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import type { IconType } from "@/types/ui";

export const personalInfo = {
  name: "Yusril Fahmi",
  /** Two-letter monogram used by the wordmark. */
  initials: "YF",
  username: "joesrilfahmi",
  role: ["Fullstack Developer", "Mobile Developer"],
  email: "joesrilfahmi@gmail.com",
} as const;

export interface NavLink {
  label: string;
  href: `#${string}`;
  icon: IconType;
  /** Rendered as a call-to-action button on desktop instead of a link. */
  cta?: boolean;
}

export const navLinks: readonly NavLink[] = [
  { label: "Home", href: "#top", icon: House },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Contact", href: "#contact", icon: Mail, cta: true },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export const socialLinks: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/joesrilfahmi",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/joesrilfahmi",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];

/** GitHub profile link, used as the fallback call to action. */
export const githubLink = socialLinks[0];
