# Garth Puckerin Portfolio

A polished, theme-aware personal portfolio for LMS administration expert Garth Puckerin. Built with React, TypeScript, and Tailwind CSS on top of Vite for fast local development and deployment-ready builds.

## Highlights

- **Modern UI/UX** – Responsive layout with hero, experience timeline, projects, skills, education, and contact sections.
- **Theme System** – Original, light, and dark modes with persistent selection and accessible color contrast.
- **Rich Content** – Includes detailed professional experience, core competencies, AI tooling expertise, and project spotlights.
- **Optimized Assets** – Custom headshot, favicon, and employer logos tailored for the design.
- **Contact Ready** – Mailto-driven form, tel links, and social badges wired to the live accounts.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- lucide-react icon set
- ESLint + TypeScript strict configs

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Python 3 (for résumé regeneration)

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Runs Vite in dev mode with fast HMR. Visit the printed localhost URL.

### Quality Gates

```bash
npm run lint
npm run build
```

### Résumé System v1.0.1 ⭐

```bash
npm run generate:resumes
```

**Perfect Resume Generator**: Automatically builds `public/resume/resume-generator.html` from TypeScript data source with three print-optimized templates:

- **Classic**: Professional with page headers (0.75in/0.5in margins)
- **Modern**: Edge-to-edge two-column design (zero margins)  
- **Minimal**: Space-optimized with clean formatting (0.25in print margins)

**Advanced Features**:
- Dynamic @page rules for template-specific print optimization
- Complete browser header/footer suppression (no dates, URLs, page numbers)
- Automatic company name cleaning in minimal template
- TypeScript-generated from `src/data/resumeData.ts` single source of truth

**Legacy Python Script**:
```bash
npm run resumes  # Generates basic PDFs from docs/resume/
```

## Project Structure

```
.
├── public/              # static assets (favicons, logos, resume PDFs)
├── src/
│   ├── assets/          # imagery for hero/contact/about/experience
│   ├── components/      # section components (Hero, Experience, Skills, Projects, etc.)
│   ├── context/         # ThemeContext for original/light/dark support
│   ├── lib/             # utility helpers (e.g., className combiner)
│   ├── App.tsx          # top-level layout wiring all sections
│   └── main.tsx         # React entry (with ThemeProvider, Tailwind)
├── scripts/             # maintenance utilities (resume generator)
├── docs/resume/         # editable résumé content + instructions
└── README.md
```

## Theming & Accessibility

- Theme toggle cycles **Original → Dark → Light**, persisted in `localStorage`.
- Keyboard-first users get a visible “Skip to main content” link and focus outlines.
- Resume modal traps focus, closes on `Esc`, and exposes appropriate ARIA roles.
- Section headings follow a logical hierarchy for screen readers.

## SEO & Metadata

The HTML head includes meta tags for description, keywords, Open Graph/Twitter cards, a canonical URL, and JSON-LD `Person` structured data so search engines have full context.

## CI Pipeline

`.github/workflows/ci.yml` runs lint and build on pushes and pull requests targeting `main` or `develop` (and feature branches). Keep the pipeline green before merging.

## Branching & Workflow

- **main** – Production-ready branch deployed to garthpuckerin.com.
- **develop** – Integration branch for staging features before release.
- **feature/*** – Short-lived branches for individual pieces of work (e.g., `feature/theme-toggle`).

### Contribution Flow

1. Branch from `develop` using a descriptive `feature/<topic>` name.
2. Commit changes with conventional prefixes (`feat:`, `fix:`, `docs:` …).
3. Push and open a PR targeting `develop`.
4. Ensure CI passes (`npm run lint`, `npm run build`).
5. Use GitHub auto-merge with squash once checks pass (branch protection permitting).
6. Promote `develop` → `main` when ship-ready; tag releases if desired.

### Tooling Notes

- `.editorconfig` keeps whitespace and newline rules consistent across editors.
- `.prettierrc` defines the shared formatting profile (run `npx prettier --write .` as needed).
- `CONTRIBUTING.md` outlines the branching and PR expectations.

## Deployment (GoDaddy)

1. Run `npm run build` to produce the `dist/` directory.
2. Upload the contents of `dist/` to GoDaddy hosting (SFTP or file manager).
3. Ensure the root serves `/index.html`; configure caching/CDN as needed.
4. Verify theme toggle, resume modal, and contact links post-deploy.

For automation, consider GitHub Actions artifacts or syncing to a bucket/CDN (Azure Blob, S3) behind the domain.

## Asset Notes

- Hero and contact imagery live in `src/assets/`; optimized for performance and consistency.
- Company logos standardized on `_logo.jpg` format for uniform presentation.
- Repository optimized December 2024 - see `REPOSITORY_REORGANIZATION.md` for details.

## Repository Status

**Version:** 1.0.1  
**Last Optimized:** December 20, 2024  
**Repository Size:** 159.66 MB (11,781 files)  
**Status:** Clean and production-ready

## Roadmap Ideas

- Automated accessibility and Lighthouse audits in CI
- Storybook/Chromatic for visual regression coverage
- Analytics events for resume downloads and contact interactions
- Service worker for offline caching

## License

This portfolio is proprietary to Garth Puckerin. Contact the owner for reuse permissions.
