import { Profile, Language } from "@/types";

export const profileDataEn: Profile = {
  name: "Muhammad Nuaina Yasin",
  role: "Full-Stack Developer · Computer Vision",
  eyebrow: "SOFTWARE ENGINEER",
  tagline: "Architecting ideas building digital solutions through technology.",
  headline: "Full-Stack Developer & Computer Vision Researcher from Bandung, Indonesia.",
  shortBio:
    "Informatics Engineering graduate from Universitas Komputer Indonesia (UNIKOM) combining full-stack software engineering and deep learning research (offline handwriting recognition) to build reliable, user-focused digital systems.",
  fullBio: [
    "I am an Informatics Engineering graduate from Universitas Komputer Indonesia (UNIKOM), Bandung. My background combines software engineering fundamentals with applied artificial intelligence research.",
    "In web engineering, I build production web applications with Next.js, TypeScript, and modern database architectures, emphasizing clean architecture, defensive security, and responsive craft.",
    "In machine learning and computer vision, I research deep learning architectures, specifically sequential handwriting text recognition using CNN-BiLSTM-CTC models implemented in PyTorch.",
    "I believe technology should solve tangible operational problems while maintaining high usability, speed, and clean code architecture."
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
    { label: "Degree", value: "S1 Teknik Informatika" },
    { label: "Graduation", value: "2026" },
    { label: "Certification", value: "BNSP Software Eng." },
    { label: "Location", value: "Bandung, Indonesia" },
  ],
};

export const profileDataId: Profile = {
  name: "Muhammad Nuaina Yasin",
  role: "Full-Stack Developer · Computer Vision",
  eyebrow: "SOFTWARE ENGINEER",
  tagline: "Merancang ide membangun solusi digital melalui teknologi.",
  headline: "Full-Stack Developer & Periset Computer Vision asal Bandung, Indonesia.",
  shortBio:
    "Lulusan S1 Teknik Informatika Universitas Komputer Indonesia (UNIKOM) yang memadukan rekayasa perangkat lunak full-stack dan riset deep learning (pengenalan tulisan tangan) untuk membangun sistem digital yang andal dan berorientasi pengguna.",
  fullBio: [
    "Saya adalah lulusan S1 Teknik Informatika dari Universitas Komputer Indonesia (UNIKOM), Bandung. Latar belakang saya memadukan fundamental rekayasa perangkat lunak dengan riset kecerdasan buatan terapan.",
    "Dalam rekayasa web, saya membangun aplikasi full-stack yang andal dengan Next.js, TypeScript, dan arsitektur basis data modern, mengutamakan kebersihan kode, keamanan backend, dan ketelitian antarmuka editorial.",
    "Di bidang machine learning dan computer vision, saya meneliti arsitektur deep learning, khususnya pengenalan teks tulisan tangan sekuensial menggunakan arsitektur CNN-BiLSTM-CTC berbasis PyTorch.",
    "Saya meyakini bahwa teknologi harus memecahkan hambatan operasional nyata sembari mempertahankan kemudahan penggunaan, kecepatan, dan arsitektur kode yang terstruktur."
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
    { label: "Gelar", value: "S1 Teknik Informatika" },
    { label: "Kelulusan", value: "2026" },
    { label: "Sertifikasi", value: "BNSP Software Eng." },
    { label: "Lokasi", value: "Bandung, Indonesia" },
  ],
};

export const profileData = profileDataEn;

export function getProfileData(lang: Language = "en"): Profile {
  return lang === "id" ? profileDataId : profileDataEn;
}
