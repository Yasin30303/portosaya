import { Language } from "@/types";

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
    cv: string;
  };
  hero: {
    eyebrow: string;
    kicker: string;
    headline: string;
    headlineStart: string;
    code: string;
    headlineEnd: string;
    ctaProjects: string;
    ctaContact: string;
    ctaCv: string;
    technicalFocus: string;
    focusList: string;
    focusPills: string[];
    statsDegree: string;
    statsGraduation: string;
    statsCertification: string;
    statsLocation: string;
  };
  about: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  projects: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    readCaseStudy: string;
    viewDemo: string;
    viewRepo: string;
    breadcrumbRoot: string;
    role: string;
    timeline: string;
    context: string;
    status: string;
    problemTitle: string;
    solutionTitle: string;
    lessonsTitle: string;
    navAll: string;
    navPrev: string;
    navNext: string;
    navFirst: string;
    navEnd: string;
  };
  skills: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    evidence1: string;
    evidence2: string;
    evidence3: string;
    evidence4: string;
  };
  experience: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    index: string;
    eyebrow: string;
    title: string;
    description: string;
    statusText: string;
    primaryChannel: string;
    copyEmail: string;
    copiedEmail: string;
    sendEmail: string;
    githubProfile: string;
    locationLabel: string;
    phoneLabel: string;
    phoneAction: string;
    waMessage: string;
  };
  footer: {
    navigation: string;
    channels: string;
    city: string;
    top: string;
    rights: string;
  };
  notFound: {
    errorTag: string;
    title: string;
    description: string;
    btnHome: string;
    btnProjects: string;
  };
  langToggle: {
    ariaLabel: string;
    title: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      cv: "CV (PDF)",
    },
    hero: {
      eyebrow: "MUHAMMAD NUAINA YASIN / SOFTWARE ENGINEER",
      kicker: "Software Engineer / Bandung, ID",
      headline: "ENGINEERING FULL-STACK WEB & DEEP LEARNING SYSTEMS.",
      headlineStart: "Building production web applications and",
      code: "neural networks",
      headlineEnd: "with measured precision.",
      ctaProjects: "View Projects",
      ctaContact: "Contact Directly",
      ctaCv: "CV (PDF)",
      technicalFocus: "TECHNICAL FOCUS",
      focusList: "Full-Stack Web · Deep Learning HTR · Decision Support Systems",
      focusPills: ["Full-Stack Web", "Deep Learning HTR", "Decision Support Systems"],
      statsDegree: "Degree",
      statsGraduation: "Graduation",
      statsCertification: "Certification",
      statsLocation: "Location",
    },
    about: {
      index: "01 //",
      eyebrow: "ABOUT",
      title: "Engineering Discipline & Applied ML.",
      description: "Software engineering foundations paired with verifiable neural network research.",
      pillar1Title: "Full-Stack Web Engineering",
      pillar1Desc: "Transactional systems with Next.js App Router, TypeScript, and relational SQL schemas.",
      pillar2Title: "AI & Computer Vision",
      pillar2Desc: "End-to-end PyTorch deep learning pipelines: CNN-BiLSTM-CTC for sequential text recognition.",
      pillar3Title: "Security & Hardening",
      pillar3Desc: "Linux server hardening, malware decontamination, execution barriers, and technical SEO.",
    },
    projects: {
      index: "02 //",
      eyebrow: "WORK",
      title: "Selected Projects & Research.",
      description: "Production web systems, server security incident response, and deep learning models with measured benchmarks.",
      readCaseStudy: "Case Study",
      viewDemo: "Live Site",
      viewRepo: "Source Code",
      breadcrumbRoot: "PROJECTS",
      role: "ROLE",
      timeline: "TIMELINE",
      context: "CLIENT / CONTEXT",
      status: "STATUS",
      problemTitle: "THE PROBLEM",
      solutionTitle: "THE ARCHITECTED SOLUTION",
      lessonsTitle: "ENGINEERING LESSONS & TRADE-OFFS",
      navAll: "ALL PROJECTS",
      navPrev: "PREVIOUS PROJECT",
      navNext: "NEXT PROJECT",
      navFirst: "First Project",
      navEnd: "End of Projects",
    },
    skills: {
      index: "03 //",
      eyebrow: "TOOLKIT",
      title: "Core Stack & Technologies.",
      description: "Production-tested languages, frameworks, and deployment environments.",
      evidence1: "Production Web Deployments",
      evidence2: "ACID & Relational Schemas",
      evidence3: "PyTorch CER 12.4% / WER 24.8%",
      evidence4: "BNSP Certified Standards",
    },
    experience: {
      index: "04 //",
      eyebrow: "TIMELINE",
      title: "Experience & Credentials.",
      description: "Commercial software engineering, academic milestones, and national certification.",
    },
    contact: {
      index: "05 //",
      eyebrow: "CONTACT",
      title: "Let's discuss a technical role or project.",
      description: "Available for Junior Full-Stack and Machine Learning positions, contracts, and technical collaborations.",
      statusText: "Bandung, Indonesia (UTC+7) · Open to Remote & Hybrid",
      primaryChannel: "DIRECT INQUIRIES",
      copyEmail: "COPY",
      copiedEmail: "COPIED",
      sendEmail: "Send Email",
      githubProfile: "GitHub Profile",
      locationLabel: "LOCATION",
      phoneLabel: "PHONE / WHATSAPP",
      phoneAction: "WhatsApp",
      waMessage: "Hello Yasin, I reviewed your portfolio and would like to discuss a work opportunity.",
    },
    footer: {
      navigation: "NAVIGATION",
      channels: "CHANNELS",
      city: "Bandung, Indonesia (UTC+7)",
      top: "BACK TO TOP",
      rights: "All rights reserved.",
    },
    notFound: {
      errorTag: "ERROR 404 // ROUTE_NOT_FOUND",
      title: "Page Not Located",
      description: "The requested route does not exist or has been relocated. Return to the main portfolio or review engineering projects.",
      btnHome: "Return to Homepage",
      btnProjects: "View Projects",
    },
    langToggle: {
      ariaLabel: "Ganti bahasa ke Bahasa Indonesia",
      title: "Switch to Bahasa Indonesia",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      skills: "Keahlian",
      experience: "Pengalaman",
      contact: "Kontak",
      cv: "CV (PDF)",
    },
    hero: {
      eyebrow: "MUHAMMAD NUAINA YASIN / SOFTWARE ENGINEER",
      kicker: "Software Engineer / Bandung, ID",
      headline: "REKAYASA WEB FULL-STACK & RISET DEEP LEARNING.",
      headlineStart: "Membangun aplikasi web produksi dan",
      code: "jaringan saraf",
      headlineEnd: "dengan presisi terukur.",
      ctaProjects: "Lihat Proyek",
      ctaContact: "Hubungi Langsung",
      ctaCv: "CV (PDF)",
      technicalFocus: "FOKUS TEKNIS",
      focusList: "Web Full-Stack · Deep Learning HTR · Sistem Pendukung Keputusan",
      focusPills: ["Web Full-Stack", "Deep Learning HTR", "Sistem Pendukung Keputusan"],
      statsDegree: "Gelar",
      statsGraduation: "Kelulusan",
      statsCertification: "Sertifikasi",
      statsLocation: "Lokasi",
    },
    about: {
      index: "01 //",
      eyebrow: "TENTANG",
      title: "Disiplin Rekayasa & Machine Learning Terapan.",
      description: "Pondasi rekayasa software teruji dipadukan dengan riset jaringan saraf terukur.",
      pillar1Title: "Rekayasa Web Full-Stack",
      pillar1Desc: "Sistem transaksional dengan Next.js App Router, TypeScript, dan skema SQL relasional.",
      pillar2Title: "AI & Computer Vision",
      pillar2Desc: "Pipeline PyTorch deep learning: CNN-BiLSTM-CTC untuk pengenalan teks sekuensial.",
      pillar3Title: "Keamanan & Penguatan Sistem",
      pillar3Desc: "Penguatan server Linux, pembersihan backdoor, proteksi eksekusi .htaccess, dan technical SEO.",
    },
    projects: {
      index: "02 //",
      eyebrow: "PROYEK",
      title: "Proyek Rekayasa & Riset Pilihan.",
      description: "Sistem web produksi, respons insiden keamanan server, dan model deep learning dengan metrik teruji.",
      readCaseStudy: "Studi Kasus",
      viewDemo: "Situs Langsung",
      viewRepo: "Kode Sumber",
      breadcrumbRoot: "PROYEK",
      role: "PERAN",
      timeline: "RENTANG WAKTU",
      context: "KLIEN / KONTEKS",
      status: "STATUS",
      problemTitle: "TANTANGAN & MASALAH",
      solutionTitle: "SOLUSI REKAYASA SISTEM",
      lessonsTitle: "PELAJARAN TEKNIS & KOMPROMI DESAIN",
      navAll: "SEMUA PROYEK",
      navPrev: "PROYEK SEBELUMNYA",
      navNext: "PROYEK SELANJUTNYA",
      navFirst: "Proyek Pertama",
      navEnd: "Akhir Daftar Proyek",
    },
    skills: {
      index: "03 //",
      eyebrow: "KEAHLIAN",
      title: "Alat & Teknologi Utama.",
      description: "Teknologi yang diterapkan pada implementasi produksi dan tolok ukur machine learning.",
      evidence1: "Implementasi Web Produksi",
      evidence2: "Skema Relasional & ACID",
      evidence3: "PyTorch CER 12.4% / WER 24.8%",
      evidence4: "Standar Sertifikasi BNSP",
    },
    experience: {
      index: "04 //",
      eyebrow: "REKAM JEJAK",
      title: "Pengalaman & Kredensial.",
      description: "Rekayasa perangkat lunak komersial, pencapaian akademik, dan sertifikasi nasional.",
    },
    contact: {
      index: "05 //",
      eyebrow: "KONTAK",
      title: "Mari diskusikan peluang kerja atau proyek.",
      description: "Terbuka untuk posisi Junior Full-Stack, Machine Learning, proyek kontrak, dan kolaborasi teknis.",
      statusText: "Bandung, Indonesia (UTC+7) · Terbuka Remote & Hybrid",
      primaryChannel: "SALURAN UTAMA",
      copyEmail: "SALIN",
      copiedEmail: "TERSALIN",
      sendEmail: "Kirim Email",
      githubProfile: "Profil GitHub",
      locationLabel: "LOKASI",
      phoneLabel: "TELEPON / WHATSAPP",
      phoneAction: "WhatsApp",
      waMessage: "Halo Yasin, saya melihat portfolio Anda dan ingin mendiskusikan peluang kerja.",
    },
    footer: {
      navigation: "NAVIGASI",
      channels: "SALURAN",
      city: "Bandung, Indonesia (UTC+7)",
      top: "KEMBALI KE ATAS",
      rights: "Hak cipta dilindungi undang-undang.",
    },
    notFound: {
      errorTag: "ERROR 404 // ROUTE_NOT_FOUND",
      title: "Halaman Tidak Ditemukan",
      description: "Rute yang diminta tidak ada atau telah dipindahkan. Kembali ke beranda portfolio atau tinjau proyek rekayasa.",
      btnHome: "Kembali ke Beranda",
      btnProjects: "Lihat Proyek",
    },
    langToggle: {
      ariaLabel: "Switch language to English",
      title: "Switch to English",
    },
  },
};

