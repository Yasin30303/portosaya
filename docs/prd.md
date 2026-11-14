# PRODUCT REQUIREMENTS DOCUMENT
# PERSONAL PORTFOLIO WEBSITE

**Product Name:** Personal Portfolio  
**Version:** 1.0  
**Product Type:** Personal Branding Website  
**Primary Role:** Full-Stack Developer & AI Enthusiast  
**Visual Direction:** Dark Technical / Editorial Minimalist  
**Theme:** Dark + Light Mode  
**Architecture:** Hybrid (Landing Page + Project Detail Pages)  
**Platform:** Responsive Web Application  
**Status:** Ready for Implementation

---

# 01. PRODUCT VISION

## 1.1 Overview

Build a premium personal portfolio website that represents the professional identity, technical capabilities, development philosophy, and selected works of a Full-Stack Developer & AI Enthusiast.

The website must communicate more than programming skills. It should demonstrate the ability to understand problems, design solutions, build functional applications, and explore technical challenges through research and experimentation.

The portfolio should function as a professional digital presence for:

- Recruitment and job opportunities.
- Freelance and client acquisition.
- Technical networking.
- Professional collaboration.
- Personal branding.

The final product must feel intentionally designed and professionally engineered, not like a generic developer portfolio generated from a template.

## 1.2 Brand Positioning

**Primary Identity:**

Full-Stack Developer & AI Enthusiast.

**Brand Statement:**

"I build digital products, explore intelligent systems, and turn complex ideas into practical solutions."

**Core Professional Interests:**

1. Full-Stack Web Development.
2. Software Engineering.
3. Artificial Intelligence.
4. Computer Vision.
5. Human-Centered Digital Products.
6. UI/UX Implementation.

## 1.3 Brand Personality

The website should communicate:

| Attribute | Description |
|---|---|
| Technical | Demonstrates engineering knowledge |
| Thoughtful | Shows intentional problem-solving |
| Minimal | Avoids unnecessary visual elements |
| Experimental | Communicates curiosity and exploration |
| Professional | Builds trust and credibility |
| Approachable | Maintains a personal and human identity |

---

# 02. TARGET AUDIENCE

## Primary Audience

### Recruiters and Hiring Managers
They should quickly understand:
- Professional identity.
- Technical competencies.
- Relevant projects.
- Development experience.
- Contact information.

### Potential Clients
They should understand:
- What solutions can be developed.
- Previous implementation experience.
- Technical capabilities.
- Project execution quality.
- How to initiate collaboration.

### Technical Communities
They should be able to explore:
- Engineering approaches.
- Technical case studies.
- Research projects.
- Source code.
- Technical experiments.

---

# 03. INFORMATION ARCHITECTURE

Use a hybrid architecture consisting of one main landing page and dedicated project detail pages.

## 3.1 Main Routes

| Route | Purpose |
|---|---|
| `/` | Main portfolio landing page |
| `/projects/[slug]` | Individual project case study |
| `/not-found` | Custom not-found experience |

Do not create unnecessary routes for every landing page section.

## 3.2 Navigation

Main navigation:

- Home
- About
- Projects
- Skills
- Experience
- Contact

Additional elements:
- Light/Dark theme toggle.
- Download CV CTA.
- Mobile navigation menu.

Navigation behavior:
- Sticky header.
- Transparent or integrated header at the top.
- Subtle background treatment when scrolling.
- Active section indication.
- Smooth anchor scrolling.
- Functional mobile navigation.

---

# 04. ART DIRECTION & DESIGN SYSTEM

This is one of the most important parts of the project.

The visual implementation must follow a deliberate design system.

## 4.1 Design Concept

**Dark Technical Editorial**

Combine the visual language of:
- Modern software engineering websites.
- Editorial typography.
- Swiss-inspired grid systems.
- Minimalist digital publications.
- Carefully crafted developer portfolios.

The website should feel like a professional digital publication about its creator.

Avoid making it look like an SaaS dashboard.

## 4.2 Visual References

The coding agent may study the following websites for design inspiration:

- Linear — https://linear.app/
- Vercel — https://vercel.com/
- Raycast — https://www.raycast.com/
- Resend — https://resend.com/
- Stripe — https://stripe.com/
- personal web - https://www.tomdekoning.work/
- glinto - https://glinto.co.kr/en

