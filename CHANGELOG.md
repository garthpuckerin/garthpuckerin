# Changelog

All notable changes to the Garth Puckerin Portfolio project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-06

### 🎯 MAJOR RELEASE: Perfect Resume Templates

#### Added
- **Dynamic @page Rules System**: Template-specific margin control via JavaScript injection
- **Complete Browser Print Suppression**: Eliminates date/time, document title, location, and page numbers
- **TypeScript Resume Generator**: Automated HTML generation from `src/data/resumeData.ts`
- **Edge-to-Edge Modern Template**: True zero-margin printing with full page utilization
- **Dual Padding Strategy**: Different display vs. print margins for optimal UX
- **Automatic Company Name Cleaning**: Removes abbreviations from minimal template
- **Enhanced Education Section**: Detailed coursework breakdown for Full Stack curriculum
- **Consistent Contact Ordering**: Standardized contact information across all templates

#### Changed
- **Minimal Template Margins**: Reduced print margins from 0.75in to 0.25in for better space utilization
- **Display Margins**: Increased minimal template display padding to 0.5in for better readability
- **Font Size Consistency**: Aligned display and print font sizes across all templates
- **Modern Template Architecture**: Complete rewrite for professional edge-to-edge printing

#### Fixed
- **Classic Template Print Headers**: Restored proper page headers with name on continuation pages
- **Text Wrapping Issues**: Optimized margins prevent long company names from wrapping dates
- **Browser Print Artifacts**: Complete suppression of unwanted browser-generated content
- **Template Switching**: Proper margin application when switching between templates

#### Technical Improvements
- **setPageMargins() Function**: Dynamic @page rule injection per template type
- **Print Color Preservation**: Exact color rendering with `-webkit-print-color-adjust: exact`
- **Template Detection**: Automatic identification and optimization of active template
- **Build Integration**: Resume generation included in `npm run build` process

### Templates Overview

#### Classic Template
- Professional formatting with traditional margins (0.75in top/bottom, 0.5in left/right)
- Page headers with name on continuation pages
- Clean typography suitable for traditional roles
- Complete browser print suppression

#### Modern Template  
- Edge-to-edge printing with zero margins
- Two-column layout with dark sidebar and white main content
- Full page height utilization (100vh)
- Professional full-bleed design

#### Minimal Template
- Space-optimized with 0.25in print margins
- Comfortable 0.5in display margins
- Automatic company name abbreviation removal
- Perfect balance of content density and readability

### Migration Notes
- Resume generator now fully automated - no manual HTML editing required
- All content updates should be made in `src/data/resumeData.ts`
- Run `npm run generate:resumes` after data changes
- Legacy manual process deprecated

---

## [0.x] - 2025-10-28 and earlier

### Legacy Releases
- Initial portfolio development
- Manual resume template creation
- React component development
- Theme system implementation
- Basic resume generation scripts

### Archive
Previous versions used manual HTML maintenance and basic print CSS. These approaches have been superseded by the v1.0.0 automated system with advanced print optimization.