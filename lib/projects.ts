import { getProjectsData } from "@/data/projects";
import { Project, Language } from "@/types";

export function getAllProjects(lang: Language = "en"): Project[] {
  return getProjectsData(lang);
}

export function getFeaturedProjects(lang: Language = "en"): Project[] {
  return getProjectsData(lang).filter((p) => p.featured);
}

export function getProjectBySlug(slug: string, lang: Language = "en"): Project | undefined {
  return getProjectsData(lang).find((p) => p.slug === slug);
}

export function getAdjacentProjects(currentSlug: string, lang: Language = "en"): {
  prev: Project | null;
  next: Project | null;
} {
  const projects = getProjectsData(lang);
  const index = projects.findIndex((p) => p.slug === currentSlug);
  if (index === -1) {
    return { prev: null, next: null };
  }

  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return { prev, next };
}
