"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { getSkillsData } from "@/data/skills";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Check } from "lucide-react";

export function Skills() {
  const { language, t } = useLanguage();
  const skillsData = getSkillsData(language);

  const evidenceList = [
    t.skills.evidence1,
    t.skills.evidence2,
    t.skills.evidence3,
    t.skills.evidence4,
  ];

  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-24">
      <Container>
        <FadeIn>
          <SectionHeading
            index={t.skills.index}
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => {
            const domainEvidence = evidenceList[idx] || evidenceList[0];

            return (
              <FadeIn key={category.title} delay={idx * 0.08}>
                <div className="p-6 rounded-2xl border border-border/80 bg-surface/40 hover:bg-surface/75 hover:border-accent/30 transition-all duration-200 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-xs text-foreground-secondary leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <ul className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="group flex items-center text-sm font-mono text-foreground-secondary hover:text-foreground transition-colors"
                        >
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/60 flex items-center gap-1.5 text-[11px] font-mono text-muted">
                    <Check className="w-3.5 h-3.5 text-accent-text" />
                    <span>{domainEvidence}</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