These references are for understanding visual principles, not copying their layouts.

Extract:
- Typography hierarchy.
- Grid composition.
- Whitespace.
- Subtle interactions.
- Navigation treatment.
- Information presentation.

Do not reproduce any website's identity or interface directly.

## 4.3 Color System

### Dark Theme — Primary

| Token | Value | Usage |
|---|---|---|
| Background | `#101216` | Main background |
| Background Secondary | `#15191F` | Alternate section |
| Surface | `#1B2028` | Elevated surfaces |
| Surface Hover | `#242B35` | Interactive hover |
| Primary Text | `#F0F2F5` | Main typography |
| Secondary Text | `#A1A9B5` | Supporting text |
| Muted Text | `#737D8A` | Metadata |
| Border | `#2A3039` | Dividers |
| Accent | `#79B7D5` | Interactive accents |
| Accent Strong | `#4B9BC4` | Active states |

### Light Theme — Alternative

| Token | Value | Usage |
|---|---|---|
| Background | `#F5F6F7` | Main background |
| Background Secondary | `#ECEFF2` | Alternate section |
| Surface | `#FFFFFF` | Elevated surfaces |
| Surface Hover | `#F0F3F5` | Interactive hover |
| Primary Text | `#171B21` | Main typography |
| Secondary Text | `#596371` | Supporting text |
| Muted Text | `#77818D` | Metadata |
| Border | `#DCE1E6` | Dividers |
| Accent | `#315C75` | Interactive accents |
| Accent Strong | `#1D506F` | Active states |

Implementation:
- Use CSS variables or semantic design tokens.
- Avoid hardcoded colors inside individual components.
- Theme changes must affect the entire interface.
- Check text contrast in both themes.
- Preserve theme preference between visits.
- Respect system theme on first visit when no preference exists.

## 4.4 Typography

Recommended:
- Primary Font: Geist.
- Secondary Font: Geist Mono.

Typography hierarchy:

| Element | Style |
|---|---|
| Hero heading | Large, bold, expressive |
| Section heading | Strong and concise |
| Project title | Medium-large |
| Body text | Comfortable reading size |
| Technical metadata | Monospace, compact |
| Navigation | Small-medium |

Use responsive typography with `clamp()`.

Avoid:
- Excessive font sizes.
- Too many font families.
- Long paragraphs with narrow line heights.
- All-uppercase labels everywhere.

## 4.5 Grid & Layout

- Maximum content width: 1200–1280px.
- Desktop horizontal padding: 48–64px.
- Tablet horizontal padding: 32px.
- Mobile horizontal padding: 20–24px.
- Use consistent spacing tokens.
- Use asymmetric layouts when they improve storytelling.
- Prefer dividers and whitespace over excessive cards.

Grid:
- Desktop: 12-column conceptual grid.
- Tablet: 8-column adaptation.
- Mobile: single-column layout.

## 4.6 Visual Restrictions

Strictly avoid:
- Excessive neon effects.
- Purple-blue gradient backgrounds.
- Glassmorphism everywhere.
- Excessive rounded cards.
- Random floating decorative shapes.
- Unnecessary 3D objects.
- Generic AI illustrations.
- Repeated identical feature cards.
- Excessive glowing borders.
- Fake terminal interfaces used only as decoration.

Every visual element must serve a clear purpose.

---

# 05. PAGE SPECIFICATIONS

# 5.1 HERO SECTION

**Objective:** Establish professional identity within the first few seconds.

### Layout

Desktop:
- Left: Main introduction and CTA.
- Right: Optional personal visual or carefully composed technical identity element.
- Supporting metadata underneath.
- Generous negative space.

Mobile:
- Stacked layout.
- Typography-first.
- CTAs accessible without excessive scrolling.

### Content

Eyebrow:

`HELLO, I'M`

Main heading:

"Building digital experiences through code & curiosity."

Professional title:

`Full-Stack Developer & AI Enthusiast`

Description:

"I'm an Informatics Engineering graduate focused on building functional web applications and exploring intelligent systems through software engineering and computer vision."

CTA:
- Explore My Work
- Get In Touch

Additional:
- Download CV.
- Current professional availability (optional and editable).
- Location (optional).

### Interactions

- CTA scrolls to the relevant section.
- CV downloads the correct PDF.
- Subtle entrance animation.
- No distracting continuous animation.

