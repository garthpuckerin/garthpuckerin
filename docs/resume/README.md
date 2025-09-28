# Resume Assets

This folder contains ready-to-export resume drafts drawn from the portfolio content.

| File | Style | Notes |
|------|-------|-------|
| `garth_modern_resume.md` | Modern / single-column | Styled with Markdown front matter for Pandoc/LaTeX conversion. |
| `garth_classic_resume.txt` | Classic / plain text | ATS-friendly fixed-width layout. |
| `garth_exec_resume.md` | Executive summary | Concise highlight-driven sheet for senior roles. |

## Exporting to PDF

You can convert the Markdown variants to PDF with Pandoc (requires LaTeX) or similar tools:

```bash
pandoc garth_modern_resume.md -o garth_modern_resume.pdf
pandoc garth_exec_resume.md -o garth_exec_resume.pdf
```

For the plain-text version, copy into your preferred word processor and apply branding as needed.

Update these files whenever the site content changes so the resume remains in sync.

## Automation

Run `npm run resumes` from the project root to regenerate the PDF bundle consumed by the site.
