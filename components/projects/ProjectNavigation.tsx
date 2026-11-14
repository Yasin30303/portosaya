"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { Project } from "@/types";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface ProjectNavigationProps {
  prev: Project | null;
  next: Project | null;
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  const { language, t } = useLanguage();

  return (
    <div className="pt-16 mt-16 border-t border-border/80">
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-xs uppercase tracking-wider text-muted">
          {language === "id" ? "NAVIGASI STUDI KASUS" : "CASE STUDY NAVIGATION"}
        </span>
        <Link
          href="/#projects"
          className="flex items-center gap-1.5 font-mono text-xs text-foreground-secondary hover:text-accent-text transition-colors py-1 min-h-[44px]"
        >
          <Grid className="w-3.5 h-3.5" />
          <span>{t.projects.navAll}</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Project */}
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group p-6 rounded-2xl border border-border/80 bg-surface/40 hover:bg-surface/80 hover:border-accent/40 transition-all duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-muted mb-2">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-accent-text" />
              <span>{t.projects.navPrev}</span>
            </div>
            <div className="text-base font-bold text-foreground group-hover:text-accent-text transition-colors truncate">
              {prev.title}
            </div>
            <div className="text-xs font-mono text-muted truncate mt-1">
              {prev.categoryLabel}
            </div>
          </Link>
        ) : (
          <div className="p-6 rounded-2xl border border-border/40 bg-surface/20 opacity-50 flex items-center justify-center font-mono text-xs text-muted">
            {t.projects.navFirst}
          </div>
        )}

        {/* Next Project */}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group p-6 rounded-2xl border border-border/80 bg-surface/40 hover:bg-surface/80 hover:border-accent/40 transition-all duration-200 text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <div className="flex items-center justify-end gap-2 text-xs font-mono text-muted mb-2">
              <span>{t.projects.navNext}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-accent-text" />
            </div>
            <div className="text-base font-bold text-foreground group-hover:text-accent-text transition-colors truncate">
              {next.title}
            </div>
            <div className="text-xs font-mono text-muted truncate mt-1">
              {next.categoryLabel}
            </div>
          </Link>
        ) : (
          <div className="p-6 rounded-2xl border border-border/40 bg-surface/20 opacity-50 flex items-center justify-center font-mono text-xs text-muted">
            {t.projects.navEnd}
          </div>
        )}
      </div>
    </div>
  );
}