---

# 5.2 ABOUT SECTION

**Objective:** Communicate professional background and working philosophy.

### Content Structure

Use an editorial composition instead of generic profile cards.

Suggested heading:

"A little about what I do."

Content:
- Professional background.
- Development interests.
- Technical approach.
- Interest in building practical solutions.
- Personal learning philosophy.

Optional elements:
- Profile photograph.
- Short personal facts.
- Education information.

Use authentic language, not generic corporate copy.

The section should connect the person's identity with the projects presented later.

---

# 5.3 PROJECTS SECTION

**Objective:** Present selected projects as evidence of technical capability.

Heading:

"Selected Work."

Supporting text:

"A collection of projects, experiments, and solutions built through engineering and exploration."

### Project Display

Use a visually varied editorial project showcase.

Do not display every project in identical cards.

Possible composition:
- Large featured project.
- Secondary project with alternating image/text placement.
- Project category and technology metadata.
- Strong project imagery.
- Clear detail navigation.

Each project must have:
- Title.
- Description.
- Category.
- Cover image.
- Technology stack.
- Project slug.
- External demo URL.
- GitHub URL.
- Featured status.
- Project detail content.

### Featured Project 01

**Inventory & Cashier Decision Support System**

Category:
`FULL-STACK DEVELOPMENT`

Overview:

A web-based inventory and cashier management application designed for a local traditional cake business, incorporating decision-support methods to assist product prioritization.

Technology:
- Next.js
- TypeScript
- Tailwind CSS
- Prisma ORM
- Supabase
- SMART
- SAW

Key functionality:
- Inventory management.
- Cashier transactions.
- Product management.
- Decision-support calculations.
- Data management.

Case study narrative:
1. Business context.
2. Problem identification.
3. Solution design.
4. Technical architecture.
5. Implementation.
6. Personal contribution.
7. Lessons learned.

Do not invent business performance metrics.

### Featured Project 02

**Indonesian Handwriting Text Recognition**

Category:
`ARTIFICIAL INTELLIGENCE / COMPUTER VISION`

Overview:

A research project exploring handwritten word recognition using a CNN-BiLSTM-CTC architecture.

Technology:
- Python
- PyTorch
- OpenCV
- NumPy

Key components:
- Image preprocessing.
- CNN feature extraction.
- Bidirectional sequence modeling.
- CTC-based transcription.
- CER and WER evaluation.

Case study narrative:
1. Research motivation.
2. Problem definition.
3. Dataset description.
4. Image preprocessing.
5. Model architecture.
6. Training methodology.
7. Evaluation results.
8. Challenges and limitations.

The research must be presented honestly, including limitations. Never fabricate accuracy or benchmark results.

### Future Project Support

The data architecture must make adding projects straightforward.

New projects should not require modifying the overall page layout.

---

# 5.4 PROJECT DETAIL PAGE

Route:

`/projects/[slug]`

This page is essential to the hybrid architecture.

### Layout

1. Breadcrumb navigation.
2. Project category.
3. Project title.
4. Project summary.
5. Main project image.
6. Project metadata.
7. Overview.
8. Problem statement.
9. Solution.
10. Technical implementation.
11. Technology stack.
12. Gallery.
13. Challenges and lessons learned.
14. External project links.
15. Previous/Next project navigation.
16. Back to projects.

### Project Metadata

Support:
- Project duration.
- Role.
- Category.
- Technology.
- Project status.

Show only verified information.

### Visual Requirements

- Large project screenshots.
- Editorial image layouts.
- Consistent image aspect ratios.
- Full-width images where appropriate.
- Captions when useful.
- Avoid excessive cards.

### Interaction

- Breadcrumb navigation.
- Previous/Next project navigation.
- External demo link.
- GitHub link.
- Responsive image gallery.

---

# 5.5 TECHNICAL SKILLS

Heading:

"Tools I work with."

Group skills into:

### Frontend
HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS.

### Backend & Database
Node.js, Prisma ORM, Supabase, SQL.

### AI & Computer Vision
Python, PyTorch, OpenCV, CNN, BiLSTM, CTC.

### Development Tools
Git, GitHub, VS Code, Figma.

Presentation:
- Typography-based list.
- Grouped columns.
- Optional technology icons.
- Subtle hover interactions.

