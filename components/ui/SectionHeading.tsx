import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-10",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-text mb-3">
        {index && <span className="opacity-70 font-semibold">{index}</span>}
        {eyebrow && <span>{eyebrow}</span>}
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-foreground-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
