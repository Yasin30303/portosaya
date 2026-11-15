import { Project, Language } from "@/types";

export const projectsDataEn: Project[] = [
  {
    slug: "jawara-tiga-sekawan",
    title: "PT. Jawara Tiga Sekawan: Corporate Web & Security Hardening",
    category: "Web Engineering & Security",
    categoryLabel: "CORPORATE WEB / SECURITY & OPTIMIZATION",
    description:
      "Modern corporate website redesign, high-converting parallax landing page, and backend security remediation for PT. Jawara Tiga Sekawan.",
    overview:
      "Spearheaded the redesign and production overhaul of the official corporate web platform for PT. Jawara Tiga Sekawan. Engineered high-performance responsive landing pages with fluid parallax interactions while executing critical backend security remediation to remove SEO spam injections and restore clean search indexing.",
    coverImage: "/images/projects/jawaratigasekawan.png",
    technologies: [
      "Web Engineering",
      "PHP 8.5",
      "Security Hardening",
      "Technical SEO",
      "Parallax Interactions",
      "Performance Optimization"
    ],
    featured: true,
    status: "Live in Production",
    links: {
      demo: "https://jawaratigasekawan.com",
    },
    metadata: {
      role: "Website Developer & Security Engineer",
      duration: "Oktober 2026 - Present",
      client: "PT. Jawara Tiga Sekawan",
    },
    problemStatement:
      "The corporate web platform suffered from outdated visual architecture, slow load times, and a critical backend security compromise: malicious automated scripts had injected hidden SEO spam and deceptive captcha redirects, severely corrupting Google Search indexing and client trust.",
    solution:
      "Executed an end-to-end security audit and visual overhaul: systematically purged obfuscated malware files and backdoor scripts, upgraded the environment to PHP 8.5, rebuilt the frontend with an editorial corporate design and fluid parallax storytelling, and submitted clean sitemaps for Google Search Console re-indexing.",
    technicalArchitecture:
      "Optimized PHP 8.5 runtime with server-level access restrictions and directory execution barriers. Semantic HTML5/CSS3 frontend architecture featuring responsive parallax scrolling without heavy bloated frameworks. Integrated automated file-integrity monitoring and technical SEO schema markup.",
    sections: [
      {
        heading: "01. Security Audit & SEO Malware Remediation",
        content:
          "The immediate priority was mitigating a stealthy backend exploit that was injecting foreign spam keywords and fake captcha redirects into dynamic request headers. A comprehensive file diffing process identified unauthorized scripts hidden in nested directory structures.",
        bulletPoints: [
          "Identified and purged obfuscated PHP backdoors and unauthorized cron injections.",
          "Implemented strict .htaccess directory execution blocks preventing script uploads.",
          "Submitted clean XML sitemaps and disavow declarations in Google Search Console to restore search reputation."
        ],
      },
      {
        heading: "02. Editorial Design & Parallax Architecture",
        content:
          "With the backend secured, the user interface was reimagined with a high-craft corporate aesthetic. The new layout balances clean typographic hierarchy, high-contrast imagery, and fluid parallax scroll storytelling to communicate company credibility to prospective B2B clients.",
        bulletPoints: [
          "Developed fluid responsive grid with intentional whitespace and clean content sections.",
          "Engineered lightweight, hardware-accelerated parallax motion for smooth visual depth.",
          "Optimized high-resolution marketing assets to maintain swift sub-second page loads."
        ],
      },
      {
        heading: "03. PHP 8.5 Runtime Migration & Performance Tuning",
        content:
          "Upgraded legacy server execution scripts to PHP 8.5, achieving substantial engine optimizations and JIT compilation improvements. Server response times and resource utilization were drastically improved across concurrent visits.",
        bulletPoints: [
          "Migrated deprecated functions to strict PHP 8.5 syntax standards.",
          "Configured server caching and asset minification for minimal latency.",
          "Strengthened SSL/TLS headers, Content Security Policy, and HTTP security headers."
        ],
      },
      {
        heading: "04. Measurable Outcomes & Ongoing Maintenance",
        content:
          "The combination of security hardening and modern web engineering completely rehabilitated the company's digital footprint. The website now delivers a secure, lightning-fast experience with fully restored search visibility.",
        bulletPoints: [
          "100% elimination of SEO spam flags and successful clean re-indexing in search engines.",
          "Enhanced brand prestige and partner trust with modern visual presentation.",
          "Established automated integrity scanning protocols for persistent security compliance."
        ],
      },
    ],
    gallery: [
      {
        url: "/images/projects/jawaratigasekawan.png",
        caption: "PT. Jawara Tiga Sekawan: Live Corporate Website & Interactive Parallax Showcase",
        alt: "PT. Jawara Tiga Sekawan Website Preview",
      },
    ],
    challengesAndLessons: [
      "Investigating deeply nested and base64-obfuscated malware payloads reinforced the necessity of defense-in-depth and strict file permissions.",
      "Achieving fluid parallax motion without triggering layout shifts required strict CSS will-change properties and GPU composite layers.",
      "Navigating search engine re-indexing proved that proactive technical SEO monitoring is as critical as aesthetic engineering."
    ],
  },
  {
    slug: "xena-tekno",
    title: "CV. XENA TEKNO: IT Solution Company Profile",
    category: "Frontend & Web Development",
    categoryLabel: "COMPANY PROFILE / FRONTEND ARCHITECTURE",
    description:
      "A responsive, modern company profile website engineered for an IT solutions firm to showcase software services and digital capabilities.",
    overview:
      "Developed the official digital presence for CV. XENA TEKNO, an information technology consulting and solutions company. Created an accessible, responsive website architecture showcasing enterprise software development services, project workflows, and team competencies to prospective clients.",
    coverImage: "/images/projects/xenatekno.png",
    technologies: [
      "React",
      "Next.js / Vercel",
      "Tailwind CSS",
      "Responsive Layouts",
      "Information Architecture",
      "Accessible Navigation"
    ],
    featured: true,
    status: "Live in Production",
    links: {
      demo: "https://xenatekn0.vercel.app",
    },
    metadata: {
      role: "Website Developer (Internship)",
      duration: "Agustus 2025 - Oktober 2025",
      client: "CV. XENA TEKNO",
    },
    problemStatement:
      "As a growing technology solutions provider, CV. XENA TEKNO needed an authoritative digital platform that clearly communicated their technical services, demonstrated software competency, and streamlined client project inquiries.",
    solution:
      "Architected and deployed a sleek, modern company profile website hosted on Vercel's global edge network. Structured transparent service matrices, technical capability showcases, and frictionless communication channels optimized across all device viewports.",
    technicalArchitecture:
      "Component-driven frontend architecture utilizing modern React and Tailwind CSS. Deployed on Vercel's Edge CDN for rapid asset delivery, automated HTTPS, and continuous integration deployments on Git updates.",
    sections: [
      {
        heading: "01. Strategic Information Architecture",
        content:
          "Collaborated closely with internal teams to translate complex technical offerings (such as custom software development, IT consulting, and infrastructure setup) into clear, digestable service tiers for prospective commercial partners.",
        bulletPoints: [
          "Structured intuitive navigation menus separating service lines, case studies, and corporate background.",
          "Designed clear call-to-actions (CTAs) directing potential clients toward direct consultation channels.",
          "Standardized brand messaging and typography across all informational sections."
        ],
      },
      {
        heading: "02. Responsive & Component-Driven UI",
        content:
          "Built a structured component hierarchy using modern utility-first CSS. Every visual element, from service cards to interactive client contact forms, was engineered with mobile-first responsiveness in mind.",
        bulletPoints: [
          "Developed modular layout components allowing direct updates to team and service listings.",
          "Fine-tuned touch targets and responsive breakpoints for smooth mobile and tablet browsing.",
          "Applied accessible contrast ratios and semantic HTML landmark tags."
        ],
      },
      {
        heading: "03. Edge Deployment & Production Delivery",
        content:
          "Deployed the production build on Vercel's Edge network, ensuring near-instant page loading for visitors across Indonesia with zero infrastructure maintenance overhead.",
        bulletPoints: [
          "Configured continuous deployment pipeline connected to version control repository.",
          "Optimized static asset bundles for minimal payload size and lightning-fast Time-to-Interactive (TTI).",
          "Conducted cross-browser audits across modern Chromium, Safari, and Firefox engines."
        ],
      },
      {
        heading: "04. Key Takeaways & Commercial Experience",
        content:
          "Serving as an active contributor in a commercial IT consulting environment provided invaluable experience in aligning client expectations, translating design feedback, and shipping production-grade code on schedule.",
        bulletPoints: [
          "Mastered practical client communication and sprint-based deliverable handoffs.",
          "Strengthened proficiency in production-ready frontend workflows and edge hosting platforms.",
          "Delivered a tangible, live digital asset that active clients interact with daily."
        ],
      },
    ],
    gallery: [
      {
        url: "/images/projects/xenatekno.png",
        caption: "CV. XENA TEKNO: Official Live Web Presence on Vercel Edge Network",
        alt: "CV XENA TEKNO Website Preview",
      },
    ],
    challengesAndLessons: [
      "Distilling technical enterprise service offerings into direct, structured copy that communicates clearly with business and engineering stakeholders.",
      "Eliminating cumulative layout shifts (CLS) on dynamic image loads through explicit aspect-ratio containers.",
      "Understanding the practical cadence of professional software development within a commercial consulting team."
    ],
  },
  {
    slug: "inventory-cashier-dss",
    title: "Inventory & Cashier Decision Support System",
    category: "Full-Stack Development",
    categoryLabel: "FULL-STACK / DECISION SUPPORT",
    description:
      "A web-based inventory, production scheduling, and cashier application with multi-criteria decision support algorithms (SMART & SAW) for operational optimization.",
    overview:
      "Engineered to resolve real-world scheduling bottlenecks and inventory tracking issues in local production business. Combines a transactional point-of-sale and stock management system with automated multi-criteria decision algorithms to prioritize production orders by deadline and machine capacity.",
    coverImage: "/images/projects/inventory-dss.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "Supabase",
      "SMART Algorithm",
      "SAW Method"
    ],
    featured: true,
    status: "Completed & Deployed",
    links: {
      github: "https://github.com/Yasin30303",
    },
    metadata: {
      role: "Full-Stack Developer",
      duration: "4 Months",
      client: "CV. Trust Lafalo",
    },
    problemStatement:
      "Small-scale manufacturing businesses and local culinary ventures struggle with manual production scheduling, uncoordinated machine allocation, and stock discrepancies. Without systematic prioritization, high-urgency customer orders frequently experience delays and machine idle times.",
    solution:
      "Developed a modern web application integrating automated order prioritization using the Simple Additive Weighting (SAW) and Simple Multi-Attribute Rating Technique (SMART). The system calculates priority weights based on order volume, customer deadlines, and machine capacity slots, rendering an interactive visual production calendar.",
    technicalArchitecture:
      "Built with Next.js App Router for server-side rendering, paired with Supabase PostgreSQL for ACID-compliant transactional consistency. Prisma ORM guarantees type safety across database operations. The prioritization engine runs deterministic multi-attribute calculations on the backend prior to schedule slot allocation.",
    sections: [
      {
        heading: "01. Business Context & Challenge",
        content:
          "Managing dynamic customer orders with varying lead times on limited production lines requires continuous coordination. In the previous workflow, scheduling was documented manually on physical logs, leading to priority inversion where urgent orders were pushed back behind bulk standard orders.",
        bulletPoints: [
          "Manual tracking created blind spots in raw material availability.",
          "Conflict between multi-slot press machines and urgent order deadlines.",
          "Lack of unified metrics for order delay rates and fulfillment efficiency."
        ],
      },
      {
        heading: "02. Multi-Criteria Decision Support (SMART & SAW)",
        content:
          "To provide objective scheduling, two proven decision-support algorithms were implemented. The system analyzes criteria including Delivery Lead Time, Order Value, Production Complexity, and Machine Slot Availability. Normalization matrices generate an unambiguous ranking score for queued production batches.",
        bulletPoints: [
          "Simple Additive Weighting (SAW) matrix normalization for linear priority score generation.",
          "Simple Multi-Attribute Rating Technique (SMART) utility scoring for flexible weighting parameters.",
          "Real-time visual schedule timeline with 100% on-time fulfillment indicator."
        ],
      },
      {
        heading: "03. Architecture & Data Consistency",
        content:
          "The system enforces strict inventory reconciliation between cashier transactions and raw material inventories. Database transactions in Prisma ensure that stock levels decrement atomically upon invoice issuance, preventing over-commitment.",
        bulletPoints: [
          "PostgreSQL relational schema managed via Prisma migrations.",
          "Server actions in Next.js handling secure authenticated mutations.",
          "Role-based access control separating production managers and cashier operators."
        ],
      },
      {
        heading: "04. Personal Contribution & Key Takeaways",
        content:
          "Spearheaded the entire lifecycle from field problem analysis, mathematical algorithm formulation, relational database schema design, to the responsive dashboard interface.",
        bulletPoints: [
          "Designed intuitive timeline visualization for production slot allocation.",
          "Eliminated order overlap through deterministic conflict detection.",
          "Strengthened practical understanding of translating operational business requirements into algorithmic software."
        ],
      },
    ],
    gallery: [
      {
        url: "/images/projects/inventory-dss.png",
        caption: "Automated Production Scheduling & Timeline Calendar View with 100% On-Time Performance Tracking",
        alt: "Sistem Penjadwalan CV Trust Lafalo Dashboard",
      },
    ],
    challengesAndLessons: [
      "Handling dynamic schedule adjustments when machines undergo ad-hoc maintenance required graceful recalculation of subsequent slot queues.",
      "Keeping user interfaces dead-simple was vital for shop-floor operators without deep technical training.",
      "Enforcing strict database constraints at the ORM level prevented race conditions in inventory depletion."
    ],
  },
  {
    slug: "indonesian-handwriting-ocr",
    title: "Indonesian Handwriting Text Recognition",
    category: "AI & Computer Vision",
    categoryLabel: "DEEP LEARNING / COMPUTER VISION",
    description:
      "An end-to-end deep learning system for recognizing offline handwritten Indonesian words using a sequential CNN-BiLSTM-CTC architecture in PyTorch.",
    overview:
      "Undergraduate research focused on offline handwritten text recognition (HTR). Developed a hybrid deep learning model combining Convolutional Neural Networks for 2D spatial feature extraction, Bidirectional LSTMs for sequential temporal character modeling, and Connectionist Temporal Classification (CTC) for unsegmented sequence decoding.",
    coverImage: "/images/projects/ocr-hero.svg",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "CNN (VGG-style)",
      "BiLSTM",
      "CTC Loss"
    ],
    featured: true,
    status: "Research Completed & Defended",
    links: {
      github: "https://github.com/Yasin30303",
    },
    metadata: {
      role: "Lead Machine Learning Researcher & Author",
      duration: "6 Months",
      client: "Universitas Komputer Indonesia (Skripsi)",
    },
    problemStatement:
      "Handwritten word recognition in the Indonesian language presents significant variance in writing styles, stroke connectivity, slant angles, and spatial ambiguity. Traditional OCR engines tuned for printed Latin fonts fail on handwritten cursive scripts without explicit character segmentation.",
    solution:
      "Designed an end-to-end sequence-to-sequence model that eliminates the need for manual character segmentation. A custom 7-layer CNN extracts translation-invariant feature maps, followed by a multi-layer Bidirectional LSTM network that captures bidirectional linguistic context. CTC decoding transcribes arbitrary-length character sequences directly.",
    technicalArchitecture:
      "Implemented strictly in PyTorch. The data pipeline utilizes OpenCV for adaptive Otsu thresholding, aspect-ratio preserving resizing, and slant correction. The network outputs per-frame character probability distributions fed into CTC Loss during training and greedy CTC decoding during inference.",
    sections: [
      {
        heading: "01. Research Motivation & Domain Context",
        content:
          "Digital archiving of handwritten forms, student examination papers, and administrative manuscripts remains largely manual in Indonesian institutions. Standard OCR models fail when character boundaries touch or overlap.",
        bulletPoints: [
          "Need for reliable Latin-script recognition optimized for diverse Indonesian handwriting variations.",
          "Elimination of brittle pre-segmentation algorithms that degrade on cursive ligatures.",
          "Investigation of the synergy between spatial CNN feature representations and sequential BiLSTM recurrence."
        ],
      },
      {
        heading: "02. Image Preprocessing & Feature Extraction",
        content:
          "Input word images undergo grayscale conversion, noise filtering, and aspect-ratio normalization. A 7-layer convolutional feature extractor with Max-Pooling compresses the height dimension while retaining horizontal sequence fidelity, producing feature vectors aligned with the text reading direction.",
        bulletPoints: [
          "Bilinear padding to fixed dimensions (32 x 128) preserving stroke topology.",
          "Batch Normalization and Leaky ReLU activations to accelerate convergence and prevent vanishing gradients.",
          "Feature slice transposition from (C, H, W) to sequence representations (W, C*H)."
        ],
      },
      {
        heading: "03. BiLSTM Sequence Modeling & CTC Transcription",
        content:
          "The bidirectional recurrent layers process feature vectors both left-to-right and right-to-left. This allows the network to resolve ambiguous characters by examining preceding and following strokes before emitting logits over the 80+ character vocabulary (including blank token).",
        bulletPoints: [
          "2-layer stacked Bidirectional LSTM with 256 hidden units and dropout.",
          "Connectionist Temporal Classification (CTC) loss function handling alignment-free training.",
          "Greedy CTC decoding collapsing repeated characters separated by blank tokens."
        ],
      },
      {
        heading: "04. Experimental Evaluation & Findings",
        content:
          "The model was rigorously validated using Character Error Rate (CER) and Word Error Rate (WER) metrics across diverse test splits. The research highlights the critical importance of stroke width consistency and contrast normalization in achieving reliable transcription.",
        bulletPoints: [
          "Demonstrated high accuracy on isolated cursive and print handwriting samples.",
          "Identified failure modes primarily in extreme vertical slant and degraded ink contrast.",
          "Proved that end-to-end CTC modeling significantly outperforms segmentation-based pipelines."
        ],
      },
    ],
    gallery: [
      {
        url: "/images/projects/ocr-hero.svg",
        caption: "Architectural Pipeline Diagram: Input Image -> CNN Feature Maps -> BiLSTM Sequential Context -> CTC Decoding",
        alt: "CNN-BiLSTM-CTC Pipeline Architecture",
      },
    ],
    challengesAndLessons: [
      "Vanishing gradients during long sequence backpropagation were resolved through residual-style feature concatenation and proper BiLSTM weight initialization.",
      "Variable word aspect ratios required careful padding strategies to prevent spatial distortion of letter stroke morphology.",
      "Honest assessment: model accuracy degrades on low-resolution mobile scans, pointing to super-resolution preprocessing as an important future research vector."
    ],
  },
];

