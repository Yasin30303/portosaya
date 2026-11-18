"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { TechTag } from "@/components/ui/TechTag";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProjectHeader({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 pt-6 pb-12 border-b border-border/80">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-muted">
        <Link
          href="/#projects"
          className="hover:text-foreground transition-colors flex items-center gap-1 py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.projects.breadcrumbRoot}</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-border" />
        <span className="text-accent-text truncate font-semibold">{project.categoryLabel}</span>
      </nav>

      {/* Title & Category */}
      <div className="space-y-4">
        <div className="inline-flex items-center text-xs font-mono px-3 py-1 rounded-md border border-accent/30 bg-accent/10 text-accent-text font-semibold">
          <span>{project.category}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="font-mono text-sm sm:text-base text-accent-text font-medium">
            {project.subtitle}
          </p>
        )}

        <p className="text-lg sm:text-xl text-foreground-secondary leading-relaxed max-w-3xl">
          {project.overview}
        </p>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl border border-border/80 bg-surface/60 font-mono text-xs">
        <div className="space-y-1">
          <div className="text-muted uppercase">{t.projects.role}</div>
          <div className="font-semibold text-foreground">{project.metadata.role}</div>
        </div>

        <div className="space-y-1">
          <div className="text-muted uppercase">{t.projects.timeline}</div>
          <div className="font-semibold text-foreground">{project.metadata.duration}</div>
        </div>

        <div className="space-y-1">
          <div className="text-muted uppercase">{t.projects.context}</div>
          <div className="font-semibold text-foreground">{project.metadata.client || "Self-Initiated"}</div>
        </div>

        <div className="space-y-1">
          <div className="text-muted uppercase">{t.projects.status}</div>
          <div className="font-semibold text-emerald-400">{project.status}</div>
        </div>
      </div>

      {/* Tech Tags & External Links */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <TechTag key={tech} name={tech} size="md" />
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.links?.github && (
            <Button
              variant="outline"
              size="sm"
              href={project.links.github}
              external
              icon={<GithubIcon className="w-3.5 h-3.5" />}
            >
              {t.projects.viewRepo}
            </Button>
          )}

          {project.links?.demo && (
            <Button
              variant="primary"
              size="sm"
              href={project.links.demo}
              external
              icon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              {t.projects.viewDemo}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
