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
      title: "Full-Stack Web Engineering",
      description:
        "High-reliability production web apps with Next.js, TypeScript, and relational databases.",
    },
    {
      title: "AI & Computer Vision",
      description:
        "End-to-end deep learning pipelines in PyTorch and sequential image-based models.",
    },
    {
      title: "Decision Support Systems",
      description:
        "Deterministic algorithms (SMART & SAW) for automated scheduling and stock prioritization.",
    },
    {
      title: "Security & Hardening",
      description:
        "Server core maintenance, SEO malware remediation, and production runtime hardening.",
    },
  ];

  const pillarsId = [
    {
      title: "Rekayasa Web Full-Stack",
      description:
        "Aplikasi web produksi berkeandalan tinggi dengan Next.js, TypeScript, dan basis data relasional.",
    },
    {
      title: "AI & Computer Vision",
      description:
        "Pipeline deep learning end-to-end dengan PyTorch dan pemodelan sekuensial berbasis citra.",
    },
    {
      title: "Sistem Pendukung Keputusan",
      description:
        "Algoritma deterministik (SMART & SAW) untuk otomatisasi penjadwalan dan prioritas stok.",
    },
    {
      title: "Keamanan & Penguatan Server",
      description:
        "Pemeliharaan core server, mitigasi injeksi malware SEO, dan penguatan performa produksi.",
    },
  ];

  const pillars = language === "id" ? pillarsId : pillarsEn;

  return (
    <section id="about" className="py-12 md:py-16 scroll-mt-20">
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
              <div className="space-y-4 sm:space-y-5">
                <p className="text-foreground font-semibold text-lg sm:text-xl leading-relaxed">
                  {profile.fullBio[0]}
                </p>
                <p>{profile.fullBio[1]}</p>
              </div>
              <div className="space-y-4 sm:space-y-5">
                <p>{profile.fullBio[2]}</p>
                <p>{profile.fullBio[3]}</p>
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
