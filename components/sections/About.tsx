"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";
import { Terminal, Cpu, Layers, ShieldCheck } from "lucide-react";

export function About() {
  const { language, t } = useLanguage();
  const profile = getProfileData(language);

  const pillarsEn = [
    {
      icon: <Terminal className="w-5 h-5 text-accent-text" />,
      title: "Full-Stack Web Engineering",
      description:
        "Building production web applications with Next.js App Router, TypeScript, and relational databases. Prioritizing strict typing, atomic transactions, and accessible UI.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent-text" />,
      title: "AI & Computer Vision",
      description:
        "Developing end-to-end deep learning pipelines in PyTorch. Experienced in sequential modeling (CNN-BiLSTM-CTC) for offline handwriting transcription.",
    },
    {
      icon: <Layers className="w-5 h-5 text-accent-text" />,
      title: "Decision Support Systems",
      description:
        "Translating complex multi-criteria operational dilemmas into deterministic algorithms (SMART & SAW) for automated scheduling and inventory prioritization.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent-text" />,
      title: "Security & Hardening",
      description:
        "Practicing defensive web engineering: server core maintenance, malicious SEO injection remediation, and performance optimization for high-availability production.",
    },
  ];

  const pillarsId = [
    {
      icon: <Terminal className="w-5 h-5 text-accent-text" />,
      title: "Rekayasa Web Full-Stack",
      description:
        "Membangun aplikasi web produksi dengan Next.js App Router, TypeScript, dan database relasional. Memprioritaskan pengetikan tipe ketat, transaksi atomik, dan UI aksesibel.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent-text" />,
      title: "AI & Computer Vision",
      description:
        "Mengembangkan pipeline deep learning end-to-end dengan PyTorch. Berpengalaman dalam pemodelan sekuensial (CNN-BiLSTM-CTC) untuk transkripsi tulisan tangan offline.",
    },
    {
      icon: <Layers className="w-5 h-5 text-accent-text" />,
      title: "Sistem Pendukung Keputusan",
      description:
        "Menerjemahkan dilema operasional multikriteria menjadi algoritma deterministik (SMART & SAW) untuk otomatisasi jadwal dan prioritas stok.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent-text" />,
      title: "Keamanan & Penguatan Server",
      description:
        "Menerapkan rekayasa web defensif: pemeliharaan berkala core server, pembersihan injeksi malware SEO, dan optimasi performa untuk produksi berkeandalan tinggi.",
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Story (Editorial Column) */}
          <FadeIn delay={0.1} className="lg:col-span-7 space-y-6 text-foreground-secondary leading-relaxed text-base sm:text-lg">
            {profile.fullBio.map((paragraph, index) => (
              <p key={index} className="first:text-foreground first:font-medium">
                {paragraph}
              </p>
            ))}
          </FadeIn>

          {/* Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, pIdx) => (
              <FadeIn key={pillar.title} delay={0.1 + pIdx * 0.08}>
                <div className="p-5 rounded-xl border border-border/80 bg-surface/60 hover:bg-surface hover:border-accent/30 transition-all duration-200 space-y-2.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-surface border border-border">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground-secondary leading-relaxed pl-1">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
