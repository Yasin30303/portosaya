import React from "react";
import { cn } from "@/lib/utils";

interface TechTagProps {
  name: string;
  className?: string;
  variant?: "default" | "accent" | "subtle";
  size?: "sm" | "md";
}

export function TechTag({
  name,
  className,
  variant = "default",
  size = "sm",
}: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono tracking-tight font-medium select-none transition-colors duration-150",
        size === "sm" && "text-[11px] px-2.5 py-1 rounded-md",
        size === "md" && "text-xs px-3 py-1.5 rounded-md",
        variant === "default" &&
          "bg-surface text-foreground-secondary border border-border/80 hover:text-foreground hover:border-border",
        variant === "accent" &&
          "bg-accent/10 text-accent border border-accent/20",
          "bg-accent/10 text-accent-text border border-accent/20",
        variant === "subtle" &&
          "bg-surface/50 text-muted border border-border/40",
        className
      )}
    >
      {name}
    </span>
  );
}

