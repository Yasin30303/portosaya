"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, FileText, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { profileData } from "@/data/profile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
  activeSection: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  navItems,
  activeSection,
}: MobileMenuProps) {
  const { language } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  const cvLabel = language === "id" ? "Unduh Curriculum Vitae (PDF)" : "Download Curriculum Vitae (PDF)";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 md:hidden flex flex-col justify-between bg-background/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/80">
            <Link
              href="/"
              onClick={onClose}
              className="font-mono text-sm font-semibold tracking-wider text-foreground"
            >
              <span>YASIN // PORTFOLIO</span>
            </Link>

            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={onClose}
                className="flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg border border-border/80 bg-surface/80 text-foreground-secondary hover:text-foreground hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Nav Links with Staggered Entrance */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, idx) => {
                const isCurrent =
                  item.href === "/"
                    ? activeSection === ""
                    : activeSection === item.href.replace("/#", "").replace("#", "");

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between py-2.5 text-2xl font-bold tracking-tight text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-muted font-normal">
                          0{idx + 1}
                        </span>
                        <span className={isCurrent ? "text-accent-text" : ""}>
                          {item.label}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted group-hover:text-accent-text group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>

          {/* Bottom Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.25 }}
            className="p-6 border-t border-border/80 bg-surface/40 flex flex-col gap-4"
          >
            <a
              href={profileData.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 min-h-[44px] rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors shadow-sm shadow-accent/20"
            >
              <FileText className="w-4 h-4" />
              <span>{cvLabel}</span>
            </a>

            <div className="flex items-center justify-between pt-2">
              <span className="font-mono text-xs text-muted">
                {profileData.location}
              </span>
              <SocialLinks iconSize="sm" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
