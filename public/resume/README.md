# Resume Files

## 🔒 PROTECTED STATUS - RESUME GENERATOR

**CRITICAL:** The `resume-generator.html` file has been **RESTORED and PROTECTED** as of commit `e3aaa88` (Oct 28, 2025).

### 🚨 DO NOT MODIFY WITHOUT EXPLICIT AUTHORIZATION

This file is the **WORKING BASELINE** restored from original Web Claude implementation (commit `0bb2334`):

- ✅ **All three templates work**: Classic, Modern, Minimal
- ✅ **PDF download functional**: Print dialog triggers correctly  
- ✅ **Style switching operational**: Buttons work properly
- ✅ **Unicode characters fixed**: All icons display correctly
- ✅ **Known-good reference**: Use for React conversion attempts

### 🔄 Current Status

**Important:** The `resume-generator.html` file is currently **manually maintained** and not automatically generated from `src/data/resumeData.ts`. 

### Data Source Issue

The resume generator HTML file has hardcoded data embedded directly in the HTML template. This means:

1. ✅ The main portfolio site (React app) uses `src/data/resumeData.ts` as the single source of truth
2. ❌ The `resume-generator.html` file has duplicate data that can get out of sync
3. ❌ Manual updates are required whenever resume data changes

### Recommended Solutions

To fix this architectural issue, consider one of these approaches:

#### Option 1: Generate HTML from TypeScript (Recommended)
- Create a build script that reads `src/data/resumeData.ts` and generates `resume-generator.html`
- Run this script before deploying
- Integrate into the build process (`npm run build`)

#### Option 2: Load Data via JSON API
- Export `resumeData.ts` to JSON
- Serve via a static JSON file or API endpoint
- Have the HTML file fetch and render the data dynamically

#### Option 3: React-based Resume Generator
- Convert the HTML generator into a React component
- Share the same `resumeData.ts` as the main portfolio
- Built as part of the Vite app

### Current Manual Process

When updating resume data:

1. Update `src/data/resumeData.ts` (main source)
2. Manually update `public/resume/resume-generator.html` to match
3. Rebuild the site: `npm run build`
4. Regenerate PDFs: `npm run resumes`

### Files

- `resume-generator.html` - Static HTML resume generator (manually maintained)
- `garth_classic_resume.pdf` - Generated PDF (classic format)
- `garth_modern_resume.pdf` - Generated PDF (modern format)
- `garth_exec_resume.pdf` - Generated PDF (executive format)

### TODO

- [ ] Create automated HTML generation from TypeScript data source
- [ ] Remove duplicate data maintenance burden
- [ ] Ensure single source of truth for all resume formats

