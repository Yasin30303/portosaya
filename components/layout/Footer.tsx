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

  const navLinks = [
    { label: t.nav.home, href: "/#hero" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.projects, href: "/#projects" },
    { label: t.nav.skills, href: "/#skills" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <footer className="border-t border-border/50 bg-surface/30 pt-12 pb-10 mt-12 md:mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/60">
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-base font-bold tracking-tight text-foreground"
            >
              <span>{profile.name}</span>
            </Link>

            <p className="text-sm text-foreground-secondary max-w-md leading-relaxed">
              {profile.role}. {profile.headline}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground hover:translate-x-0.5 transition-all inline-block py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              {t.footer.channels}
            </h4>
            <div className="pt-1">
              <SocialLinks />
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
