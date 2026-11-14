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
      eyebrow: "MUHAMMAD NUAINA YASIN — FULL-STACK WEB DEV",
      kicker: "Software Engineer / Bandung, ID",
      headline: "ARCHITECTING IDEAS BUILDING DIGITAL SOLUTIONS THROUGH TECHNOLOGY.",
      headlineStart: "Architecting ideas building digital solutions through",
      code: "code",
      headlineEnd: "and technology.",
      ctaProjects: "View Selected Work",
      ctaContact: "Direct Contact",
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
      eyebrow: "BACKGROUND",
      title: "A little about what I do.",
      description: "Bridging software engineering discipline with applied artificial intelligence to build practical solutions.",
      pillar1Title: "Full-Stack Web Engineering",
      pillar1Desc: "Designing scalable, maintainable web systems with Next.js, TypeScript, and transactional databases with emphasis on data integrity.",
      pillar2Title: "AI & Computer Vision",
      pillar2Desc: "Translating theoretical neural network research into practical applications, focusing on sequence modeling with CNN-BiLSTM-CTC.",
      pillar3Title: "Security & Hardening",
      pillar3Desc: "Practicing defensive web engineering: server core maintenance, malicious SEO injection remediation, and performance optimization for production.",
    },
    projects: {
      index: "02 //",
      eyebrow: "SELECTED WORK",
      title: "Engineered solutions & research.",
      description: "A collection of web systems and deep learning research projects built with rigorous technical discipline.",
      readCaseStudy: "Read Case Study",
      viewDemo: "Live Demo",
      viewRepo: "Repository",
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
      eyebrow: "TECHNICAL COMPETENCIES",
      title: "Tools I work with.",
      description: "A specialized technical toolkit centered on modern full-stack web architectures and deep learning computer vision.",
      evidence1: "Production-Grade Client Web",
      evidence2: "ACID Transactions & Schemas",
      evidence3: "Validated PyTorch Pipelines",
      evidence4: "BNSP Certified Standards",
    },
    experience: {
      index: "04 //",
      eyebrow: "CAREER & EDUCATION",
      title: "Experience & background.",
      description: "Formal university training and verified commercial software engineering experience.",
    },
    contact: {
      index: "05 //",
      eyebrow: "DIRECT COMMUNICATION",
      title: "Let's build something meaningful.",
      description: "I'm always interested in connecting with engineers, exploring new technical challenges, and collaborating on high-impact digital products.",
      statusText: "Currently based in Bandung / Open to remote & on-site roles",
      primaryChannel: "PRIMARY COMMUNICATION CHANNEL",
      copyEmail: "COPY",
      copiedEmail: "COPIED",
      sendEmail: "Send Direct Email",
      githubProfile: "GitHub Profile",
      locationLabel: "LOCATION",
      phoneLabel: "PHONE / WHATSAPP",
      phoneAction: "Direct WA",
      waMessage: "Hi Yasin, I'm reaching out through your portfolio to discuss a project / work opportunity.",
    },
    footer: {
      navigation: "NAVIGATION",
      channels: "CHANNELS",
      city: "Bandung, Indonesia (UTC+7)",
      top: "TOP",
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
      eyebrow: "MUHAMMAD NUAINA YASIN — FULL-STACK WEB DEV",
      kicker: "Software Engineer / Bandung, ID",
      headline: "MERANCANG IDE MEMBANGUN SOLUSI DIGITAL MELALUI TEKNOLOGI.",
      headlineStart: "Merancang ide, membangun solusi digital melalui",
      code: "kode",
      headlineEnd: "dan teknologi.",
      ctaProjects: "Lihat Proyek Pilihan",
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
      eyebrow: "LATAR BELAKANG",
      title: "Sekilas tentang apa yang saya kerjakan.",
      description: "Menjembatani disiplin rekayasa perangkat lunak dengan kecerdasan buatan terapan untuk menghasilkan solusi nyata.",
      pillar1Title: "Rekayasa Web Full-Stack",
      pillar1Desc: "Merancang sistem web yang scalable dan mudah dipelihara menggunakan Next.js, TypeScript, dan basis data relasional dengan integritas data tinggi.",
      pillar2Title: "AI & Computer Vision",
      pillar2Desc: "Menerjemahkan riset teoritis jaringan saraf menjadi aplikasi praktis, berfokus pada pemodelan sekuensial dengan CNN-BiLSTM-CTC.",
      pillar3Title: "Keamanan & Penguatan Sistem",
      pillar3Desc: "Menerapkan prinsip rekayasa web defensif: pemeliharaan core server, remediasi injeksi SEO berbahaya, dan optimasi performa produksi.",
    },
    projects: {
      index: "02 //",
      eyebrow: "HASIL KERJA",
      title: "Solusi rekayasa & penelitian.",
      description: "Koleksi sistem web dan riset deep learning yang dibangun dengan ketelitian teknis tinggi.",
      readCaseStudy: "Baca Studi Kasus",
      viewDemo: "Situs Langsung",
      viewRepo: "Repositori",
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
      eyebrow: "KOMPETENSI TEKNIS",
      title: "Alat & teknologi yang saya gunakan.",
      description: "Peralatan teknis terfokus pada arsitektur web modern full-stack dan riset visi komputer deep learning.",
      evidence1: "Web Klien Tingkat Produksi",
      evidence2: "Transaksi ACID & Skema Database",
      evidence3: "Pipeline PyTorch Terverifikasi",
      evidence4: "Standar Sertifikasi BNSP",
    },
    experience: {
      index: "04 //",
      eyebrow: "KARIER & PENDIDIKAN",
      title: "Pengalaman & rekam jejak.",
      description: "Pendidikan universitas formal dan pengalaman rekayasa perangkat lunak komersial terverifikasi.",
    },
    contact: {
      index: "05 //",
      eyebrow: "KOMUNIKASI LANGSUNG",
      title: "Mari membangun sesuatu yang bermakna.",
      description: "Saya selalu tertarik untuk terhubung dengan para engineer, mendiskusikan tantangan teknis baru, dan berkolaborasi dalam proyek digital berkualitas.",
      statusText: "Saat ini berdomisili di Bandung / Terbuka untuk kerja remote maupun on-site",
      primaryChannel: "SALURAN KOMUNIKASI UTAMA",
      copyEmail: "SALIN",
      copiedEmail: "TERSALIN",
      sendEmail: "Kirim Email Langsung",
      githubProfile: "Profil GitHub",
      locationLabel: "LOKASI",
      phoneLabel: "TELEPON / WHATSAPP",
      phoneAction: "Direct WA",
      waMessage: "Halo Yasin, saya menghubungi melalui portfolio Anda untuk mendiskusikan proyek / peluang kerja.",
    },
    footer: {
      navigation: "NAVIGASI",
      channels: "SALURAN",
      city: "Bandung, Indonesia (UTC+7)",
      top: "ATAS",
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