Do not use proficiency percentages or arbitrary skill ratings.

Only include technologies that can be supported by actual experience.

---

# 5.6 EXPERIENCE & EDUCATION

Heading:

"Experience & Background."

Use a minimal timeline or editorial list.

Support:
- Education.
- Internship.
- Professional work.
- Independent development.
- Relevant activities.

Each entry:
- Organization.
- Role.
- Date.
- Description.
- Relevant skills.

Unknown dates or achievements must remain editable placeholders.

Do not invent employment history.

---

# 5.7 CONTACT SECTION

Heading:

"Let's build something meaningful."

Description:

"I'm always interested in connecting with people, exploring new ideas, and working on meaningful digital products."

Contact methods:
- Email.
- LinkedIn.
- GitHub.
- WhatsApp (optional).

Primary CTA:
`Get In Touch`

All contact information must come from structured profile data.

---

# 5.8 FOOTER

Include:
- Personal identity.
- Short positioning statement.
- Navigation links.
- Social links.
- Copyright year.
- Back-to-top action.

Keep the footer minimal.

---

# 06. THEME SYSTEM

Theme functionality is a core requirement, not an optional enhancement.

### Behavior

1. Default to the operating system preference on first visit.
2. Provide an accessible theme toggle.
3. Allow switching between dark and light modes.
4. Save the user's selection in localStorage.
5. Prevent theme flashing during initial page load.
6. Maintain contrast and component consistency.
7. Support system preference when the user has not selected a preference.

### Technical Implementation

Use semantic CSS variables:

```css

:root {
  color-scheme: dark;

  /* Core palette */
  --background: #080616;
  --background-secondary: #1A1953;

  /* Surfaces */
  --surface: #11102A;
  --surface-hover: #1A1953;

  /* Typography */
  --foreground: #F5F4FF;
  --foreground-secondary: #B7B5CE;
  --muted: #85829F;

  /* Brand colors */
  --accent: #2F2FE4;
  --accent-secondary: #162E93;
  --accent-hover: #4444F0;

  /* Borders */
  --border: #302D59;

  /* Interaction */
  --focus-ring: #7777FF;
}

[data-theme="light"] {
  color-scheme: light;

  --background: #F7F7FC;
  --background-secondary: #EEEEFA;

  --surface: #FFFFFF;
  --surface-hover: #E9E8F8;

  --foreground: #141329;
  --foreground-secondary: #55536F;
  --muted: #77748D;

  --accent: #2F2FE4;
  --accent-secondary: #162E93;
  --accent-hover: #162E93;

  --border: #DCD9F0;
  --focus-ring: #2F2FE4;
}


This is an illustrative starting point. Expand the tokens to cover all semantic design needs.

Use a suitable theme provider or a lightweight custom implementation.

---

# 07. MOTION & MICRO-INTERACTIONS

Motion should improve feedback and visual continuity.

### Required

- Navigation hover feedback.
- Button transitions.
- Section entrance animation.
- Project image interaction.
- Theme transition.
- Mobile menu animation.
- Scroll behavior.

### Optional

- Subtle text reveal.
- Project image parallax.
- Custom cursor.
- Page transitions.

### Restrictions

- Avoid excessive scroll hijacking.
- Do not delay important content behind animations.
- Respect reduced-motion preferences.
- Avoid continuous movement without purpose.
- Ensure animation performance on mobile.

Use Motion for React only when animation complexity justifies it.

---

# 08. TECHNICAL ARCHITECTURE

## 8.1 Recommended Stack

| Layer | Technology |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI | Custom reusable components |
| Animation | Motion |
| Icons | Lucide React |
| Typography | Geist |
| Content | TypeScript data files |
| Deployment | Vercel |
| Version Control | GitHub |

Use stable compatible versions at implementation time.

Do not install unnecessary dependencies.

## 8.2 Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   └── projects/
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   │
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── FeaturedProject.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── ProjectHeader.tsx
│   │   └── ProjectNavigation.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── SocialLinks.tsx
│   │   └── TechTag.tsx
│   │
│   └── providers/
│       └── ThemeProvider.tsx
│
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── hooks/
│   └── useActiveSection.ts
│
├── lib/
│   ├── utils.ts
│   └── projects.ts
│
└── types/
    └── index.ts

public/
├── images/
│   ├── profile/
│   └── projects/
├── documents/
│   └── cv.pdf
└── favicon.ico
```

