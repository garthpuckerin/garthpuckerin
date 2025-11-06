# Resume Assets v1.0.1

This folder contains the **PERFECTED** resume generation system with multiple output methods.

## Resume Generation Methods

### 1. Interactive HTML Generator (PRIMARY - PERFECTED) ⭐
**Files:** 
- `resume-generator.html` - **Perfect** three-template generator with advanced print optimization

**Revolutionary Features:**
- **Dynamic @page Rules**: Template-specific margins via JavaScript injection
- **Complete Browser Suppression**: Eliminates all browser headers/footers/page numbers
- **Edge-to-Edge Modern**: True zero-margin printing with full page utilization
- **Optimized Minimal**: Dual padding strategy (0.5in display / 0.25in print)
- **Clean Company Names**: Automatic abbreviation removal in minimal template
- **Perfect Typography**: Font size consistency across display and print
- **TypeScript Generated**: Automatically built from centralized data source

**Three Perfect Templates:**
- **Classic**: Professional with page headers, traditional margins (0.75in/0.5in)
- **Modern**: Edge-to-edge two-column with dark sidebar, zero margins
- **Minimal**: Space-optimized with clean company names, dual padding

**Use case:** Professional, print-perfect resumes for all scenarios

### 2. Centralized Data Source (FOUNDATION)
**File:** `src/data/resumeData.ts`

Single source of truth for all resume information:
- TypeScript interfaces ensure data consistency
- Enhanced with detailed education coursework breakdown
- Consistent contact information ordering
- Used by both portfolio site and resume generator
- Automatic HTML generation via `npm run generate:resumes`

**Use case:** Primary method for maintaining resume content

### 3. Python Script (Legacy - Basic PDFs)
**Command:** `npm run resumes`

Generates basic PDF files using Python:
- `garth_modern_resume.pdf` - AI/automation focused content
- `garth_classic_resume.pdf` - Traditional format
- `garth_exec_resume.pdf` - Executive summary

**Use case:** Quick generation of simple, ATS-friendly PDFs (legacy method)

### 4. Markdown Source Files (Archive)
**Files:**
- `garth_modern_resume.md` - Modern single-column format
- `garth_classic_resume.txt` - Plain text ATS-friendly layout  
- `garth_exec_resume.md` - Executive summary format

**Use case:** Archive/backup formats for reference

## Technical Architecture

### Automated Generation Pipeline
```bash
npm run generate:resumes  # TypeScript → HTML generation
npm run build            # Includes resume generation
```

**🔒 PROTECTED STATUS - Generated HTML**
- The output `public/resume/resume-generator.html` is **PROTECTED**
- Manual HTML modifications are **STRICTLY PROHIBITED** 
- All changes must be made via TypeScript generator or data source
- Direct HTML edits will be **OVERWRITTEN** on next generation cycle
- Generator modifications require **EXPLICIT APPROVAL**

### Print Optimization System
- **setPageMargins()**: Dynamic @page rule injection per template
- **Browser Suppression**: Complete elimination of unwanted print elements
- **Template Detection**: Automatic margin application based on active template
- **Print-Color-Adjust**: Exact color preservation for professional output

### Template-Specific Features
```css
/* Classic Template */
@page { margin: 0.75in 0.5in 0.5in 0.5in; }

/* Modern Template */  
@page { margin: 0; }

/* Minimal Template */
@page { margin: 0.75in 0.25in 0.5in 0.25in; }
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
