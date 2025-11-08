# Contributing to Garth Puckerin Portfolio

This document outlines the development workflow and guidelines for contributing to the portfolio project, current version v1.2.0 with comprehensive mobile UX and browser enhancements.

## 🚫 **Protected Branches**

### **Branch Protection Rules**
Both `main` and `develop` branches are **PROTECTED** and require:

- ✅ **Pull Request Reviews** (minimum 1 approval)
- ✅ **Status Checks** (CI must pass: lint, build, test)
- ✅ **Up-to-date branches** before merge
- ✅ **No direct pushes** allowed (including admins)
- ✅ **Force push protection** enabled

### **Why Protection Matters**
- **main**: Production-ready code deployed to garthpuckerin.com
- **develop**: Integration branch ensuring stable feature development
- **Quality**: Prevents broken code from reaching staging or production
- **Commercial**: Protects professional reputation and demo reliability

## 🔄 **Development Workflow**

### **Standard Feature Development**
```bash
# 1. Start from develop (never main)
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/demo-epic
# or
git checkout -b feature/navbar-enhancement

# 3. Work on feature with regular commits
git add .
git commit -m "feat: add Epic demo page structure"

# 4. Push and create PR to develop
git push origin feature/demo-epic
# Create PR: feature/demo-epic → develop

# 5. After PR approval and merge, cleanup
git checkout develop
git pull origin develop
git branch -d feature/demo-epic
```

### **Demo System Development**
```bash
# Demo-specific branch naming
feature/demo-infrastructure    # Core demo routing and components
feature/demo-epic             # Epic project showcase
feature/demo-pde              # PDE ecosystem demonstration
feature/demo-dreamcatcher     # AI conversation organizer demo

# Documentation updates
feature/docs-demo-system      # Demo system documentation
hotfix/readme-demo-links      # Emergency documentation fixes
```

### **Release Process**
```bash
# After all features merged to develop
# Create release PR: develop → main

# 1. Ensure develop is ready
git checkout develop
npm run lint && npm run build && npm test

# 2. Create release PR
# develop → main (via GitHub UI with thorough review)

# 3. Tag release after merge
git checkout main
git pull origin main
git tag -a v1.2.0 -m "Mobile UX and browser enhancements release"
git push origin v1.2.0
```

## 📋 **Pull Request Guidelines**

### **PR Requirements**
- **Title**: Clear, descriptive (e.g., "feat: add Epic demo page with live showcase")
- **Description**: Problem solved, solution approach, testing done
- **Screenshots**: For UI changes, include before/after
- **Breaking Changes**: Clearly documented if any
- **Testing**: Confirm all CI checks pass

### **PR Template**
```markdown
## Description
Brief description of changes and motivation.

## Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to change)
- [ ] Documentation update

## Testing
- [ ] npm run lint passes
- [ ] npm run build succeeds
- [ ] All demo routes work correctly
- [ ] Responsive design verified
- [ ] Cross-browser testing completed

## Screenshots
(Include for UI changes)

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated if needed
```

## 🧪 **Quality Standards**

### **Code Quality**
- **Linting**: ESLint + TypeScript strict mode must pass
- **Formatting**: Prettier configuration enforced
- **Testing**: All new components require tests
- **Types**: Full TypeScript coverage, no `any` types
- **Performance**: Lighthouse scores 90+ for new pages

### **Demo-Specific Standards**
- **Responsive**: All demos work on mobile, tablet, desktop
- **Loading**: Demo pages load under 2 seconds
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Proper meta tags and structured data
- **Security**: No sensitive data in demo content

### **Asset Guidelines**
- **Images**: Optimized for web, multiple formats (WebP, JPEG)
- **Videos**: Compressed, autoplay disabled, accessibility captions
- **Icons**: SVG preferred, consistent sizing
- **Fonts**: Web fonts with fallbacks

## 🚨 **Emergency Procedures**

### **Hotfix Process**
For critical production issues only:

```bash
# 1. Create hotfix from main
git checkout main
git checkout -b hotfix/critical-demo-bug

# 2. Fix and test thoroughly
git commit -m "hotfix: resolve demo routing issue"

# 3. PR directly to main (admin override)
# Include detailed justification for bypassing protection

# 4. Merge hotfix back to develop
git checkout develop
git merge hotfix/critical-demo-bug
```

### **Rollback Procedures**
- **Version Tags**: Enable quick rollback to previous stable release
- **GitHub Releases**: Detailed release notes for each version
- **Backup Strategy**: Database backups before major deployments

## 📊 **Monitoring & Metrics**

### **Success Criteria**
- **CI Pipeline**: 100% pass rate on protected branches
- **Performance**: All pages load under 2 seconds
- **Accessibility**: Zero violations on accessibility scans
- **Security**: No vulnerabilities in dependency scans

### **Demo Metrics**
- **Engagement**: Time spent on demo pages
- **Conversion**: Contact form submissions from demo viewers
- **Technical**: GitHub repository views for showcased projects
- **Professional**: Inquiries mentioning specific demo projects

## 🛠 **Development Environment**

### **Required Tools**
- **Node.js** 18+ (LTS recommended)
- **npm** 9+ (comes with Node.js)
- **Git** 2.30+
- **VS Code** (recommended) with extensions:
  - ESLint
  - Prettier
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense

### **Environment Setup**

```bash
# Clone and setup
git clone https://github.com/garthpuckerin/garthpuckerin.git
cd garthpuckerin
npm install

# Development server
npm run dev

# Quality checks
npm run lint
npm run build
npm run generate:resumes
```

### **VS Code Configuration**
```json
// .vscode/settings.json (recommended)
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.includePackageJsonAutoImports": "auto"
}
```

## 📚 **Additional Resources**

- **README.md**: Project overview and setup instructions
- **SPRINT_PLAN.md**: Detailed 5-sprint demo expansion plan
- **BRANCH_STRATEGY.md**: Comprehensive branching and protection strategy
- **CHANGELOG.md**: Version history and release notes
- **REPOSITORY_REORGANIZATION.md**: Asset optimization documentation

## 🤝 **Getting Help**

For questions about:
- **Development Setup**: Check README.md prerequisites
- **Branch Protection**: Review this document and BRANCH_STRATEGY.md
- **Demo Implementation**: See SPRINT_PLAN.md for detailed guidance
- **Code Standards**: Run `npm run lint` for immediate feedback

Remember: The goal is building a **commercial-grade portfolio** that demonstrates enterprise-level development capabilities. Every contribution should reflect professional standards and attention to detail.

## 🚀 **Legacy Documentation**

### **Previous Workflow (Pre-v1.2.0)**

The following sections remain for reference but are superseded by the protected workflow above:

### **Quality Gates**
Before submitting a PR, please run:

```bash
npm run lint
npm run build
```

Address ESLint warnings and ensure the Vite build completes without errors.

### **Pull Request Checklist**
- [ ] Updating documentation when behaviour or workflows change.
- [ ] Attaching relevant screenshots/gifs for UI tweaks.
- [ ] Describing testing performed (manual + automated) in the PR body.
- [ ] Requesting review from @garthpuckerin once checks pass.

### **Deployment**
Production pushes go through GoDaddy hosting. See the README for the current manual deployment steps. Please do not deploy without explicit approval.

---

**Version**: 1.2.0 (Mobile UX & Browser Enhancements)  
**Last Updated**: November 7, 2025  
**Status**: Protected workflow active

