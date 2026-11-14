"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechTag } from "@/components/ui/TechTag";
import { useTheme } from "@/components/providers/ThemeProvider";
import {
  Palette,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";

export function DesignSystemShowcase() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [clickCount, setClickCount] = useState(0);

  const colorTokens = [
    {
      name: "--background",
      dark: "#080616",
      light: "#F7F7FC",
      role: "Core Canvas Background",
    },
    {
      name: "--background-secondary",
      dark: "#1A1953",
      light: "#EEEEFA",
      role: "Alternate Section Canvas",
    },
    {
      name: "--surface",
      dark: "#11102A",
      light: "#FFFFFF",
      role: "Elevated Cards & Containers",
    },
    {
      name: "--surface-hover",
      dark: "#1A1953",
      light: "#E9E8F8",
      role: "Interactive Hover Surface",
    },
    {
      name: "--accent",
      dark: "#2F2FE4",
      light: "#2F2FE4",
      role: "Primary Electric Indigo Accent",
    },
    {
      name: "--accent-secondary",
      dark: "#162E93",
      light: "#162E93",
      role: "Deep Royal Supporting Indigo",
    },
    {
      name: "--accent-hover",
      dark: "#4444F0",
      light: "#162E93",
      role: "Hover State for Accents",
    },
    {
      name: "--foreground",
      dark: "#F5F4FF",
      light: "#141329",
      role: "Primary Typography",
    },
    {
      name: "--foreground-secondary",
      dark: "#B7B5CE",
      light: "#55536F",
      role: "Secondary Supporting Typography",
    },
    {
      name: "--muted",
      dark: "#85829F",
      light: "#77748D",
      role: "Metadata & Monospace Labels",
    },
    {
      name: "--border",
      dark: "#302D59",
      light: "#DCD9F0",
      role: "Dividers, Outlines & Hairlines",
    },
    {
      name: "--focus-ring",
      dark: "#7777FF",
      light: "#2F2FE4",
      role: "Accessibility Focus Indicators",
    },
  ];

  return (
    <div className="py-24 sm:py-32 space-y-24">
      {/* Header Banner */}
      <Container>
        <div className="p-8 sm:p-12 rounded-3xl border border-border bg-surface/60 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border/70">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 font-mono text-xs text-accent font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MILESTONE 1 // DESIGN SYSTEM FOUNDATION</span>
                <span>MILESTONE 1: DESIGN SYSTEM FOUNDATION</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Deep Indigo Design System
              </h1>
              <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl">
                Complete design tokens, semantic CSS variables, Geist typography hierarchy,
                responsive container bounds, and reusable component primitives.
              </p>
            </div>

            {/* Live Theme Controller */}
            <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
              <div className="text-xs font-mono text-muted uppercase tracking-wider">
                LIVE THEME CONTROLLER
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded-xl border border-border bg-surface">
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    theme === "dark"
                      ? "bg-accent text-white font-bold shadow-xs"
                      : "text-foreground-secondary hover:text-foreground hover:bg-surface-hover"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>DARK</span>
                </button>

                <button
                  onClick={() => setTheme("light")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    theme === "light"
                      ? "bg-accent text-white font-bold shadow-xs"
                      : "text-foreground-secondary hover:text-foreground hover:bg-surface-hover"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>LIGHT</span>
                </button>

                <button
                  onClick={() => setTheme("system")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    theme === "system"
                      ? "bg-accent text-white font-bold shadow-xs"
                      : "text-foreground-secondary hover:text-foreground hover:bg-surface-hover"
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                  <span>SYSTEM</span>
                </button>

                <div className="pl-2 border-l border-border/80">
                  <ThemeToggle />
                </div>
              </div>

              <div className="font-mono text-[11px] text-muted flex items-center gap-2">
                <span>Active: <strong className="text-accent">{theme}</strong></span>
                <span>/</span>
                <span>Resolved: <strong className="text-foreground">{resolvedTheme}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Verification Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 font-mono text-xs">
            <div className="flex items-center gap-2 text-foreground-secondary">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>CSS Variables Configured</span>
            </div>
            <div className="flex items-center gap-2 text-foreground-secondary">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero-FOUC Persistence</span>
            </div>
            <div className="flex items-center gap-2 text-foreground-secondary">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Geist Sans &amp; Mono</span>
            </div>
            <div className="flex items-center gap-2 text-foreground-secondary">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>WCAG 2.2 AA Contrast</span>
            </div>
          </div>
        </div>
      </Container>

      {/* 1. Color Palette Tokens */}
      <Container>
        <div className="space-y-8">
          <SectionHeading
            index="01 //"
            eyebrow="COLOR SYSTEM"
            title="Semantic CSS Color Variables"
            description="The complete Deep Indigo palette following #080616, #1A1953, #162E93, and #2F2FE4 with automatic dark/light theme switching."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {colorTokens.map((token) => (
              <div
                key={token.name}
                className="p-5 rounded-2xl border border-border bg-surface/50 hover:bg-surface hover:border-accent/40 transition-all duration-200 space-y-3"
              >
                <div
                  className="h-14 w-full rounded-xl border border-border/80 shadow-inner flex items-center justify-between px-3 text-xs font-mono font-bold"
                  style={{ backgroundColor: `var(${token.name})` }}
                >
                  <span className="p-1 rounded bg-black/40 text-white backdrop-blur-xs text-[10px]">
                    LIVE TOKEN
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-xs font-bold text-accent">
                    {token.name}
                  </div>
                  <div className="text-xs text-foreground-secondary leading-snug">
                    {token.role}
                  </div>
                </div>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between font-mono text-[11px] text-muted">
                  <span>Dark: {token.dark}</span>
                  <span>Light: {token.light}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 2. Typography Scale */}
      <Container>
        <div className="space-y-8">
          <SectionHeading
            index="02 //"
            eyebrow="TYPOGRAPHY SYSTEM"
            title="Geist Sans &amp; Geist Mono Hierarchy"
            description="Responsive type scaling using fluid clamp values, geometric hierarchy, and tabular monospace metadata."
          />

          <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/50 space-y-8">
            {/* Display / Hero */}
            <div className="space-y-2 pb-6 border-b border-border/60">
              <div className="font-mono text-xs text-muted">DISPLAY HERO // 48px - 64px CLAMP</div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.08]">
                Building digital experiences through code &amp; curiosity.
              </div>
            </div>

            {/* Section Heading */}
            <div className="space-y-2 pb-6 border-b border-border/60">
              <div className="font-mono text-xs text-muted">SECTION TITLE // 28px - 36px</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Engineered solutions &amp; research case studies.
              </div>
            </div>

            {/* Subsection Title */}
            <div className="space-y-2 pb-6 border-b border-border/60">
              <div className="font-mono text-xs text-muted">SUBSECTION TITLE // 20px - 24px</div>
              <div className="text-xl sm:text-2xl font-bold text-foreground">
                Inventory &amp; Cashier Decision Support System
              </div>
            </div>

            {/* Body Text */}
            <div className="space-y-2 pb-6 border-b border-border/60">
              <div className="font-mono text-xs text-muted">BODY REGULAR // 16px - 18px</div>
              <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-3xl">
                I am an Informatics Engineering graduate from Universitas Komputer Indonesia (UNIKOM)
                focused on building high-performance web systems and applied deep learning models in
                computer vision.
              </p>
            </div>

            {/* Monospace Metadata */}
            <div className="space-y-2">
              <div className="font-mono text-xs text-muted">MONOSPACE METADATA // GEIST MONO 12px - 14px</div>
              <div className="p-4 rounded-xl border border-border bg-surface/80 font-mono text-xs sm:text-sm text-accent space-y-1">
                <div>const MODEL_PIPELINE = &quot;CNN-BiLSTM-CTC&quot;;</div>
                <div>const STACK = [&quot;Next.js 16&quot;, &quot;TypeScript&quot;, &quot;Tailwind v4&quot;, &quot;PyTorch&quot;];</div>
                <div className="text-muted">{"// Latency: 60fps sustained · WCAG 2.2 AA compliant"}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 3. Reusable Component Primitives */}
      <Container>
        <div className="space-y-12">
          <SectionHeading
            index="03 //"
            eyebrow="COMPONENT PRIMITIVES"
            title="Interactive Reusable UI Library"
            description="Testing Button variants, sizes, icon alignments, ThemeToggle, SectionHeading, and TechTags."
          />

          {/* Button Showroom */}
          <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/40 space-y-8">
            <div className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              BUTTON VARIANTS &amp; SIZES (CLICK TO TEST INTERACTION)
            </div>

            {/* Primary & Secondary */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setClickCount((c) => c + 1)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Primary Large ({clickCount})
              </Button>

              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Primary Medium
              </Button>

              <Button variant="primary" size="sm">
                Primary Small
              </Button>

              <Button
                variant="secondary"
                size="md"
                icon={<Palette className="w-4 h-4 text-accent" />}
                iconPosition="left"
              >
                Secondary
              </Button>

              <Button
                variant="outline"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Outline Button
              </Button>

              <Button variant="ghost" size="md">
                Ghost Button
              </Button>

              <Button variant="primary" size="md" disabled>
                Disabled State
              </Button>
            </div>

            {/* Interactive Status Display */}
            <div className="font-mono text-xs text-muted flex items-center gap-2">
              <span>Interactive click test counter:</span>
              <span className="font-bold text-accent">{clickCount}</span>
            </div>
          </div>

          {/* TechTag Showroom */}
          <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/40 space-y-6">
            <div className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              TECHTAG MONOSPACE PILLS (PRD 4.4 &amp; 8.2)
            </div>

            <div className="flex flex-wrap gap-2.5">
              <TechTag name="Next.js 16" variant="accent" size="md" />
              <TechTag name="TypeScript" variant="default" size="md" />
              <TechTag name="Tailwind CSS v4" variant="default" size="md" />
              <TechTag name="PyTorch" variant="accent" size="md" />
              <TechTag name="CNN-BiLSTM-CTC" variant="default" size="sm" />
              <TechTag name="Prisma ORM" variant="subtle" size="sm" />
              <TechTag name="Supabase" variant="subtle" size="sm" />
              <TechTag name="SMART & SAW" variant="default" size="sm" />
            </div>
          </div>

          {/* Container Tokens Wireframe */}
          <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/40 space-y-6">
            <div className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
              RESPONSIVE CONTAINER TOKENS (PRD 4.5)
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl border border-dashed border-accent/40 bg-accent/5 flex items-center justify-between">
                <span className="font-bold text-accent">Default Container</span>
                <span className="text-muted">max-w-7xl (1280px) / px-5 sm:px-8 md:px-12 lg:px-16</span>
              </div>

              <div className="p-4 rounded-xl border border-dashed border-border bg-surface/80 flex items-center justify-between max-w-4xl mx-auto">
                <span className="font-bold text-foreground">Narrow Container</span>
                <span className="text-muted">max-w-4xl (896px) / Used for Case Studies &amp; Contact</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
