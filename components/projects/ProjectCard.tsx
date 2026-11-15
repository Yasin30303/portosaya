import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { TechTag } from "@/components/ui/TechTag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border/80 bg-surface/50 hover:bg-surface/80 hover:border-accent/40 transition-all duration-300 overflow-hidden p-5 sm:p-6">
      {/* Thumbnail */}
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border/80 bg-surface mb-5"
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 450px"
          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
        />
      </Link>

      {/* Meta & Category */}
      <div className="flex items-center justify-between text-xs font-mono text-muted mb-2">
        <span className="text-accent uppercase tracking-wider font-semibold">
          {project.categoryLabel}
        </span>
        <span>{project.metadata.duration}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors mb-2.5">
        <Link href={`/projects/${project.slug}`} className="flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-accent" />
        </Link>
      </h3>

      {/* Description */}
      <p className="text-sm text-foreground-secondary leading-relaxed line-clamp-3 mb-4 flex-1">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
        {project.technologies.slice(0, 4).map((tech) => (
          <TechTag key={tech} name={tech} size="sm" />
        ))}
        {project.technologies.length > 4 && (
          <span className="text-[11px] font-mono text-muted self-center px-1">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
    </div>
  );
}

