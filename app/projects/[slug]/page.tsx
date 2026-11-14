import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectDetailClient } from "@/components/projects/ProjectDetailClient";
import { getAllProjects, getProjectBySlug, getAdjacentProjects } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.title}: Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title}: Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ProjectDetailClient
        slug={slug}
        initialProject={project}
        initialPrev={prev}
        initialNext={next}
      />
    </Suspense>
  );
}