The agent may adjust this structure if the existing repository or implementation requires it.

## 8.3 Content Data Model

Create strongly typed data structures.

Example:

```ts
export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  technologies: string[];
  featured: boolean;
  status?: string;

  links?: {
    demo?: string;
    github?: string;
  };

  metadata?: {
    role?: string;
    duration?: string;
  };

  sections: {
    heading: string;
    content: string;
    image?: string;
  }[];
}
```

Keep content separate from presentation.

Use structured data for profile, skills, and experience as well.

## 8.4 Rendering Strategy

- Use Server Components by default.
- Use Client Components only for interactive behavior.
- Generate project pages from structured data.
- Use static generation where appropriate.
- Avoid unnecessary API routes.
- No backend database is required for the initial version.

## 8.5 Image Management

- Use Next.js Image.
- Define consistent image dimensions.
- Use descriptive file names.
- Add meaningful alt text.
- Lazy-load below-the-fold images.
- Avoid broken image placeholders.
- Preserve image quality.

Project screenshots should be real assets whenever available.

---

# 09. RESPONSIVE DESIGN

Support:

| Device | Width |
|---|---|
| Small Mobile | 320–374px |
| Mobile | 375–767px |
| Tablet | 768–1023px |
| Desktop | 1024–1439px |
| Large Desktop | 1440px+ |

Requirements:
- No horizontal overflow.
- Proper typography scaling.
- Responsive project showcases.
- Touch-friendly controls.
- Adaptive navigation.
- Consistent spacing.
- Proper image cropping.
- Mobile-specific content composition.

Do not simply shrink the desktop layout.

---

# 10. SEO, ACCESSIBILITY & PERFORMANCE

## SEO
- Unique page titles.
- Meta descriptions.
- Open Graph metadata.
- Canonical URLs.
- Sitemap.
- robots.txt.
- Semantic HTML.
- Structured metadata where appropriate.
- Descriptive project page URLs.

## Accessibility
Target WCAG 2.2 AA principles.

Requirements:
- Keyboard navigation.
- Visible focus indicators.
- Proper contrast.
- Accessible theme toggle.
- Semantic landmarks.
- Alt text.
- Reduced-motion support.
- Accessible mobile menu.

## Performance

Target Lighthouse:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

Use these as evaluation targets, not guaranteed results.

Optimize:
- Image sizes.
- Font loading.
- JavaScript bundles.
- Client-side rendering.
- Layout stability.
- Animation rendering.

---

# 11. SECURITY & MAINTAINABILITY

- Do not expose private credentials.
- Do not store secrets in public variables.
- Validate external URLs.
- Avoid unnecessary dependencies.
- Use TypeScript strictly where practical.
- Maintain reusable components.
- Avoid duplicated styling.
- Avoid giant monolithic page components.
- Keep content centralized.
- Remove dead code.

---

# 12. ACCEPTANCE CRITERIA

## Visual Quality
- [ ] Distinct Dark Technical identity.
- [ ] Both themes are visually complete.
- [ ] Consistent typography.
- [ ] Strong visual hierarchy.
- [ ] Balanced editorial composition.
- [ ] No generic AI portfolio appearance.
- [ ] No repetitive card-based sections.
- [ ] Real project assets are used where available.

## Functionality
- [ ] All navigation works.
- [ ] Theme toggle works.
- [ ] Theme preference persists.
- [ ] Project routes work.
- [ ] Project data renders dynamically.
- [ ] CV download works.
- [ ] Contact links work.
- [ ] Social links work.
- [ ] Mobile navigation works.
- [ ] Not-found page works.

## Technical
- [ ] TypeScript checks pass.
- [ ] Production build succeeds.
- [ ] No critical browser errors.
- [ ] No broken internal routes.
- [ ] No broken images.
- [ ] SEO metadata exists.
- [ ] Responsive behavior is verified.

## Quality Assurance
- [ ] Tested on mobile.
- [ ] Tested on tablet.
- [ ] Tested on desktop.
- [ ] Tested in both themes.
- [ ] Keyboard navigation verified.
- [ ] Reduced motion verified.
- [ ] Lighthouse evaluated.

---

# 13. DEVELOPMENT WORKFLOW

The agent must work incrementally.

