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

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Runs Vite in dev mode with fast HMR. Visit the printed localhost URL.

### Linting & Formatting

```bash
npm run lint
```

The lint script uses ESLint with TypeScript rules. Address findings prior to PR submission.

### Production Build

```bash
npm run build
```

Outputs an optimized bundle to `dist/` for deployment.

## Project Structure

```
+-- public/           # static assets (favicons, logos)
+-- src/
¦   +-- assets/       # optimized imagery for hero/contact/about/experience
¦   +-- components/   # section components (Hero, Experience, Skills, Projects, etc.)
¦   +-- context/      # ThemeContext for original/light/dark support
¦   +-- lib/          # utility helpers (e.g., className combiner)
¦   +-- App.tsx       # top-level layout wiring all sections
¦   +-- main.tsx      # React entry (with ThemeProvider, Tailwind)
+-- package.json
+-- README.md
```

## Theming

The site cycles through three presentation modes via the header toggle:

1. **Original** – Signature cyan/blue gradient over slate neutrals.
2. **Light** – High-contrast warm gray palette with light borders around interactive elements.
3. **Dark** – Deep slate backgrounds with cyan highlights for low-light viewing.

Selection is stored in `localStorage` and applied via the `ThemeContext` wrapper.

## Branching & Workflow

- **main** – Production-ready branch. Mirrors what is deployed to garthpuckerin.com.
- **develop** – Integration branch for staging features before release.
- **feature/*** – Short-lived branches for individual pieces of work. Example: `feature/theme-toggle`.

### Contribution Flow

1. Branch from `develop` using a descriptive `feature/<topic>` name.
2. Commit changes with conventional prefixes (e.g., `feat:`, `fix:`, `docs:`).
3. Push and open a PR targeting `develop`.
4. Use GitHub auto-merge with squash once checks pass (branch protection permitting).
5. Periodically sync `develop` into open feature branches to minimize conflicts.
6. Promote `develop` ? `main` when ship-ready; tag releases if desired.

## Tooling

- .editorconfig keeps whitespace and newline rules consistent across editors.
- .prettierrc defines the shared formatting profile (run 
px prettier --write . as needed).
- CONTRIBUTING.md outlines the branching and PR expectations.

## Deployment (GoDaddy)

1. Run `npm run build` to produce the `dist/` directory.
2. Upload contents of `dist/` to GoDaddy hosting (via SFTP or the hosting file manager).
3. Ensure the root serves `/index.html`; configure caching/CDN as needed.
4. Verify functionality (theme toggle, contact links) post-deploy.

For automations, consider GitHub Actions producing artifacts you can upload to GoDaddy, or use a bucket/CDN (Azure Blob, S3) behind the domain.

## Asset Notes

- Hero and contact imagery live in `src/assets/`; keep originals in the repo root for future editing.
- Company logos follow a square format sized for circular badges.
- Update both `favicon` and hero avatar if branding changes.

## Roadmap Ideas

- Automated accessibility check (axe, Lighthouse CI).
- Storybook or Chromatic for visual regression.
- Capture analytics events for contact interactions.
- Service worker for offline viewing.

## License

This portfolio is proprietary to Garth Puckerin. Contact the owner for reuse permissions.


