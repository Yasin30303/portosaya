"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      data-testid="language-toggle"
      onClick={toggleLanguage}
      className={cn(
        "relative flex items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] h-11 px-3 rounded-lg border border-border/80 bg-surface/80 hover:bg-surface-hover text-foreground-secondary hover:text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring active:scale-95 group font-mono text-xs font-bold select-none",
        className
      )}
      aria-label={t.langToggle.ariaLabel}
      title={t.langToggle.title}
    >
      <Languages className="w-3.5 h-3.5 text-accent-text group-hover:rotate-12 transition-transform shrink-0" />
      <span className="uppercase tracking-wider text-foreground">
        {language}
      </span>
    </button>
  );
}
