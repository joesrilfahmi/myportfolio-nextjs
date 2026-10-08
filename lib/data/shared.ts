import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import type { IconType } from "@/types/ui";

export const personalInfo = {
  name: "Yusril Fahmi",
  username: "joesrilfahmi",
  role: ["Fullstack Developer", "Mobile Developer"],
  email: "joesrilfahmi@gmail.com",
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  // { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

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
