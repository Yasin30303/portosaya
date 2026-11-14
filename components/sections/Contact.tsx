"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import { FadeIn } from "@/components/ui/FadeIn";
import { getProfileData } from "@/data/profile";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Mail, Copy, Check, MapPin, Phone, ExternalLink } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { language, t } = useLanguage();
  const profile = getProfileData(language);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 scroll-mt-20">
      <Container size="narrow">
        <FadeIn>
          <SectionHeading
            index={t.contact.index}
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
            align="center"
          />
        </FadeIn>

        {/* Contact Container Card */}
        <FadeIn delay={0.1}>
          <div className="mt-10 p-8 sm:p-12 rounded-3xl border border-border/80 bg-surface/50 text-center space-y-8 shadow-xl">
            {/* Availability Status */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-md border border-border bg-surface text-xs font-mono text-foreground-secondary">
              <span>{t.contact.statusText}</span>
            </div>

            {/* Email Highlight Box */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-muted">
                {t.contact.primaryChannel}
              </div>

              <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2.5 sm:p-3 rounded-2xl border border-border bg-surface/90 shadow-inner">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-base sm:text-xl font-bold text-foreground hover:text-accent-text transition-colors px-3 py-1"
                >
                  {profile.email}
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-border/80 bg-surface hover:bg-surface-hover text-xs font-mono text-foreground-secondary hover:text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                  aria-label={copied ? t.contact.copiedEmail : t.contact.copyEmail}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">{t.contact.copiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                href={`mailto:${profile.email}`}
                icon={<Mail className="w-4 h-4" />}
              >
                {t.contact.sendEmail}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={profile.github}
                external
                icon={<GithubIcon className="w-4 h-4" />}
              >
                {t.contact.githubProfile}
              </Button>
            </div>

            {/* Direct Details Grid */}
            <div className="pt-6 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-muted text-left">
              <div className="p-3.5 rounded-xl border border-border/60 bg-surface/30 space-y-1">
                <div className="flex items-center gap-1.5 text-foreground-secondary font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-accent-text" />
                  <span>{t.contact.locationLabel}</span>
                </div>
                <div>{profile.location}</div>
              </div>

              <a
                href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(t.contact.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-xl border border-border/60 bg-surface/30 hover:bg-surface/80 hover:border-emerald-500/40 transition-all duration-200 space-y-1 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring cursor-pointer"
                title={`${t.contact.phoneLabel} — Direct WhatsApp`}
                aria-label={`${t.contact.phoneLabel}: ${profile.phone} (${t.contact.phoneAction})`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-foreground-secondary font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-accent-text group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                    <span>{t.contact.phoneLabel}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold group-hover:bg-emerald-500/20 transition-colors">
                    <span>{t.contact.phoneAction}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
                <div className="text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 font-medium transition-colors">
                  {profile.phone}
                </div>
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
