import React from "react";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  github?: string;
  email?: string;
  linkedin?: string;
  cv?: string;
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

export function SocialLinks({
  github = "https://github.com/Yasin30303",
  email = "ynuaina@gmail.com",
  linkedin,
  cv = "/documents/cv.pdf",
  className,
  iconSize = "md",
}: SocialLinksProps) {
  const sizeMap = {
    sm: "w-8 h-8 p-1.5",
    md: "w-9 h-9 p-2",
    lg: "w-10 h-10 p-2.5",
  };

  const iconClasses = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const links = [
    {
      name: "GitHub",
      href: github,
      icon: <GithubIcon className={iconClasses[iconSize]} />,
      external: true,
    },
    {
      name: "Email",
      href: `mailto:${email}`,
      icon: <Mail className={iconClasses[iconSize]} />,
      external: false,
    },
    ...(linkedin
      ? [
          {
            name: "LinkedIn",
            href: linkedin,
            icon: <LinkedinIcon className={iconClasses[iconSize]} />,
            external: true,
          },
        ]
      : []),
    ...(cv
      ? [
          {
            name: "Download CV",
            href: cv,
            icon: <FileText className={iconClasses[iconSize]} />,
            external: true,
          },
        ]
      : []),
  ];

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className={cn(
            "flex items-center justify-center rounded-lg border border-border/80 bg-surface/80 text-foreground-secondary hover:text-foreground hover:bg-surface-hover hover:border-accent/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring active:scale-95",
            sizeMap[iconSize]
          )}
          aria-label={link.name}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
