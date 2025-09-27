# Contributing

Thanks for helping improve the Garth Puckerin portfolio! A few quick notes before you open a pull request:

## Branch Strategy

- `main` – production. Update only via PRs that originate from `develop`.
- `develop` – integration. Branch feature work from here (`feature/<topic>`).
- Keep feature branches focused and short-lived; rebase or merge `develop` regularly to reduce conflicts.

## Setup

```bash
npm install
npm run dev
```

## Quality Gates

Before submitting a PR, please run:

```bash
npm run lint
npm run build
```

Address ESLint warnings and ensure the Vite build completes without errors.

## Pull Request Checklist

- [ ] Updating documentation when behaviour or workflows change.
- [ ] Attaching relevant screenshots/gifs for UI tweaks.
- [ ] Describing testing performed (manual + automated) in the PR body.
- [ ] Requesting review from @garthpuckerin once checks pass.

## Deployment

Production pushes go through GoDaddy hosting. See the README for the current manual deployment steps. Please do not deploy without explicit approval.

