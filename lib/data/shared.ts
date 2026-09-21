export const personalInfo = {
  name: "Yusril Fahmi",
  username: "joesrilfahmi",
  role: ["Fullstack Developer", "Mobile Developer"],
  email: "joesrilfahmi@gmail.com",
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/joesrilfahmi",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/joesrilfahmi",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: "mail",
  },
] as const;
