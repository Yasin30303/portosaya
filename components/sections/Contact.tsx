"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { getProfileData } from "@/data/profile";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { Mail, Copy, Check, Phone, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { language, t } = useLanguage();
  const profile = getProfileData(language);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cleanPhone = profile.phone.replace(/[^0-9]/g, "");

  return (
    <section id="contact" className="py-20 md:py-32 scroll-mt-24">
      <Container size="narrow">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto space-y-6 md:space-y-8">
            {/* 1. Section Index & Eyebrow */}
            <div className="flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-widest text-accent-text">
              <span className="opacity-70 font-semibold">{t.contact.index}</span>
              <span>{t.contact.eyebrow}</span>
            </div>

            {/* 2. Editorial Headline & Subtext */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                {t.contact.title}
              </h2>
              <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-xl mx-auto font-sans">
                {t.contact.description}
              </p>
            </div>

            {/* 3. Aligned Contact Buttons Row: Email, GitHub, WhatsApp */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              {/* Email Button (Direct Mailto with Split Copy Trigger) */}
              <div className="group inline-flex items-center rounded-xl border border-border/80 bg-surface/70 hover:bg-surface hover:border-accent/40 shadow-xs hover:shadow-md transition-all duration-200">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 text-sm font-semibold text-foreground hover:text-accent-text transition-colors rounded-l-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                  title={`Send email to ${profile.email}`}
                >
                  <Mail className="w-4 h-4 text-accent-text shrink-0" />
                  <span>{t.contact.sendEmail}</span>
                </a>

                <span className="w-px h-5 bg-border/80" aria-hidden="true" />

                <button
                  type="button"
                  onClick={copyEmail}
                  className={`inline-flex items-center gap-1.5 px-3 py-3 text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-r-xl cursor-pointer ${
                    copied
                      ? "text-emerald-500 font-semibold"
                      : "text-foreground-secondary hover:text-foreground hover:bg-surface-hover/50"
                  }`}
                  title={copied ? t.contact.copiedEmail : t.contact.copyEmail}
                  aria-label={copied ? t.contact.copiedEmail : t.contact.copyEmail}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[11px] font-mono">{t.contact.copiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-mono">{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub Button */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border/80 bg-surface/70 hover:bg-surface hover:border-accent/40 text-foreground text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-foreground-secondary group-hover:text-foreground transition-colors shrink-0" />
                <span>{t.contact.githubProfile}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(t.contact.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border/80 bg-surface/70 hover:bg-surface hover:border-emerald-500/40 text-foreground text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                title={`${t.contact.phoneLabel} — Direct WhatsApp`}
              >
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Direct Contact Handles */}
            <div className="pt-3 font-mono text-xs text-muted flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-foreground transition-colors"
              >
                {profile.email}
              </a>
              <span className="select-none opacity-30" aria-hidden="true">/</span>
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(t.contact.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {profile.phone}
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
