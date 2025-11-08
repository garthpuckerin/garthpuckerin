// AEO Enhancement: Expanded structured data for AI engines
// This would replace/enhance the current JSON-LD in index.html

export const aeoStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Garth Puckerin",
  "url": "https://www.garthpuckerin.com/",
  "email": "garth.puckerin@me.com",
  "jobTitle": "LMS Administrator & Learning Technology Strategist",
  "description": "Senior LMS administrator with 10+ years experience in enterprise learning technology, AI-powered educational solutions, and full-stack development.",
  
  // Enhanced for AI understanding
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Learning Management System Administrator",
    "responsibilities": [
      "Enterprise LMS implementation and optimization",
      "AI-powered learning solutions development", 
      "Full-stack application development",
      "Educational technology strategy"
    ],
    "skills": [
      "Docebo", "Workday Learning", "SuccessFactors", 
      "React", "TypeScript", "Python", "FastAPI",
      "AI/ML integration", "Grant management systems"
    ]
  },
  
  "knowsAbout": [
    "Learning Management Systems",
    "Educational Technology",
    "AI in Education", 
    "Full-Stack Development",
    "Grant Management",
    "Enterprise Software",
    "Compliance Automation",
    "React Development",
    "TypeScript",
    "Python"
  ],
  
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Entrust",
      "description": "Senior Learning Technology Specialist"
    },
    {
      "@type": "Organization", 
      "name": "Medidata Solutions",
      "description": "Learning Technology Administrator"
    }
  ],
  
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "New York Code + Design Academy",
    "description": "Full Stack Web Development Certificate"
  },
  
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "Full Stack Web Development Certificate",
      "credentialCategory": "Professional Certification"
    }
  ],
  
  "sameAs": [
    "https://linkedin.com/in/garthpuckerin",
    "https://github.com/garthpuckerin"
  ],
  
  "address": {
    "@type": "PostalAddress", 
    "addressLocality": "East Stroudsburg",
    "addressRegion": "PA",
    "addressCountry": "US"
  },
  
  // Projects for AI discovery
  "hasCreated": [
    {
      "@type": "SoftwareApplication",
      "name": "Epic 2025",
      "description": "Modernization of legacy Microsoft Access scheduling system into secure, web-first platform",
      "applicationCategory": "Enterprise Software"
    },
    {
      "@type": "SoftwareApplication", 
      "name": "PDE/IPDE",
      "description": "AI-augmented development environment and VS Code extension for automated code generation",
      "applicationCategory": "Developer Tools"
    },
    {
      "@type": "SoftwareApplication",
      "name": "GrantTracker 2.0", 
      "description": "Grant lifecycle management system for educational institutions and non-profits",
      "applicationCategory": "Educational Software"
    },
    {
      "@type": "SoftwareApplication",
      "name": "Dreamcatcher",
      "description": "AI conversation processing system for project management and knowledge building", 
      "applicationCategory": "AI Software"
    }
  ]
};