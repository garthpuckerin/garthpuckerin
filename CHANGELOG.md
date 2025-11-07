# Changelog

All notable changes to the Garth Puckerin Portfolio project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - Planned (Portfolio Demo System) 🚀

### Planning Phase
- **Epic Demo**: Full-stack application showcase with live demonstration
- **PDE Demo**: Professional Development Ecosystem with VS Code extension integration  
- **Dreamcatcher Demo**: AI conversation organizer demonstration (optional)
- **Protected Workflow**: Enterprise-grade branch protection for main and develop
- **Demo Infrastructure**: Reusable components and routing system for project showcases
- **Commercial Focus**: Transform portfolio from resume site to capability demonstration

**Implementation Plan**: 5-sprint development cycle (November 6 - December 11, 2025)  
**Documentation**: See [SPRINT_PLAN.md](SPRINT_PLAN.md) and [CONTRIBUTING.md](CONTRIBUTING.md)

### Planned Features
- Non-disruptive demo integration preserving current portfolio functionality
- `/demos/*` routing for individual project showcases
- Live demo embedding with performance optimization
- Technical architecture documentation for each showcased project
- Enterprise-grade development workflow with protected branches

## [1.0.1] - 2025-11-06

### Fixed
- **Resume Modal Thumbnails**: Eliminated border gap in modern template thumbnail by removing container background
- **TypeScript Linting**: Resolved 5 linting errors in resume generator script
  - Added src/data to tsconfig.node.json include pattern
  - Changed let to const for non-reassigned variables
  - Removed unused summary variable from minimal template

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