### Phase 1 — Repository Audit
Inspect:
- Existing project structure.
- Package manager.
- Dependencies.
- Existing assets.
- Current application state.
- Build configuration.

Do not overwrite existing files without understanding their purpose.

### Phase 2 — Design Foundation
Implement:
- Design tokens.
- Theme system.
- Typography.
- Container.
- Buttons.
- Navigation.
- Reusable components.

### Phase 3 — Landing Page
Implement:
- Hero.
- About.
- Projects.
- Skills.
- Experience.
- Contact.
- Footer.

### Phase 4 — Project Detail Pages
Implement:
- Dynamic routes.
- Project content model.
- Case study layouts.
- Image galleries.
- Project navigation.

### Phase 5 — Interactions
Implement:
- Theme toggle.
- Navigation states.
- Scroll behavior.
- Animations.
- Responsive mobile menu.

### Phase 6 — Quality Assurance
Run:
- TypeScript checks.
- Linting.
- Production build.
- Link checks.
- Responsive tests.
- Accessibility checks.
- Lighthouse audits.

### Phase 7 — Final Delivery
Provide:
- Summary of implementation.
- File structure.
- Technology choices.
- Completed features.
- Remaining placeholders.
- Testing results.
- Deployment instructions.

---

# 14. FINAL PRODUCT SUCCESS

The website should communicate three things within the first 30–60 seconds:

1. Who I am.
2. What I can build.
3. Why someone should work with me.

The portfolio should feel like a carefully crafted professional product, not a collection of unrelated UI components.

Its strongest quality should be the combination of technical credibility, clear storytelling, and a distinctive visual identity.

# ADDITIONAL DESIGN STANDARD — AWWWARDS-INSPIRED DEVELOPMENT

You have access to an Awwwards design skill.

Before implementing the visual interface, discover and read the complete instructions of the available Awwwards skill.

Treat this skill as an additional design reference and quality standard.

Do not assume its capabilities. Follow the actual instructions provided by the installed skill.

## 1. DESIGN OBJECTIVE

The objective is to create a distinctive, award-quality personal portfolio website.

The design should demonstrate:
- Strong art direction.
- Original visual identity.
- Sophisticated typography.
- Intentional composition.
- Creative interaction.
- Smooth motion design.
- Excellent usability.
- Attention to detail.

## 2. ART DIRECTION

Combine Awwwards-inspired design principles with the established:

**Deep Indigo Technical Editorial** identity.

The visual direction must preserve:
- Deep Midnight background.
- Electric Indigo accents.
- Strong editorial typography.
- Minimalist composition.
- Precise grid systems.
- Intentional whitespace.
- Restrained visual decoration.

Do not abandon the established brand identity to imitate other award-winning websites.

## 3. CREATIVE DESIGN EXPLORATION

Explore opportunities for:
- Distinctive hero compositions.
- Experimental typography.
- Asymmetric project layouts.
- Layered visual storytelling.
- Scroll-triggered transitions.
- Subtle parallax.
- Interactive project previews.
- Refined hover interactions.
- Creative navigation behavior.

These are design opportunities, not mandatory features.

Choose only interactions that improve the experience.

## 4. MOTION DESIGN

Motion should feel intentional, smooth, and polished.

Consider:
- Entrance animations.
- Text reveal.
- Image transitions.
- Scroll-based storytelling.
- Navigation transitions.
- Micro-interactions.
- Page transitions.

Prioritize performance and accessibility.

Avoid excessive animation and unnecessary visual complexity.

## 5. VISUAL QUALITY EVALUATION

Before completing each major section, evaluate:

1. Does the composition have a distinctive identity?
2. Is the typography hierarchy strong?
3. Does the layout feel intentionally art-directed?
4. Are interactions meaningful?
5. Are spacing and alignment consistent?
6. Does the section maintain brand consistency?
7. Does the design work in both light and dark modes?
8. Does it work on mobile devices?
9. Is the implementation technically performant?

If the design feels generic, refine it before proceeding.

## 6. IMPORTANT PRIORITY

The priority hierarchy is:

1. Product requirements and functionality.
2. Established brand identity and design system.
3. Awwwards-inspired creative direction.
4. Animation and decorative details.

Do not sacrifice usability, accessibility, maintainability, or performance for visual effects.

The final result should feel original, sophisticated, technically impressive, and professionally art-directed.