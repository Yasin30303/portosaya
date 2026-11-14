"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24">
      <Container size="narrow" className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/80 bg-surface/80 text-xs font-mono text-accent-text">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>{t.notFound.errorTag}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground font-mono">
          {t.notFound.title}
        </h1>

        <p className="text-base sm:text-lg text-foreground-secondary max-w-md mx-auto leading-relaxed">
          {t.notFound.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button variant="primary" size="md" href="/" icon={<Home className="w-4 h-4" />}>
            {t.notFound.btnHome}
          </Button>

          <Button
            variant="secondary"
            size="md"
            href="/#projects"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            {t.notFound.btnProjects}
          </Button>
        </div>
      </Container>
    </div>
  );
}
