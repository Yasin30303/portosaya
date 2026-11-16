import { Profile, Language } from "@/types";

export const profileDataEn: Profile = {
  name: "Muhammad Nuaina Yasin",
  role: "Full-Stack Developer · Computer Vision",
  eyebrow: "SOFTWARE ENGINEER",
  tagline: "Engineering full-stack web and deep learning systems.",
  headline: "Building production web applications and deep learning recognition models.",
  shortBio:
    "Informatics Engineering graduate from UNIKOM Bandung. Building production web systems with Next.js and TypeScript, and training sequential handwriting recognition models in PyTorch.",
  fullBio: [
    "Graduated in Informatics Engineering from UNIKOM Bandung (2026, BNSP Certified Software Developer). My focus bridges transactional full-stack web engineering with applied deep learning research.",
    "In web engineering, I build production applications using Next.js, TypeScript, and relational databases, with direct experience in server security hardening and malware remediation. In machine learning, I design sequential handwriting text recognition pipelines (CNN-BiLSTM-CTC) trained on custom Indonesian datasets."
  ],
  location: "Kota Bandung, Jawa Barat, Indonesia",
  email: "ynuaina@gmail.com",
  phone: "+62 857 8432 9405",
  github: "https://github.com/Yasin30303",
  linkedin: "https://linkedin.com/in/muhammad-nuaina-yasin",
  cvPath: "/documents/cv.pdf",
  availability: {
    status: "available",
    label: "Open to Junior Full-Stack & ML roles",
  },
  stats: [
    { label: "Degree", value: "S1 Informatika" },
    { label: "Status", value: "Graduated 2026" },
    { label: "Certification", value: "BNSP Certified" },
    { label: "Core Stack", value: "Next.js · PyTorch" },
  ],
};

export const profileDataId: Profile = {
  name: "Muhammad Nuaina Yasin",
  role: "Full-Stack Developer · Computer Vision",
  eyebrow: "SOFTWARE ENGINEER",
  tagline: "Rekayasa sistem web full-stack dan model deep learning.",
  headline: "Membangun aplikasi web produksi dan model pengenalan deep learning.",
  shortBio:
    "Lulusan Teknik Informatika UNIKOM Bandung. Membangun sistem web produksi dengan Next.js dan TypeScript, serta melatih model pengenalan tulisan tangan sekuensial dengan PyTorch.",
  fullBio: [
    "Lulusan S1 Teknik Informatika UNIKOM Bandung (2026, tersertifikasi BNSP). Fokus saya memadukan rekayasa web full-stack transaksional dengan riset deep learning terapan.",
    "Pada rekayasa web, saya membangun aplikasi produksi dengan Next.js, TypeScript, dan basis data relasional, disertai pengalaman praktis dalam mitigasi keamanan server Linux dan pembersihan malware. Di bidang machine learning, saya merancang pipeline pengenalan tulisan tangan sekuensial (CNN-BiLSTM-CTC) pada dataset aksara Indonesia."
  ],
  location: "Kota Bandung, Jawa Barat, Indonesia",
  email: "ynuaina@gmail.com",
  phone: "+62 857 8432 9405",
  github: "https://github.com/Yasin30303",
  linkedin: "https://linkedin.com/in/muhammad-nuaina-yasin",
  cvPath: "/documents/cv.pdf",
  availability: {
    status: "available",
    label: "Terbuka untuk posisi Junior Full-Stack & ML",
  },
  stats: [
    { label: "Gelar", value: "S1 Informatika" },
    { label: "Status", value: "Lulus 2026" },
    { label: "Sertifikasi", value: "BNSP Terverifikasi" },
    { label: "Stack Utama", value: "Next.js · PyTorch" },
  ],
};

export const profileData = profileDataEn;

export function getProfileData(lang: Language = "en"): Profile {
  return lang === "id" ? profileDataId : profileDataEn;
}
