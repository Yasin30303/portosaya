import { SkillCategory, Language } from "@/types";

export const skillsDataEn: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Modern, responsive, accessible web interfaces built with strict typing and high-fidelity design craft.",
    skills: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "HTML5 & Semantic DOM",
      "CSS3 & CSS Variables",
      "Motion (Framer)",
      "Responsive Layouts",
    ],
  },
  {
    title: "Backend & Systems",
    description: "Reliable transactional backends, relational database schemas, and type-safe data access layers.",
    skills: [
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Server Actions",
      "RESTful APIs",
      "Authentication & RBAC",
      "Multi-Criteria DSS (SMART & SAW)",
    ],
  },
  {
    title: "AI & Computer Vision",
    description: "Applied deep learning models for sequence recognition, image processing, and neural network pipelines.",
    skills: [
      "Python",
      "PyTorch",
      "OpenCV",
      "CNN (Convolutional Networks)",
      "BiLSTM (Recurrent Networks)",
      "CTC Loss & Decoding",
      "NumPy & Data Preprocessing",
      "HTR / OCR Pipelines",
    ],
  },
  {
    title: "Tooling & Architecture",
    description: "Disciplined engineering workflow, version control, security audits, and continuous deployment.",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Vercel Deployment",
      "Figma to Code",
      "Security Audits & Remediation",
      "Technical SEO & Performance",
      "Linux / Bash",
      "BNSP Software Certified",
    ],
  },
];

export const skillsDataId: SkillCategory[] = [
  {
    title: "Rekayasa Frontend",
    description: "Antarmuka web modern, responsif, dan aksesibel yang dibangun dengan pengetikan tipe ketat serta standar desain presisi.",
    skills: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "HTML5 & Semantic DOM",
      "CSS3 & Variabel CSS",
      "Motion (Framer)",
      "Tata Letak Responsif",
    ],
  },
  {
    title: "Backend & Sistem",
    description: "Backend transaksional yang andal, skema basis data relasional, dan lapisan akses data bertipe aman.",
    skills: [
      "Node.js",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Server Actions",
      "RESTful APIs",
      "Autentikasi & RBAC",
      "SPK Multikriteria (SMART & SAW)",
    ],
  },
  {
    title: "AI & Computer Vision",
    description: "Penerapan model deep learning untuk pengenalan sekuens, pemrosesan citra digital, dan arsitektur jaringan saraf.",
    skills: [
      "Python",
      "PyTorch",
      "OpenCV",
      "CNN (Convolutional Networks)",
      "BiLSTM (Recurrent Networks)",
      "CTC Loss & Decoding",
      "NumPy & Pra-pemrosesan Data",
      "Pipeline HTR / OCR",
    ],
  },
  {
    title: "Tooling & Arsitektur",
    description: "Alur kerja rekayasa disiplin, kontrol versi, audit keamanan server, dan penerapan berkelanjutan.",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Deployment Vercel",
      "Figma to Code",
      "Audit & Remediasi Keamanan",
      "Technical SEO & Performa",
      "Linux / Bash",
      "Sertifikasi Kompetensi BNSP",
    ],
  },
];

export function getSkillsData(lang: Language = "en"): SkillCategory[] {
  return lang === "id" ? skillsDataId : skillsDataEn;
}

// Backwards compatibility default export
export const skillsData = skillsDataEn;
