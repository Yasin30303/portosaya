# MASTER IMPLEMENTATION PROMPT
# PERSONAL PORTFOLIO WEBSITE

You are a Senior Full-Stack Engineer, Creative Developer, UI/UX Designer, and Software Architect.

Your task is to design and implement a production-quality personal portfolio website based on the accompanying Product Requirements Document.

You are responsible for both visual quality and technical implementation.

Do not treat this as a simple landing page exercise.

The final product must demonstrate thoughtful art direction, excellent typography, strong information architecture, clean code, responsive behavior, and professional execution.

---

## 1. PROJECT IDENTITY

Professional positioning:

**Full-Stack Developer & AI Enthusiast**

Primary visual direction:

**Dark Technical / Editorial Minimalist**

Theme support:
- Dark mode.
- Light mode.
- User-controlled theme toggle.
- Persistent theme preference.

Architecture:

**Hybrid**
- Main landing page.
- Dedicated dynamic project case study pages.

Core technologies:
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Motion.
- Lucide React.
- Geist typography.

Use stable and compatible dependency versions.

---

## 2. FIRST TASK: AUDIT THE REPOSITORY

Before writing code, inspect the entire existing project structure.

Identify:
- Current framework.
- Package manager.
- Existing dependencies.
- Existing components.
- Existing styles.
- Available images and assets.
- Existing configuration.
- Current Git status.

Important:
- Do not blindly overwrite existing files.
- Preserve useful existing functionality.
- Do not initialize a second application inside an existing application.
- Do not replace configuration files without understanding them.
- Do not delete existing assets.

After inspection, prepare a concise implementation plan.

If the repository is empty, establish the application foundation using the specified stack.

Do not stop at planning. Proceed with implementation after the audit unless an essential decision is genuinely blocking.

---

## 3. DESIGN DIRECTION

Create a visually distinctive developer portfolio.

Design characteristics:
- Dark editorial interface.
- Sophisticated typography.
- Precise grid system.
- Restrained blue accents.
- Generous whitespace.
- Asymmetric composition.
- Subtle borders.
- Carefully selected visual elements.
- Minimal but meaningful animations.

Avoid:
- Generic portfolio templates.
- Excessive gradients.
- Neon effects.
- Glassmorphism.
- Repetitive rounded cards.
- Random floating decorations.
- Fake terminal interfaces.
- Generic stock imagery.
- Unnecessary visual complexity.

Reference websites for design research:
- https://linear.app/
- https://vercel.com/
- https://www.raycast.com/
- https://resend.com/
- https://stripe.com/

Study their design principles, not their exact layouts.

The result must have its own identity.

---

## 4. DESIGN SYSTEM IMPLEMENTATION

Create centralized design tokens.

Implement:
- Dark theme colors.
- Light theme colors.
- Typography scale.
- Spacing scale.
- Container sizes.
- Border colors.
- Accent colors.
- Interactive states.
- Focus states.

Use CSS variables for semantic theme tokens.

Do not scatter hardcoded colors throughout components.

Ensure both themes are fully designed.

The dark theme is the primary visual experience.

The light theme must feel intentionally designed, not simply inverted.

Implement a theme system that:
1. Detects the system preference on first visit.
2. Allows manual switching.
3. Persists the selected theme.
4. Avoids unnecessary flashing during initialization.
5. Supports accessible controls.

---

## 5. COMPONENT ARCHITECTURE

Build reusable components with clear responsibilities.

Required components:

### Layout
- Navbar
- MobileMenu
- Footer
- Container

### Main Sections
- Hero
- About
- Projects
- Skills
- Experience
- Contact

### Project Components
- FeaturedProject
- ProjectCard
- ProjectHeader
- ProjectGallery
- ProjectNavigation
- ProjectDetails

### UI Components
- Button
- ThemeToggle
- SectionHeading
- SocialLinks
- TechTag

Do not create components merely to increase file count.

Keep each component maintainable and appropriately scoped.

Avoid giant page files and unnecessary client components.

---

## 6. LANDING PAGE IMPLEMENTATION

Implement the sections in this order:

1. Navbar.
2. Hero.
3. About.
4. Selected Projects.
5. Technical Skills.
6. Experience & Education.
7. Contact.
8. Footer.

Every section must have:
- Clear purpose.
- Proper semantic structure.
- Consistent spacing.
- Responsive composition.
- Appropriate typography.
- Meaningful content.

Do not fill the page with generic placeholder paragraphs.

Use the supplied project information and maintain editable placeholders for missing personal information.

---

## 7. HERO ART DIRECTION

The hero must establish a strong professional identity.

Suggested headline:

"Building digital experiences through code & curiosity."

Professional identity:

"Full-Stack Developer & AI Enthusiast."

Supporting description:

