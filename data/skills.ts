import { SkillCategory, Language } from "@/types";

export const skillsDataEn: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Modern, responsive, accessible web interfaces built with strict typing and high-fidelity design craft.",
    skills: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion (Framer)",
    ],
  },
  {
    title: "Backend & Systems",
    description: "Reliable transactional backends, relational database schemas, and type-safe data access layers.",
    skills: [
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "WordPress & PHP",
      "RESTful APIs",
    ],
  },
  {
    title: "AI & Computer Vision",
    description: "Applied deep learning models for sequence recognition, image processing, and neural network pipelines.",
    skills: [
      "Python",
      "PyTorch",
      "OpenCV",
      "CNN-BiLSTM Architecture",
      "CTC Loss & Decoding",
      "NumPy",
    ],
  },
  {
    title: "Security & DevOps",
    description: "Disciplined engineering workflow, server hardening, security audits, and continuous deployment.",
    skills: [
      "Git & GitHub",
      "Linux / Apache Hardening",
      "SEO Malware Remediation",
      "Vercel CI/CD",
      "Technical SEO",
    ],
  },
];

export const skillsDataId: SkillCategory[] = [
  {
    title: "Rekayasa Frontend",
    description: "Antarmuka web modern, responsif, dan aksesibel yang dibangun dengan pengetikan tipe ketat serta standar desain presisi.",
    skills: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion (Framer)",
    ],
  },
  {
    title: "Backend & Sistem",
    description: "Backend transaksional yang andal, skema basis data relasional, dan lapisan akses data bertipe aman.",
    skills: [
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Prisma ORM",
      "WordPress & PHP",
      "RESTful APIs",
    ],
  },
  {
    title: "AI & Computer Vision",
    description: "Penerapan model deep learning untuk pengenalan sekuens, pemrosesan citra digital, dan arsitektur jaringan saraf.",
    skills: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Arsitektur CNN-BiLSTM",
      "Loss & Decoding CTC",
      "NumPy",
    ],
  },
  {
    title: "Keamanan & DevOps",
    description: "Alur kerja rekayasa disiplin, penguatan server, audit keamanan, dan penerapan berkelanjutan.",
    skills: [
      "Git & GitHub",
      "Penguatan Server Linux",
      "Remediasi Malware SEO",
      "Deployment Vercel",
      "Technical SEO",
    ],
  },
];

export function getSkillsData(lang: Language = "en"): SkillCategory[] {
  return lang === "id" ? skillsDataId : skillsDataEn;
}

// Backwards compatibility default export
export const skillsData = skillsDataEn;
