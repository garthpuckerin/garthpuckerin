# Resume Assets

This folder contains multiple resume generation methods for different use cases.

## Resume Generation Methods

### 1. Centralized Data Source (Primary)
**File:** `src/data/resumeData.ts`

Single source of truth for all resume information:
- TypeScript interfaces ensure data consistency
- Used by both portfolio site and resume generator
- Merged AI-focused and project management content
- Update once, both site and PDFs update automatically

**Use case:** Primary method for maintaining resume content

### 2. Interactive HTML Generator (Styled PDFs)
**Files:** 
- `resume-modal.html` - Style selection interface
- `resume-generator.html` - Full resume generator with print-to-PDF

**Features:**
- Three professional styles: Classic, Modern, Minimal
- Visual previews of each style
- Print-optimized layouts with colors and proper typography
- URL parameter support for pre-selecting style (`?style=modern`)
- Uses centralized data from `src/data/resumeData.ts`

**Use case:** Professional, styled resumes with visual appeal

### 3. Python Script (Basic PDFs)
**Command:** `npm run resumes`

Generates basic PDF files using Python:
- `garth_modern_resume.pdf` - AI/automation focused content
- `garth_classic_resume.pdf` - Traditional format
- `garth_exec_resume.pdf` - Executive summary

**Use case:** Quick generation of simple, ATS-friendly PDFs

### 4. Markdown Source Files
**Files:**
- `garth_modern_resume.md` - Modern single-column format
- `garth_classic_resume.txt` - Plain text ATS-friendly layout  
- `garth_exec_resume.md` - Executive summary format

**Export to PDF:**
```bash
pandoc garth_modern_resume.md -o garth_modern_resume.pdf
pandoc garth_exec_resume.md -o garth_exec_resume.pdf
```

## Content Management

### Updating Resume Content
1. **Edit** `src/data/resumeData.ts`
2. **Both** portfolio site and HTML generator automatically use updated data
3. **Python script** may need manual updates to stay in sync

### Content Differences
- **Centralized Data**: Merged AI/automation + project management focus
- **HTML Generator**: Uses centralized data with professional styling
- **Python Script**: Legacy AI/automation focused content
- **Markdown Files**: Balanced content suitable for various roles

## Usage Recommendations

- **Corporate/ATS**: Use Python script or Classic HTML style
- **Creative/Tech**: Use Modern HTML style  
- **Senior/Consulting**: Use Minimal HTML style or Executive markdown
- **Quick Generation**: Use Python script
- **Custom Styling**: Use HTML generator
- **Content Updates**: Edit `src/data/resumeData.ts`

## Integration

The portfolio site's Hero component now:
- Uses centralized data for personal information and summary
- Links to HTML generator instead of Python PDFs
- Maintains theme-aware modal design
- Provides seamless user experience

Update these files whenever the site content changes so the resume remains in sync.
