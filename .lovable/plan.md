
## Plan: Rokesh V – Bold Creative Portfolio + PDF Resume

Build a single-page personal portfolio website at `/` with a strong, distinctive aesthetic, plus a one-click "Download Resume" button that serves a professionally formatted PDF.

### Visual direction
- Bold editorial / brutalist-meets-modern: oversized display type, sharp grid, asymmetric layout, strong accent color, dark mode by default.
- Palette: deep ink background (`#0E0E0F`), bone foreground (`#F4F1EA`), electric accent (lime `#D7FF3A` or coral — finalized at build time), muted gray for secondary.
- Typography: heavy display serif (e.g. Instrument Serif / Fraunces) for the name, mono (JetBrains Mono) for labels/metadata, clean sans (Inter/Geist) for body.
- Subtle motion: fade-in on scroll, hover scale on project cards, animated marquee of tech stack.

### Sections (single page, anchor nav)
1. **Hero** — Huge "ROKESH V." display, role tagline, location + contact chips, primary CTA "Download Resume" + secondary "Get in touch".
2. **About / Summary** — Two-column: short bio on left, education + CGPA highlight card on right.
3. **Skills** — Categorized grid (Languages, Frontend, Backend, Databases, Mobile, AI/CV, Tools, CS Core) as tag chips.
4. **Projects** — 3 large project cards (MediScan AI, SABLE, SyncSpace) with tech stack, bullets, accent border.
5. **Certifications & Achievements** — Compact list with icons.
6. **Coding profiles** — Linked cards for GitHub, LeetCode, HackerRank, SkillRack.
7. **Languages spoken** — Inline pill list.
8. **Contact / Footer** — Email, phone, LinkedIn, GitHub, career objective as closing statement.

### PDF resume
- Static PDF file generated once and placed in `public/rokesh-venkat-resume.pdf`, linked from every "Download Resume" button.
- Layout: clean professional one/two-page A4 — name header, contact row, summary, education, skills (grouped), projects (with tech + bullets), certifications, achievements, languages, objective.
- Generated using ReportLab/Platypus with proper typography, accent color matching the site, and visual QA via pdftoppm before shipping.

### Technical notes
- Pure frontend; no backend/Cloud needed.
- Replace `src/routes/index.tsx` placeholder with the portfolio page; add small components under `src/components/portfolio/` (Hero, Skills, Projects, etc.).
- Add SEO meta (title, description, og tags) for "Rokesh V — Software Engineer Portfolio".
- Add design tokens to `src/styles.css` (custom accent + display font imports via Google Fonts link in `__root.tsx` head).
- Smooth scroll for anchor nav; mobile-responsive.

### Deliverables
- Live portfolio at `/`.
- `public/rokesh-venkat-resume.pdf` downloadable from the hero CTA.
