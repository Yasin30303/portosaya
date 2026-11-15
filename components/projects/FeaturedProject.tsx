"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { TechTag } from "@/components/ui/TechTag";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface FeaturedProjectProps {
  project: Project;
  reverse?: boolean;
}

export function FeaturedProject({ project, reverse = false }: FeaturedProjectProps) {
  const { t } = useLanguage();

  return (
    <div className="group relative rounded-2xl border border-border/80 bg-surface/40 hover:bg-surface/70 transition-all duration-300 overflow-hidden p-6 sm:p-8 lg:p-10">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Visual Preview */}
        <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
          <Link
            href={`/projects/${project.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border/80 bg-surface group-hover:border-accent/40 transition-all duration-300 shadow-md"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
          </Link>
        </div>

        {/* Content & Metadata */}
        <div
          className={`lg:col-span-5 space-y-5 ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Eyebrow & Category */}
          <div className="font-mono text-xs">
            <span className="text-accent-text uppercase tracking-wider font-semibold">
              {project.categoryLabel}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-accent-text transition-colors">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
            {project.overview}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 6).map((tech) => (
              <TechTag key={tech} name={tech} size="sm" />
            ))}
          </div>

          {/* Actions & Links */}
          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="sm"
              href={`/projects/${project.slug}`}
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              {t.projects.readCaseStudy}
            </Button>

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg border border-border/80 bg-surface hover:bg-surface-hover text-foreground-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                aria-label="GitHub Repository"
                title="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-lg border border-border/80 bg-surface hover:bg-surface-hover text-foreground-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                aria-label="Live Demo"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
