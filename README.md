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

### Portfolio Demo System v1.2.0 🚀 (Current)

**Project Demonstrations**: Strategic expansion of the highlighted projects section with live demo pages for select repositories:

- **Epic**: Full-stack application showcase demonstrating enterprise architecture
- **PDE (Professional Development Ecosystem)**: Standalone platform with integrated VS Code extension
- **Dreamcatcher**: AI conversation organizer showcasing modern ML capabilities
- **GrantTracker 2.0**: Enterprise grant management platform with compliance automation

**Demo Features**:
- **Non-disruptive Design**: Preserves current portfolio layout and functionality
- **Live Demonstrations**: Interactive showcases with real project walkthroughs
- **Technical Deep-dives**: Architecture overviews and code implementation highlights
- **Commercial Focus**: Business value and enterprise capability demonstration

**Implementation Strategy**:
```bash
# Demo routing system
/demos/epic           # Epic project comprehensive showcase
/demos/pde            # PDE ecosystem with VS Code extension demo
/demos/dreamcatcher   # AI conversation processing demonstration
/demos/granttracker   # Enterprise grant management platform showcase
```

**Development Phases**:
1. **Sprint 1**: Demo infrastructure and protected workflow setup
2. **Sprint 2**: Epic demo implementation (proof of concept)
3. **Sprint 3**: PDE ecosystem showcase with dual-platform demo
4. **Sprint 4**: Dreamcatcher and GrantTracker demos with system optimization
5. **Sprint 5**: Production deployment and monitoring setup

See [`SPRINT_PLAN.md`](SPRINT_PLAN.md) for detailed implementation timeline and [`CONTRIBUTING.md`](CONTRIBUTING.md) for development workflow.

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

## Branching & Workflow v1.2.0

### **Protected Branches**
Both `main` and `develop` branches are **PROTECTED** and require:

- ✅ **Pull Request Reviews** (minimum 1 approval)
- ✅ **Status Checks** (CI must pass: lint, build)
- ✅ **Up-to-date branches** before merge
- ✅ **No direct pushes** allowed
- ✅ **Force push protection** enabled

### **Development Workflow**
```bash
# All work starts from develop (never main)
git checkout develop && git pull origin develop

# Create feature branch
git checkout -b feature/demo-epic

# Work, commit, push
git push origin feature/demo-epic
# Create PR: feature/demo-epic → develop

# After PR approval and merge to develop
# Release process: develop → main (via protected PR)
```

### **Branch Strategy**
- **main** – Production-ready branch deployed to garthpuckerin.com (**PROTECTED**)
- **develop** – Integration branch for staging features before release (**PROTECTED**)
- **feature/*** – All new work branches from develop (e.g., `feature/demo-infrastructure`)

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for complete workflow documentation and [`BRANCH_STRATEGY.md`](BRANCH_STRATEGY.md) for protection configuration.

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
