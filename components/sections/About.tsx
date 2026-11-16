"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";

export function About() {
  const { language, t } = useLanguage();
  const profile = getProfileData(language);

  const pillarsEn = [
    {
      title: "Full-Stack Web Systems",
      description:
        "Transactional architectures with Next.js, TypeScript, and relational SQL schemas.",
    },
    {
      title: "AI & Computer Vision",
      description:
        "PyTorch pipelines: CNN-BiLSTM-CTC models for sequential offline text recognition.",
    },
    {
      title: "Decision Support Systems",
      description:
        "Deterministic multi-criteria algorithms (SMART & SAW) for operational optimization.",
    },
    {
      title: "Security & Hardening",
      description:
        "Linux server protection, malware decontamination, and technical SEO recovery.",
    },
  ];

  const pillarsId = [
    {
      title: "Sistem Web Full-Stack",
      description:
        "Arsitektur transaksional dengan Next.js, TypeScript, dan skema SQL relasional.",
    },
    {
      title: "AI & Computer Vision",
      description:
        "Pipeline PyTorch: model CNN-BiLSTM-CTC untuk pengenalan teks sekuensial.",
    },
    {
      title: "Sistem Pendukung Keputusan",
      description:
        "Algoritma deterministik multikriteria (SMART & SAW) untuk optimasi operasional.",
    },
    {
      title: "Keamanan & Penguatan Server",
      description:
        "Proteksi server Linux, pembersihan malware, dan pemulihan technical SEO.",
    },
  ];

  const pillars = language === "id" ? pillarsId : pillarsEn;

  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-24">
      <Container>
        <FadeIn>
          <SectionHeading
            index={t.about.index}
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />
        </FadeIn>

        <div className="space-y-10 md:space-y-12">
          {/* Narrative Story (Editorial Bio Columns) */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 text-foreground-secondary leading-relaxed text-base sm:text-lg">
              <div className="space-y-4">
                <p className="text-foreground font-semibold text-lg sm:text-xl leading-relaxed">
                  {profile.fullBio[0]}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-foreground-secondary text-base sm:text-lg leading-relaxed">
                  {profile.fullBio[1]}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* 4 Pillars Strip - Horizontal, No Icons, Concise Editorial */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {pillars.map((pillar, pIdx) => (
              <FadeIn key={pillar.title} delay={0.15 + pIdx * 0.05}>
                <div className="h-full p-5 rounded-xl border border-border/80 bg-surface/80 hover:bg-surface hover:border-accent/40 transition-all duration-200 flex flex-col justify-between group">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-accent font-medium">
                      {`0${pIdx + 1} //`}
                    </span>
                    <h3 className="text-sm font-bold text-foreground tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-foreground-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
