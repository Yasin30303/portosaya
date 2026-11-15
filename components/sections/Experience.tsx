"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { FadeIn } from "@/components/ui/FadeIn";
import { getExperienceData } from "@/data/experience";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Experience() {
  const { language, t } = useLanguage();
  const experienceData = getExperienceData(language);

  return (
    <section id="experience" className="py-12 md:py-16 scroll-mt-20">
      <Container>
        <FadeIn>
          <SectionHeading
            index={t.experience.index}
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
            description={t.experience.description}
          />
        </FadeIn>

        <div className="relative border-l border-border/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, idx) => (
            <FadeIn key={`${item.organization}-${idx}`} delay={idx * 0.08}>
              <div className="relative group">
                {/* Minimal Timeline Indicator Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-3.5 flex items-center justify-center w-6 h-6 rounded-full border border-border/90 bg-surface text-accent group-hover:border-accent group-hover:scale-110 transition-all shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Main Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-surface/40 hover:bg-surface/75 hover:border-accent/30 transition-all duration-200 space-y-4">
                  {/* Header Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-accent-text">
                        {item.organization} /{" "}
                        <span className="text-muted font-normal text-xs">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-border bg-surface text-muted">
                        {item.period}
                      </span>
                      {item.status && (
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-accent/15 text-accent-text font-semibold border border-accent/30">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {/* Contribution Bullet Points */}
                  <ul className="space-y-2 pt-1 text-sm text-foreground-secondary font-sans">
                    {item.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-text select-none shrink-0 font-mono text-xs mt-0.5">›</span>
                        <span className="leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tags */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                      {item.skills.map((skill) => (
                        <TechTag key={skill} name={skill} size="sm" variant="subtle" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
