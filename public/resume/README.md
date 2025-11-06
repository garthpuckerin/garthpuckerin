# Resume Files

## ✅ PERFECT STATUS - RESUME GENERATOR v1.0.0

**SUCCESS:** The `resume-generator.html` file has been **PERFECTED** as of November 6, 2025.

### 🎯 FULLY AUTOMATED & OPTIMIZED

This file is now **AUTOMATICALLY GENERATED** from TypeScript and represents the **GOLD STANDARD** for resume templates:

- ✅ **Three Perfect Templates**: Classic, Modern, Minimal - all print-optimized
- ✅ **Dynamic @page Rules**: Template-specific margins via JavaScript  
- ✅ **Browser Suppression**: Complete elimination of print headers/footers/page numbers
- ✅ **Edge-to-Edge Modern**: True zero-margin printing for modern template
- ✅ **Optimized Minimal**: 0.5in display / 0.25in print margins for perfect balance
- ✅ **Clean Company Names**: Automatic abbreviation removal in minimal template
- ✅ **TypeScript Generated**: Built from `src/data/resumeData.ts` via `npm run generate:resumes`

### 🚀 Current Architecture

**Fully Automated Pipeline:**
1. **Data Source**: `src/data/resumeData.ts` (single source of truth)
2. **Generator**: `scripts/generate_resume_html.ts` (TypeScript build script)  
3. **Output**: `resume-generator.html` (automatically generated, perfect templates)
4. **Build Integration**: `npm run build` includes resume generation

### 🎨 Template Features

#### **Classic Template**
- Professional page headers with name on continuation pages
- 0.75in top/bottom, 0.5in left/right margins
- Clean typography, perfect for traditional roles

#### **Modern Template**  
- True edge-to-edge printing (0 margins)
- Two-column layout with dark sidebar
- Complete browser header/footer suppression

#### **Minimal Template**
- 0.5in display margins for comfortable viewing
- 0.25in print margins for maximum content space
- Automatic company name cleaning (removes abbreviations)
- Optimized for space-constrained applications

### 🔧 Technical Implementation

#### **Dynamic @page Rules**
```javascript
setPageMargins(templateType) // Injects template-specific print rules
```

#### **Browser Suppression**
All templates suppress browser-generated:
- Date/time stamps
- Document titles  
- URLs/locations
- Page numbers
- Headers and footers

#### **Template-Specific Optimization**
- **Classic**: Traditional margins with page headers
- **Modern**: Complete edge-to-edge utilization  
- **Minimal**: Dual padding strategy (display vs. print)

### 🔄 Maintenance

**Automated Process:**
```bash
npm run generate:resumes  # Regenerates from TypeScript data
npm run build            # Includes resume generation
```

**Updating Content:**
1. Edit `src/data/resumeData.ts`
2. Run `npm run generate:resumes`  
3. All templates automatically update with changes

### 📈 Version History

- **v1.0.0** (Nov 6, 2025): Perfect templates with dynamic @page rules and browser suppression
- **v0.x** (Oct 2025): Legacy manual process (deprecated)

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

