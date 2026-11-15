"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getProfileData } from "@/data/profile";

export function Hero() {
  const { language, t } = useLanguage();
  const profile = getProfileData(language);

  return (
    <section
      id="hero"
      className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7 order-1">
            {/* Eyebrow & Headline */}
            <FadeIn delay={0.05}>
              <div className="space-y-3">
                {/* Eyebrow label */}
                <div className="text-xs md:text-sm font-mono uppercase tracking-widest text-accent-text font-semibold">
                  {t.hero.eyebrow}
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.12] uppercase">
                  {t.hero.headline}
                </h1>
              </div>
            </FadeIn>

            {/* Combined Clean Sans-Serif Description */}
            <FadeIn delay={0.1}>
              <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-2xl font-normal">
                {profile.shortBio}
              </p>
            </FadeIn>

            {/* CTAs: 2 streamlined buttons */}
            <FadeIn delay={0.15}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  href="#projects"
                  icon={<ArrowDown className="w-4 h-4" />}
                >
                  {t.hero.ctaProjects}
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  href="#contact"
                  icon={<Mail className="w-4 h-4 text-accent-text" />}
                >
                  {t.hero.ctaContact}
                </Button>
              </div>
            </FadeIn>

            {/* Key Verification Metrics */}
            <FadeIn delay={0.25}>
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border/70 font-mono">
                {profile.stats?.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-muted">
                      {stat.label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-foreground">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Balanced Editorial Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-2">
            <FadeIn delay={0.15} direction="none" className="w-72 sm:w-80">
              <div className="relative p-2.5 rounded-2xl border border-border/90 bg-surface/60 backdrop-blur-md shadow-xl ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300 hover:border-accent/40 hover:shadow-2xl">
                {/* Photo Container */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900 border border-border/80 group">
                  <Image
                    src="/images/profile/R4.jpg (3).jpeg"
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 288px, 320px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Single Clean Location Badge */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center text-[11px] font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-surface/90 backdrop-blur-md border border-border/80 text-foreground font-medium flex items-center gap-1.5 shadow-sm">
                      <MapPin className="w-3 h-3 text-accent-text" />
                      Bandung, ID
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
