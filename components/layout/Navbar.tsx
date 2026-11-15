"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["hero", "about", "projects", "skills", "experience", "contact"];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "/#hero", id: "hero" },
    { label: t.nav.about, href: "/#about", id: "about" },
    { label: t.nav.projects, href: "/#projects", id: "projects" },
    { label: t.nav.skills, href: "/#skills", id: "skills" },
    { label: t.nav.experience, href: "/#experience", id: "experience" },
    { label: t.nav.contact, href: "/#contact", id: "contact" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Styling when scrolled past initial top margin
      setIsScrolled(currentScrollY > 20);

      // Always show navbar near top of page (e.g. within 60px)
      if (currentScrollY <= 60) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Ignore micro-scroll fluctuations / trackpad bounce
      const diff = currentScrollY - lastScrollY;
      if (Math.abs(diff) < 8) {
        return;
      }

      if (diff > 0) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full pointer-events-none",
          isScrolled
            ? "py-3 bg-background/85 backdrop-blur-md border-b border-border/80 shadow-sm"
            : "py-5 bg-transparent"
        )}
      >
        <Container className="relative flex items-center justify-between">
          {/* Desktop Navigation Links (Centrally Positioned) */}
          <nav
            className="hidden md:flex items-center gap-1 p-1 rounded-full border border-border/80 bg-surface/80 backdrop-blur-md text-xs font-medium md:absolute md:left-1/2 md:-translate-x-1/2"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
                    isActive
                      ? "bg-accent text-white font-semibold shadow-xs"
                      : "text-foreground-secondary hover:text-foreground hover:bg-surface-hover"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="ml-auto flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg border border-border/80 bg-surface/80 text-foreground hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
}
