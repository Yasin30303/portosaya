"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { FadeIn } from "@/components/ui/FadeIn";
import { getProjectsData } from "@/data/projects";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Projects() {
  const { language, t } = useLanguage();
  const projects = getProjectsData(language);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => [
    { id: "All", label: t.projects.filterAll },
    { id: "Web Development", label: t.projects.filterWeb },
    { id: "Machine Learning & CV", label: t.projects.filterML },
  ], [t.projects.filterAll, t.projects.filterWeb, t.projects.filterML]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: projects.length,
    };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [projects]);

  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-24">
      <Container>
        <FadeIn>
          <SectionHeading
            index={t.projects.index}
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1}>
          <div
            className="flex flex-wrap items-center gap-2 mb-10 md:mb-14"
            role="tablist"
            aria-label="Project category filter"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] ?? 0;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
                    isSelected
                      ? "bg-foreground text-background font-medium shadow-sm"
                      : "bg-surface/60 border border-border/80 text-foreground-secondary hover:text-foreground hover:bg-surface hover:border-foreground/20"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-background/20 text-background"
                        : "bg-surface-hover text-foreground-muted group-hover:text-foreground-secondary"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="space-y-12 md:space-y-16">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.slug} delay={idx * 0.08}>
              <FeaturedProject
                project={project}
                reverse={idx % 2 !== 0}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