"I'm an Informatics Engineering graduate focused on building functional web applications and exploring intelligent systems through software engineering and computer vision."

Required CTA:
- Explore My Work.
- Get In Touch.
- Download CV.

Use strong typography and intentional whitespace.

Do not automatically use a floating developer illustration or fake coding terminal.

Choose the hero composition based on the strongest available authentic assets.

---

## 8. PROJECT CASE STUDIES

Create structured project data rather than hardcoding project content.

Project one:

**Inventory & Cashier Decision Support System**

Technologies:
- Next.js.
- TypeScript.
- Tailwind CSS.
- Prisma ORM.
- Supabase.
- SMART.
- SAW.

Project two:

**Indonesian Handwriting Text Recognition**

Technologies:
- Python.
- PyTorch.
- OpenCV.
- NumPy.
- CNN.
- BiLSTM.
- CTC.

Both projects must have dedicated case study pages.

Explain:
- Context.
- Problem.
- Solution.
- Technical approach.
- Implementation.
- Challenges.
- Lessons learned.

Never fabricate project metrics, achievements, links, dates, or performance results.

Use editable placeholders for missing information.

---

## 9. DYNAMIC PROJECT ROUTING

Implement:

`/projects/[slug]`

Requirements:
- Read project data from centralized structured files.
- Generate static routes where appropriate.
- Return a proper not-found page for invalid slugs.
- Use unique metadata for each project.
- Support images and galleries.
- Include navigation between projects.

Adding a new project should require adding data and assets, not modifying the page architecture.

---

## 10. INTERACTION & ANIMATION

Use Motion selectively.

Required:
- Navbar interactions.
- Theme toggle.
- Mobile menu.
- Button states.
- Section reveal.
- Project hover interactions.
- Smooth anchor scrolling.

Avoid:
- Heavy continuous animations.
- Unnecessary parallax.
- Scroll hijacking.
- Excessive transition delays.
- Animations that block content visibility.

Respect `prefers-reduced-motion`.

---

## 11. RESPONSIVE IMPLEMENTATION

Test at:
- 320px.
- 375px.
- 768px.
- 1024px.
- 1440px.
- 1920px.

Pay special attention to:
- Hero typography.
- Navigation.
- Project image ratios.
- Project content layouts.
- Contact CTA.
- Footer.

Mobile must be deliberately composed, not merely compressed.

No horizontal overflow is acceptable.

---

## 12. ENGINEERING REQUIREMENTS

- Use TypeScript.
- Use Server Components by default.
- Use Client Components only when necessary.
- Use Next.js Image.
- Optimize fonts.
- Keep data separate from UI.
- Use semantic HTML.
- Use reusable utilities.
- Avoid unnecessary dependencies.
- Implement proper metadata.
- Add sitemap and robots.txt.
- Use accessible interactions.
- Avoid exposing secrets.

The application must build successfully for production.

---

## 13. DEVELOPMENT EXECUTION RULES

Work in milestones.

For each milestone:

1. Inspect relevant files.
2. Implement the required functionality.
3. Review the resulting code.
4. Run relevant checks.
5. Fix identified problems.
6. Proceed to the next milestone.

Do not generate the entire application as one massive component.

Do not skip responsive implementation.

Do not use fake data that appears to be real.

Do not claim functionality works without testing it.

Do not leave broken navigation or nonfunctional CTA buttons.

Do not declare completion just because the development server starts.

---

## 14. FINAL QUALITY ASSURANCE

Before declaring the project complete:

Run:
- TypeScript validation.
- Lint checks.
- Production build.
- Route verification.
- Responsive verification.
- Theme verification.
- Link verification.
- Accessibility checks.

If browser automation is available, inspect the actual rendered pages at desktop and mobile sizes.

If a test cannot be executed, report it explicitly rather than claiming it passed.

Check for:
- Console errors.
- Broken images.
- Layout shifts.
- Horizontal overflow.
- Hydration errors.
- Theme initialization issues.
- Broken external links.
- Missing metadata.

---

## 15. FINAL DELIVERY REPORT

When implementation is complete, provide:

1. Project overview.
2. Implemented features.
3. Final folder structure.
4. Design decisions.
5. Technology stack.
6. Completed routes.
7. Features requiring user-provided content.
8. Test results.
9. Known limitations.
10. Local development instructions.
11. Deployment instructions for Vercel.

Do not hide incomplete features.

---

## FINAL DIRECTIVE

Prioritize quality over implementation speed.

The website must feel like a professionally art-directed digital product built by someone who understands both engineering and design.

Every section should communicate something meaningful.

Every interaction should have a purpose.

Every technical decision should be maintainable.

The final result must be visually distinctive, technically sound, responsive, accessible, and ready for future expansion.

**Build a portfolio that demonstrates the quality of the developer behind it.**