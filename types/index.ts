export type Language = "en" | "id";

export interface ProjectSection {
  heading: string;
  content: string;
  bulletPoints?: string[];
  image?: string;
  imageCaption?: string;
}

export interface ProjectGalleryItem {
  url: string;
  caption: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  category: string;
  categoryLabel: string;
  period?: string;
  description: string;
  overview: string;
  highlights?: string[];
  coverImage: string;
  technologies: string[];
  featured: boolean;
  status: string;
  links?: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  metadata: {
    role: string;
    duration: string;
    client?: string;
  };
  problemStatement: string;
  solution: string;
  technicalArchitecture: string;
  sections: ProjectSection[];
  gallery?: ProjectGalleryItem[];
  challengesAndLessons: string[];
}

export interface SkillItem {
  name: string;
  description?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "employment" | "contract" | "internship" | "education" | "certification";
  description: string;
  contributions: string[];
  skills?: string[];
  status?: string;
}

export interface Profile {
  name: string;
  role: string;
  eyebrow: string;
  tagline: string;
  headline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin?: string;
  cvPath: string;
  availability: {
    status: "available" | "busy" | "open_to_collaborations";
    label: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
}

