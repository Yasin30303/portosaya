"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { getProfileData } from "@/data/profile";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { language, t } = useLanguage();
  const profile = getProfileData(language);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-surface/30 pt-12 pb-10 mt-12 md:mt-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12 border-b border-border/60">
          {/* Identity Column */}
          <div className="max-w-md space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-base font-bold tracking-tight text-foreground"
            >
              <span>{profile.name}</span>
            </Link>

            <p className="text-sm text-foreground-secondary leading-relaxed">
              {profile.role}. {profile.headline}
            </p>
          </div>

          {/* Social & Contact Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              {t.footer.channels}
            </h4>
            <div className="pt-1">
              <SocialLinks linkedin={profile.linkedin} />
            </div>
            <p className="text-xs font-mono text-muted pt-2">
              {t.footer.city}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-mono">
          <div>
            &copy; 2026 {profile.name}. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-border/80 bg-surface/60 hover:bg-surface text-foreground-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              aria-label={t.footer.top}
            >
              <span>{t.footer.top}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
