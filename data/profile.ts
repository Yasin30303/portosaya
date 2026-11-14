import { Profile, Language } from "@/types";

export const profileDataEn: Profile = {
  name: "Muhammad Nuaina Yasin",
  role: "Full-Stack Developer & AI Enthusiast",
  eyebrow: "SOFTWARE ENGINEER",
  tagline: "Architecting ideas building digital solutions through technology.",
  headline: "Combining software engineering and applied artificial intelligence to build functional, relevant, user-focused digital solutions.",
  shortBio:
    "Informatics Engineering graduate from Universitas Komputer Indonesia (UNIKOM) combining full-stack software engineering and computer vision exploration (image-based text recognition) to deliver functional, relevant, user-focused digital solutions.",
  fullBio: [
    "I am an Informatics Engineering graduate from Universitas Komputer Indonesia (UNIKOM), Bandung. My background combines software engineering fundamentals with applied artificial intelligence research.",
    "In web engineering, I build fault-tolerant full-stack applications with Next.js, TypeScript, and modern database architectures, emphasizing clean architecture, security, and responsive editorial craft.",
    "In machine learning and computer vision, I explore deep learning architectures, specifically sequential handwriting text recognition using CNN-BiLSTM-CTC models implemented in PyTorch.",
    "I believe technology should solve tangible operational problems while maintaining high usability, speed, and clean code architecture."
  ],
  location: "Kota Bandung, Jawa Barat, Indonesia",
  email: "ynuaina@gmail.com",
  phone: "+62 857 8432 9405",
  github: "https://github.com/Yasin30303",
  linkedin: "https://linkedin.com/in/",
  cvPath: "/documents/cv.pdf",
  availability: {
    status: "available",
    label: "Available for new projects & opportunities",
  },
  stats: [
    { label: "Degree", value: "S1 Teknik Informatika" },
    { label: "Graduation", value: "2026 (4 Years)" },
    { label: "Certification", value: "BNSP Software Eng." },
    { label: "Location", value: "Bandung, Indonesia" },
  ],
};

export const profileDataId: Profile = {
  name: "Muhammad Nuaina Yasin",
  role: "Pengembang Full-Stack & Praktisi AI",
  eyebrow: "SOFTWARE ENGINEER",
  tagline: "Merancang ide membangun solusi digital melalui teknologi.",
  headline: "Menggabungkan rekayasa perangkat lunak dan eksplorasi kecerdasan buatan untuk menghadirkan solusi digital yang fungsional, relevan, dan berorientasi pada pengguna.",
  shortBio:
    "Lulusan Teknik Informatika Universitas Komputer Indonesia (UNIKOM) yang menggabungkan rekayasa perangkat lunak full-stack dan eksplorasi computer vision (pengenalan teks berbasis citra) untuk menghadirkan solusi digital yang fungsional, relevan, dan berorientasi pada pengguna.",
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
  linkedin: "https://linkedin.com/in/",
  cvPath: "/documents/cv.pdf",
  availability: {
    status: "available",
    label: "Terbuka untuk proyek baru & peluang kerja",
  },
  stats: [
    { label: "Gelar", value: "S1 Teknik Informatika" },
    { label: "Kelulusan", value: "2026 (4 Tahun)" },
    { label: "Sertifikasi", value: "BNSP Software Eng." },
    { label: "Lokasi", value: "Bandung, Indonesia" },
  ],
};

export const profileData = profileDataEn;

export function getProfileData(lang: Language = "en"): Profile {
  return lang === "id" ? profileDataId : profileDataEn;
}