export const projectsDataId: Project[] = [
  {
    slug: "jawara-tiga-sekawan",
    title: "PT. Jawara Tiga Sekawan: Pembaruan Web Korporat & Penguatan Keamanan",
    category: "Rekayasa Web & Keamanan",
    categoryLabel: "WEB KORPORAT / KEAMANAN & OPTIMASI",
    description:
      "Redesain website korporat modern, landing page pemasaran parallax berkonversi tinggi, dan remediasi keamanan backend untuk PT. Jawara Tiga Sekawan.",
    overview:
      "Memimpin perancangan ulang dan perombakan produksi platform web resmi untuk PT. Jawara Tiga Sekawan. Mengembangkan landing page responsif berkinerja tinggi dengan interaksi parallax halus sembari melakukan tindakan remediasi keamanan backend untuk menghapus injeksi spam SEO dan memulihkan pengindeksan pencarian bersih.",
    coverImage: "/images/projects/jawaratigasekawan.png",
    technologies: [
      "Rekayasa Web",
      "PHP 8.5",
      "Penguatan Keamanan",
      "Technical SEO",
      "Interaksi Parallax",
      "Optimasi Performa"
    ],
    featured: true,
    status: "Berjalan di Produksi",
    links: {
      demo: "https://jawaratigasekawan.com",
    },
    metadata: {
      role: "Website Developer & Security Engineer",
      duration: "Oktober 2026 - Sekarang",
      client: "PT. Jawara Tiga Sekawan",
    },
    problemStatement:
      "Platform web korporat sebelumnya mengalami arsitektur visual usang, waktu muat lambat, dan kompromi keamanan backend serius: skrip otomatis berbahaya menyuntikkan spam SEO tersembunyi dan pengalihan captcha palsu, merusak pengindeksan Google Search serta kredibilitas perusahaan.",
    solution:
      "Mengeksekusi audit keamanan menyeluruh dan perombakan visual: membersihkan file malware serta skrip backdoor tersembunyi, meningkatkan lingkungan server ke PHP 8.5, membangun kembali frontend dengan desain korporat editorial dan narasi visual parallax, serta mendaftarkan peta situs bersih untuk re-indeks Google Search Console.",
    technicalArchitecture:
      "Runtime PHP 8.5 yang dioptimalkan dengan pembatasan akses tingkat server dan pencegahan eksekusi direktori upload. Arsitektur frontend semantik HTML5/CSS3 dengan gulir parallax responsif tanpa framework berlebih. Dilengkapi pemantauan integritas file dan schema markup SEO teknis.",
    sections: [
      {
        heading: "01. Audit Keamanan & Remediasi Malware SEO",
        content:
          "Prioritas mendesak adalah menanggulangi celah keamanan backend yang menyuntikkan kata kunci spam asing dan pengalihan captcha palsu ke dalam header respons dinamis. Proses penelusuran diffing file secara menyeluruh mengidentifikasi skrip ilegal yang tersembunyi dalam struktur direktori bertingkat.",
        bulletPoints: [
          "Mengidentifikasi dan membersihkan backdoor PHP yang diobfuskasi serta injeksi cron tidak sah.",
          "Menerapkan aturan blokade eksekusi direktori ketat melalui .htaccess untuk mencegah pengunggahan skrip.",
          "Mendaftarkan sitemap XML bersih dan deklarasi disavow di Google Search Console guna memulihkan reputasi domain."
        ],
      },
      {
        heading: "02. Desain Editorial & Arsitektur Parallax",
        content:
          "Setelah backend diamankan, antarmuka pengguna dirancang ulang dengan estetika korporat modern dan presisi tinggi. Tata letak baru menyeimbangkan hierarki tipografi bersih, citra kontras tinggi, dan narasi gulir parallax yang mulus untuk mengomunikasikan kredibilitas bisnis kepada calon mitra B2B.",
        bulletPoints: [
          "Membangun grid responsif dengan ruang kosong terencana dan tata letak bagian yang rapi.",
          "Merekayasa gerak parallax ringan berakselerasi GPU untuk kedalaman visual yang lancar.",
          "Mengoptimalkan aset grafis resolusi tinggi demi mempertahankan waktu pemuatan cepat di bawah satu detik."
        ],
      },
      {
        heading: "03. Migrasi Runtime PHP 8.5 & Penyetelan Performa",
        content:
          "Memperbarui skrip eksekusi server lama ke PHP 8.5, membuka peningkatan performa kompilasi JIT dan efisiensi engine. Waktu respons server dan utilisasi sumber daya meningkat secara signifikan pada kunjungan bersamaan.",
        bulletPoints: [
          "Memigrasikan fungsi lawas ke standar sintaks ketat PHP 8.5.",
          "Mengonfigurasi caching server dan minifikasi aset untuk latensi minimal.",
          "Memperkuat header keamanan HTTP, Content Security Policy, dan enkripsi SSL/TLS."
        ],
      },
      {
        heading: "04. Dampak Terukur & Pemeliharaan Berkelanjutan",
        content:
          "Kombinasi penguatan keamanan sistem dan rekayasa web modern berhasil memulihkan jejak digital perusahaan sepenuhnya. Website kini menyajikan pengalaman pengguna yang aman, cepat, dan memiliki visibilitas pencarian yang pulih seutuhnya.",
        bulletPoints: [
          "100% bebas dari bendera spam SEO dan sukses terindeks bersih di mesin pencari.",
          "Meningkatkan prestise brand dan kepercayaan mitra bisnis dengan presentasi visual modern.",
          "Menetapkan protokol pemindaian integritas berkala untuk kepatuhan keamanan berkelanjutan."
        ],
      },
    ],
    gallery: [
      {
        url: "/images/projects/jawaratigasekawan.png",
        caption: "PT. Jawara Tiga Sekawan: Website Korporat Langsung & Tampilan Parallax Interaktif",
        alt: "Pratinjau Website PT. Jawara Tiga Sekawan",
      },
    ],
    challengesAndLessons: [
      "Menelusuri muatan malware yang terobfuskasi base64 pada direktori vendor menegaskan pentingnya prinsip pertahanan berlapis (defense-in-depth) dan izin akses file yang ketat.",
      "Menghasilkan gerak parallax yang lancar tanpa pergeseran tata letak (layout shifts) memerlukan properti CSS will-change yang presisi dan lapisan komposit GPU.",
      "Memulihkan reputasi indeks mesin pencari membuktikan bahwa pemantauan SEO teknis proaktif sama pentingnya dengan rekayasa estetika visual."
    ],
  },
  {
    slug: "xena-tekno",
    title: "CV. XENA TEKNO: Profil Perusahaan Solusi IT",
    category: "Frontend & Rekayasa Web",
    categoryLabel: "PROFIL PERUSAHAAN / ARSITEKTUR FRONTEND",
    description:
      "Website profil perusahaan modern dan responsif yang dibangun untuk konsultan solusi IT guna menampilkan layanan perangkat lunak dan kapabilitas digital.",
    overview:
      "Mengembangkan kehadiran digital resmi untuk CV. XENA TEKNO, penyedia konsultasi dan solusi teknologi informasi. Membangun arsitektur website yang aksesibel dan responsif untuk menampilkan layanan rekayasa software korporat, alur kerja proyek, dan kompetensi tim kepada calon klien.",
    coverImage: "/images/projects/xenatekno.png",
    technologies: [
      "React",
      "Next.js / Vercel",
      "Tailwind CSS",
      "Tata Letak Responsif",
      "Arsitektur Informasi",
      "Navigasi Aksesibel"
    ],
    featured: true,
    status: "Berjalan di Produksi",
    links: {
      demo: "https://xenatekn0.vercel.app",
    },
    metadata: {
      role: "Website Developer (Internship)",
      duration: "Agustus 2025 - Oktober 2025",
      client: "CV. XENA TEKNO",
    },
    problemStatement:
      "Sebagai penyedia solusi teknologi yang berkembang, CV. XENA TEKNO membutuhkan platform digital otoritatif yang dengan jelas mengomunikasikan kapabilitas rekayasa software mereka, membangun kredibilitas, dan mempermudah alur konsultasi proyek calon klien.",
    solution:
      "Merancang dan menerapkan website profil perusahaan modern yang di-hosting pada jaringan edge global Vercel. Menyusun matriks layanan yang transparan, etalase kapabilitas teknis, dan saluran komunikasi langsung yang dioptimalkan di semua ukuran layar.",
    technicalArchitecture:
      "Arsitektur frontend modular berbasis komponen menggunakan React dan Tailwind CSS. Diterapkan melalui Edge CDN Vercel untuk pengiriman aset instan, sertifikasi HTTPS otomatis, dan pipeline integrasi berkelanjutan (CI/CD) saat pembaruan Git.",
    sections: [
      {
        heading: "01. Arsitektur Informasi Strategis",
        content:
          "Berkolaborasi erat dengan tim internal untuk menerjemahkan penawaran teknis kompleks (seperti pengembangan perangkat lunak kustom, konsultasi IT, dan infrastruktur sistem) menjadi tingkatan layanan yang jelas dan mudah dipahami oleh pemangku kepentingan bisnis.",
        bulletPoints: [
          "Menyusun menu navigasi intuitif yang memisahkan lini layanan, portofolio proyek, dan profil perusahaan.",
          "Merancang tombol aksi (CTA) jelas yang mengarahkan calon klien menuju konsultasi langsung.",
          "Menstandardisasi identitas pesan brand dan tipografi di seluruh bagian informasi."
        ],
      },
      {
        heading: "02. Antarmuka Berbasis Komponen & Responsif",
        content:
          "Membangun hierarki komponen yang terstruktur menggunakan CSS utility-first. Setiap elemen visual, mulai dari kartu katalog layanan hingga form kontak klien, direkayasa dengan pendekatan mobile-first yang matang.",
        bulletPoints: [
          "Mengembangkan komponen tata letak modular yang memudahkan pembaruan daftar tim dan portofolio layanan.",
          "Menyesuaikan target sentuh dan breakpoint responsif untuk kenyamanan penjelajahan mobile dan tablet.",
          "Menerapkan rasio kontras aksesibel dan tag penanda semantik HTML."
        ],
      },
      {
        heading: "03. Deployment Edge Jaringan Global",
        content:
          "Menerapkan build produksi pada jaringan Edge Vercel, memastikan pemuatan halaman hampir seketika bagi pengunjung di seluruh Indonesia tanpa beban pemeliharaan infrastruktur mandiri.",
        bulletPoints: [
          "Mengonfigurasi alur kerja continuous deployment yang terhubung langsung dengan repositori GitHub.",
          "Mengoptimalkan bundle aset statis untuk ukuran payload minimal dan Time-to-Interactive (TTI) yang kilat.",
          "Melakukan audit kompatibilitas lintas peramban pada engine modern Chromium, Safari, dan Firefox."
        ],
      },
      {
        heading: "04. Pengalaman Rekayasa Komersial",
        content:
          "Berperan sebagai kontributor aktif dalam lingkungan konsultasi IT komersial memberikan pengalaman nyata dalam menyelaraskan kebutuhan klien, mengeksekusi masukan desain, dan merilis kode standar produksi sesuai jadwal sprint.",
        bulletPoints: [
          "Menguasai komunikasi kebutuhan klien dan serah terima deliverable berbasis sprint.",
          "Memperkuat penguasaan alur kerja frontend modern dan platform hosting cloud edge.",
          "Menghasilkan aset digital nyata yang digunakan secara aktif oleh klien dan mitra bisnis."
        ],
      },
    ],
    gallery: [
      {
        url: "/images/projects/xenatekno.png",
        caption: "CV. XENA TEKNO: Kehadiran Web Resmi di Jaringan Edge Vercel",
        alt: "Pratinjau Website CV XENA TEKNO",
      },
    ],
    challengesAndLessons: [
      "Merangkum solusi IT yang beragam menjadi teks informatif yang mudah dicerna oleh klien teknis maupun pengambil keputusan bisnis.",
      "Menghilangkan Cumulative Layout Shift (CLS) saat pemuatan gambar dinamis melalui wadah ber-aspek rasio eksplisit.",
      "Memahami ritme dan standar kedisiplinan pengembangan perangkat lunak profesional dalam tim konsultan teknologi."
    ],
  },
  {
    slug: "inventory-cashier-dss",
    title: "Sistem Penunjang Keputusan Kasir & Inventaris",
    category: "Pengembangan Full-Stack",
    categoryLabel: "FULL-STACK / SISTEM PENDUKUNG KEPUTUSAN",
    description:
      "Aplikasi inventaris, penjadwalan produksi, dan kasir berbasis web dengan algoritma pendukung keputusan multikriteria (SMART & SAW) untuk optimasi operasional.",
    overview:
      "Direkayasa untuk mengatasi kendala antrean penjadwalan dan pelacakan stok pada bisnis manufaktur lokal. Memadukan kasir point-of-sale dan manajemen inventaris dengan algoritma pembobotan otomatis untuk memprioritaskan pesanan produksi berdasarkan tenggat waktu dan kapasitas mesin.",
    coverImage: "/images/projects/inventory-dss.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "Supabase",
      "Algoritma SMART",
      "Metode SAW"
    ],
    featured: true,
    status: "Selesai & Diterapkan",
    links: {
      github: "https://github.com/Yasin30303",
    },
    metadata: {
      role: "Full-Stack Developer",
      duration: "4 Bulan",
      client: "CV. Trust Lafalo",
    },
    problemStatement:
      "Bisnis manufaktur skala menengah dan usaha kuliner lokal menghadapi kendala penjadwalan manual, alokasi mesin yang tidak terkoordinasi, serta selisih stok bahan baku. Tanpa pemeringkatan sistematis, pesanan mendesak kerap tertunda dan mesin mengalami waktu menganggur (idle time).",
    solution:
      "Mengembangkan aplikasi web modern yang mengintegrasikan pemeringkatan otomatis menggunakan Simple Additive Weighting (SAW) dan Simple Multi-Attribute Rating Technique (SMART). Sistem menghitung bobot prioritas berdasarkan volume order, tenggat pelanggan, dan slot mesin, menyajikannya dalam kalender produksi interaktif.",
    technicalArchitecture:
      "Dibangun dengan Next.js App Router untuk rendering sisi server, dipadukan dengan Supabase PostgreSQL untuk konsistensi data transaksional ACID. Prisma ORM menjamin keamanan pengetikan tipe di seluruh operasi database. Mesin pembobotan menjalankan kalkulasi deterministik di backend sebelum alokasi antrean jadwal dilakukan.",
    sections: [
      {
        heading: "01. Konteks Bisnis & Tantangan Lapangan",
        content:
          "Mengelola pesanan dinamis dengan variasi lead time pada lini produksi yang terbatas membutuhkan koordinasi berkesinambungan. Pada alur kerja sebelumnya, pencatatan manual pada buku log fisik menyebabkan pesanan mendesak tergeser di belakang pesanan standar massal.",
        bulletPoints: [
          "Pencatatan manual menimbulkan titik buta dalam pemantauan ketersediaan bahan baku.",
          "Konflik pemakaian mesin cetak multi-slot terhadap pesanan ber-deadline ketat.",
          "Ketiadaan metrik terpadu untuk memantau tingkat keterlambatan dan efisiensi produksi."
        ],
      },
      {
        heading: "02. Sistem Pendukung Keputusan Multikriteria (SMART & SAW)",
        content:
          "Untuk menghadirkan objektivitas penjadwalan, dua algoritma keputusan diterapkan. Sistem menganalisis kriteria meliputi Lead Time Pengiriman, Nilai Pesanan, Kompleksitas Produksi, dan Ketersediaan Mesin. Matriks normalisasi menghasilkan skor peringkat yang jelas untuk setiap batch antrean produksi.",
        bulletPoints: [
          "Normalisasi matriks Simple Additive Weighting (SAW) untuk penentuan skor prioritas linier.",
          "Fungsi utilitas Simple Multi-Attribute Rating Technique (SMART) untuk parameter pembobotan fleksibel.",
          "Linimasa jadwal visual real-time dengan indikator performa ketepatan waktu 100%."
        ],
      },
      {
        heading: "03. Arsitektur & Integritas Data",
        content:
          "Sistem memberlakukan rekonsiliasi ketat antara transaksi kasir dan stok bahan baku. Transaksi database melalui Prisma memastikan stok berkurang secara atomik saat faktur diterbitkan, mencegah kehabisan inventaris tanpa peringatan.",
        bulletPoints: [
          "Skema relasional PostgreSQL dikelola menggunakan migrasi Prisma.",
          "Server Actions di Next.js menangani mutasi data terotentikasi dan aman.",
          "Kontrol akses berbasis peran (RBAC) memisahkan wewenang manajer produksi dan operator kasir."
        ],
      },
      {
        heading: "04. Kontribusi Utama & Pembelajaran Rekayasa",
        content:
          "Memimpin seluruh siklus rekayasa mulai dari analisis kebutuhan operasional, formulasi algoritma matematika, desain skema basis data relasional, hingga antarmuka dashboard responsif.",
        bulletPoints: [
          "Merancang visualisasi linimasa interaktif untuk alokasi slot antrean mesin.",
          "Menghilangkan tumpang tindih pesanan melalui deteksi konflik deterministik.",
          "Memperdalam kemampuan menerjemahkan proses operasional riil ke dalam logika perangkat lunak terstruktur."
        ],
      },
    ],
    gallery: [
      {
        url: "/images/projects/inventory-dss.png",
        caption: "Dashboard Penjadwalan Produksi Otomatis & Kalender Linimasa dengan Pelacak Ketepatan Waktu 100%",
        alt: "Pratinjau Dashboard Sistem Penjadwalan CV Trust Lafalo",
      },
    ],
    challengesAndLessons: [
      "Penanganan penyesuaian jadwal saat mesin mengalami perawatan darurat membutuhkan rekalkulasi antrean slot berikutnya secara anggun tanpa merusak data.",
      "Menjaga antarmuka tetap sederhana dan mudah dipahami menjadi kunci keberhasilan adopsi bagi operator pabrik.",
      "Pemberlakuan batasan database yang ketat pada level ORM mencegah kondisi race-condition dalam pengurangan stok."
    ],
  },
  {
    slug: "indonesian-handwriting-ocr",
    title: "Pengenalan Citra Kata Tulisan Tangan Bahasa Indonesia",
    category: "AI & Computer Vision",
    categoryLabel: "DEEP LEARNING / COMPUTER VISION",
    description:
      "Sistem deep learning end-to-end untuk mengenali kata tulisan tangan bahasa Indonesia offline menggunakan arsitektur sekuensial CNN-BiLSTM-CTC berbasis PyTorch.",
    overview:
      "Penelitian sarjana yang berfokus pada pengenalan teks tulisan tangan offline (HTR). Mengembangkan model deep learning hibrida yang memadukan Convolutional Neural Networks untuk ekstraksi fitur spasial 2D, Bidirectional LSTM untuk pemodelan sekuensial temporal, dan Connectionist Temporal Classification (CTC) untuk decoding sekuens tanpa segmentasi karakter eksplisit.",
    coverImage: "/images/projects/ocr-hero.svg",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "CNN (VGG-style)",
      "BiLSTM",
      "CTC Loss"
    ],
    featured: true,
    status: "Riset Selesai & Disidangkan",
    links: {
      github: "https://github.com/Yasin30303",
    },
    metadata: {
      role: "Lead Machine Learning Researcher & Author",
      duration: "6 Bulan",
      client: "Universitas Komputer Indonesia (Skripsi)",
    },
    problemStatement:
      "Pengenalan kata tulisan tangan pada bahasa Indonesia menghadapi variasi gaya penulisan yang tinggi, keterhubungan goresan (ligatur), sudut kemiringan, dan ambiguitas spasial. Mesin OCR konvensional yang dioptimalkan untuk font cetak gagal membaca tulisan bersambung tanpa segmentasi karakter eksplisit.",
    solution:
      "Merancang model sequence-to-sequence end-to-end yang mengeliminasi kebutuhan segmentasi karakter manual. Lapisan CNN 7-layer mengekstrak peta fitur invarian translasi, diikuti jaringan Bidirectional LSTM multi-layer yang menangkap konteks linguistik dua arah. Decoding CTC mentranskripsikan sekuens karakter dengan panjang arbitrer secara langsung.",
    technicalArchitecture:
      "Diimplementasikan secara ketat menggunakan PyTorch. Pipeline data memanfaatkan OpenCV untuk thresholding Otsu adaptif, penyesuaian ukuran dengan preservasi rasio aspek, dan koreksi kemiringan sudut. Model mengeluarkan distribusi probabilitas per-frame yang dihitung menggunakan CTC Loss saat pelatihan dan decoding greedy CTC saat inferensi.",
    sections: [
      {
        heading: "01. Motivasi Penelitian & Konteks Domain",
        content:
          "Digitalisasi arsip formulir tulisan tangan, lembar ujian mahasiswa, dan berkas administrasi masih dilakukan manual di banyak institusi Indonesia. Model OCR standar gagal mengenali teks ketika batas antar huruf bersentuhan atau tumpang tindih.",
        bulletPoints: [
          "Kebutuhan pengenalan aksara Latin yang tangguh untuk ragam variasi tulisan tangan di Indonesia.",
          "Menghilangkan ketergantungan pada algoritma pre-segmentasi yang rapuh pada tulisan bersambung.",
          "Membuktikan sinergi antara representasi fitur spasial CNN dan pemodelan sekuensial rekuren BiLSTM."
        ],
      },
      {
        heading: "02. Pra-pemrosesan Citra & Ekstraksi Fitur Spasial",
        content:
          "Citra kata masukan diproses melalui konversi grayscale, penyaringan derau, dan normalisasi rasio aspek. Ekstraktor konvolusional 7-layer dengan Max-Pooling memampatkan dimensi tinggi sembari menjaga resolusi horizontal, menghasilkan vektor fitur yang selaras dengan arah membaca teks.",
        bulletPoints: [
          "Padding bilinear ke dimensi tetap (32 x 128) yang mempertahankan topologi goresan huruf.",
          "Batch Normalization dan aktivasi Leaky ReLU untuk mempercepat konvergensi dan mencegah vanishing gradients.",
          "Transposisi irisan fitur dari representasi (C, H, W) ke sekuens temporal (W, C*H)."
        ],
      },
      {
        heading: "03. Pemodelan Sekuens BiLSTM & Transkripsi CTC",
        content:
          "Lapisan rekuren dua arah memproses vektor fitur dari kiri ke kanan dan kanan ke kiri. Hal ini memungkinkan jaringan mengenali karakter ambigu dengan memeriksa goresan sebelum dan sesudahnya sebelum mengeluarkan logits kosakata (termasuk token blank).",
        bulletPoints: [
          "Stacked Bidirectional LSTM 2-layer dengan 256 hidden units dan dropout pencegah overfitting.",
          "Fungsi loss Connectionist Temporal Classification (CTC) yang mendukung pelatihan tanpa anotasi per karakter.",
          "Decoding Greedy CTC yang memadatkan karakter berulang yang dipisahkan oleh token blank."
        ],
      },
      {
        heading: "04. Evaluasi Eksperimental & Temuan Riset",
        content:
          "Model divalidasi secara ketat menggunakan metrik Character Error Rate (CER) dan Word Error Rate (WER) pada berbagai pembagian data uji. Riset menegaskan pentingnya konsistensi ketebalan goresan dan normalisasi kontras dalam meraih transkripsi akurat.",
        bulletPoints: [
          "Menunjukkan tingkat akurasi tinggi pada sampel tulisan tangan cetak maupun bersambung.",
          "Mengidentifikasi kegagalan utama pada kemiringan ekstrem dan kontras tinta yang memudar.",
          "Membuktikan bahwa arsitektur end-to-end CTC mengungguli pipeline berbasis segmentasi parsial secara signifikan."
        ],
      },
    ],
    gallery: [
      {
        url: "/images/projects/ocr-hero.svg",
        caption: "Diagram Pipeline Arsitektur: Citra Masukan -> Peta Fitur CNN -> Konteks Sekuensial BiLSTM -> Decoding CTC",
        alt: "Arsitektur Pipeline CNN-BiLSTM-CTC",
      },
    ],
    challengesAndLessons: [
      "Isu vanishing gradient pada perambatan mundur sekuens panjang diselesaikan melalui inisialisasi bobot BiLSTM yang tepat dan normalisasi batch.",
      "Rasio aspek kata yang sangat bervariasi membutuhkan strategi padding yang cermat agar proporsi morfologi goresan huruf tidak terdistorsi.",
      "Penilaian objektif: akurasi menurun pada pemindaian kamera resolusi rendah, menandai pra-pemrosesan super-resolution sebagai arah riset berharga di masa mendatang."
    ],
  },
];

export function getProjectsData(lang: Language = "en"): Project[] {
  return lang === "id" ? projectsDataId : projectsDataEn;
}

export function getProjectBySlug(slug: string, lang: Language = "en"): Project | undefined {
  const projects = getProjectsData(lang);
  return projects.find((p) => p.slug === slug);
}

// Backwards compatibility default export
export const projectsData = projectsDataEn;
