"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { getProjectBySlug, getAdjacentProjects } from "@/lib/projects";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Project } from "@/types";
import { AlertCircle, CheckCircle2, Lightbulb } from "lucide-react";

interface ProjectDetailClientProps {
  slug: string;
  initialProject: Project;
  initialPrev: Project | null;
  initialNext: Project | null;
}

export function ProjectDetailClient({
  slug,
  initialProject,
  initialPrev,
  initialNext,
}: ProjectDetailClientProps) {
  const { language, t } = useLanguage();
  const project = getProjectBySlug(slug, language) || initialProject;
  const { prev, next } = getAdjacentProjects(slug, language) || {
    prev: initialPrev,
    next: initialNext,
  };

  return (
    <article className="pt-28 pb-20 md:py-36">
      <Container size="narrow">
        {/* Header */}
        <ProjectHeader project={project} />

        {/* Problem vs Solution Summary Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          {/* Problem */}
          <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-red-400 font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>{t.projects.problemTitle}</span>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.projects.solutionTitle}</span>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Case Study In-Depth Sections */}
        <div className="space-y-12 my-12">
          {project.sections.map((section, idx) => (
            <section
              key={idx}
              className="p-8 rounded-2xl border border-border/80 bg-surface/40 space-y-5"
            >
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {section.heading}
              </h2>

              <p className="text-base text-foreground-secondary leading-relaxed">
                {section.content}
              </p>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2.5 pt-2 font-mono text-xs sm:text-sm text-foreground-secondary border-t border-border/60">
                  {section.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-accent-text select-none shrink-0 font-mono text-xs mt-0.5">›</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Gallery / Visual System */}
        <ProjectGallery items={project.gallery} />

        {/* Challenges & Lessons Learned */}
        <div className="p-8 rounded-2xl border border-border/80 bg-surface/50 space-y-4 my-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-text font-semibold">
            <Lightbulb className="w-4 h-4" />
            <span>{t.projects.lessonsTitle}</span>
          </div>

          <ul className="space-y-3 text-sm text-foreground-secondary">
            {project.challengesAndLessons.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="font-mono text-xs text-accent-text font-bold mt-0.5">
                  0{idx + 1}.
                </span>
                <span className="leading-relaxed">{lesson}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <ProjectNavigation prev={prev} next={next} />
      </Container>
    </article>
  );
}

