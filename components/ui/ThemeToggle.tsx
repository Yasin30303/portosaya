"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useMounted } from "@/hooks/useMounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-9 h-9 rounded-lg border border-border/80 bg-surface/50",
          "min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg border border-border/80 bg-surface/50",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative flex items-center justify-center w-9 h-9 rounded-lg border border-border/80 bg-surface/80 hover:bg-surface-hover text-foreground-secondary hover:text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring active:scale-95 overflow-hidden group",
        "relative flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg border border-border/80 bg-surface/80 hover:bg-surface-hover text-foreground-secondary hover:text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring active:scale-95 overflow-hidden group",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Sun
        className={cn(
          "w-4 h-4 text-accent absolute transition-all duration-300",
          isDark
            ? "rotate-0 scale-100 opacity-100 group-hover:rotate-45"
            : "-rotate-90 scale-0 opacity-0"
        )}
      />
      <Moon
        className={cn(
          "w-4 h-4 text-accent-secondary absolute transition-all duration-300",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 group-hover:-rotate-12"
        )}
      />
    </button>
  );
}
