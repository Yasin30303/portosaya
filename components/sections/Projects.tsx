"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { FadeIn } from "@/components/ui/FadeIn";
import { getProjectsData } from "@/data/projects";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Projects() {
  const { language, t } = useLanguage();
  const projects = getProjectsData(language);

  return (
    <section id="projects" className="py-12 md:py-16 scroll-mt-20">
      <Container>
        <FadeIn>
          <SectionHeading
            index={t.projects.index}
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </FadeIn>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project, idx) => (
            <FadeIn key={project.slug} delay={idx * 0.1}>
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
