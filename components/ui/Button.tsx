import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon,
  iconPosition = "right",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:opacity-50 disabled:pointer-events-none select-none tracking-tight";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 min-h-[36px] rounded-md gap-1.5",
    md: "text-sm px-5 py-2.5 min-h-[44px] rounded-lg gap-2",
    lg: "text-base px-6 py-3 min-h-[48px] rounded-lg gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-accent hover:bg-accent-hover text-white shadow-sm shadow-accent/20 active:translate-y-[1px]",
    secondary:
      "bg-surface hover:bg-surface-hover text-foreground border border-border/80 active:translate-y-[1px]",
    outline:
      "border border-border/90 hover:border-accent/60 text-foreground hover:bg-surface active:translate-y-[1px]",
    ghost:
      "text-foreground-secondary hover:text-foreground hover:bg-surface active:translate-y-[1px]",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
