// Centralized resume data - single source of truth for portfolio site and resume generator
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  accomplishments: string[];
  logo?: string;
  logoAlt?: string;
}

export interface EducationItem {
  institution: string;
  program: string;
  year: string;
  description: string;
  coursework: {
    title: string;
    items: string[];
  }[];
  logo?: string;
  logoAlt?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ResumeData {
  personal: PersonalInfo;
  summary: string;
  coreCompetencies: string[];
  experience: ExperienceItem[];
  education: EducationItem;
  technicalSkills: SkillCategory[];
}

// Merged content combining AI/automation focus with project management emphasis
export const resumeData: ResumeData = {
  personal: {
    name: "Garth Puckerin",
    title: "LMS Administrator & Learning Technology Specialist",
    location: "East Stroudsburg, PA",
    email: "garth.puckerin@me.com",
    phone: "(718) 310-8707",
    linkedin: "linkedin.com/in/garthpuckerin",
    github: "github.com/garthpuckerin"
  },

  summary: "Project-focused Learning & Development Specialist and LMS Administrator with 10+ years of experience leading enterprise learning initiatives across financial, healthcare, and technology environments. Skilled in configuring, testing, and deploying LMS platforms, coordinating cross-functional integrations, and managing soft-launch readiness through structured UAT. Recognized for bridging technical and operational goals, ensuring compliance, and delivering scalable, user-friendly learning ecosystems. Combines system expertise with agentic AI workflows to automate diagnostics, accelerate content operations, and surface real-time insights so global audiences keep learning without disruption.",

  coreCompetencies: [
    "LMS Operations",
    "Compliance & Audit Readiness", 
    "GenAI Automation",
    "Incident Management",
    "Analytics & KPI Reporting",
    "Integration Architecture",
    "Vendor & Stakeholder Management",
    "LMS Governance and Automation Roadmaps",
    "Stakeholder Enablement and Change Communications",
    "Executive Analytics and KPI Storytelling"
  ],

  experience: [
    {
      company: "Federal Home Loan Bank of Chicago (FHLBC)",
      role: "Learning Management & Integration Consultant",
      period: "Aug 2025 - Nov 2025",
      accomplishments: [
        "Directed integration efforts between Docebo, Udemy, Outlook, Teams, SSO, and SharePoint to streamline training workflows",
        "Authored UAT test scripts and executed content validation in sandbox and production environments",
        "Collaborated with HRIS and IT teams to configure authentication and permissions for pilot cohorts",
        "Set up LMS platform for soft launch post-UAT with user provisioning and issue tracking"
      ],
      logo: "/src/assets/logos/federal_home_loan_bank_of_chicago_logo.jpg",
      logoAlt: "Federal Home Loan Bank of Chicago logo"
    },
    {
      company: "Citadel Credit Union",
      role: "L&D Specialist (Interim LMS Administrator)",
      period: "Aug 2025 - Nov 2025",
      accomplishments: [
        "Provided temporary coverage for LMS team during maternity leave, ensuring business continuity",
        "Assisted in UAT testing and content validation for Docebo platform updates"
      ],
      logo: "/src/assets/logos/citadel_federal_credit_union_logo.jpg",
      logoAlt: "Citadel Credit Union logo"
    },
    {
      company: "Entrust Corporation",
      role: "Business Systems Analyst – LMS",
      period: "Jun 2022 - Mar 2025",
      accomplishments: [
        "Managed global Docebo LMS configuration supporting 10,000+ users with SOC2-ready controls and 99.98% availability",
        "Integrated Workday, Salesforce, QuickSight, and LinkedIn Learning to automate KPIs and executive dashboards",
        "Led Tier I/II incident response, reducing mean-time-to-resolution by 38%",
        "Delivered HTML micro experiences and guided journeys that increased course completions by 22%",
        "Created system metrics and test plans for feature releases and audits",
        "Developed HTML-based custom notifications and learning modules"
      ],
      logo: "/src/assets/logos/entrust_logo.jpg",
      logoAlt: "Entrust Corporation logo"
    },
    {
      company: "Medidata Solutions (Dassault Systèmes)",
      role: "Learning Management System Administrator",
      period: "Nov 2020 - Jun 2022",
      accomplishments: [
        "Implemented Docebo LMS deployment and Okta SSO integration",
        "Developed training guides and admin workshops for self-service governance",
        "Built API monitors and analytics linking adoption to Sales pipeline performance",
        "Produced monthly executive scorecards and self-service knowledge bases"
      ],
      logo: "/src/assets/logos/medidata_logo.jpg",
      logoAlt: "Medidata Solutions logo"
    },
    {
      company: "Success Academy Charter Schools",
      role: "Learning Experience Platform Manager",
      period: "Feb 2019 - Nov 2019",
      accomplishments: [
        "Introduced LXP tools aligned with xAPI standards for data tracking and analytics",
        "Deployed xAPI-compliant LXP stack; integrated Whova and supporting event applications",
        "Automated cohort assignments, notifications, and reporting through custom API orchestration"
      ],
      logo: "/src/assets/logos/success_academy_charter_schools_logo.jpg",
      logoAlt: "Success Academy Charter Schools logo"
    },
    {
      company: "Boehringer Ingelheim Pharmaceuticals",
      role: "LMS Associate",
      period: "Oct 2016 - Jul 2018",
      accomplishments: [
        "Administered GxP-compliant training programs and resolved SCORM content issues",
        "Configured compliance-driven learning paths, SCORM validation, and global launch schedules",
        "Coordinated with QA/legal partners to maintain audit-ready documentation"
      ],
      logo: "/src/assets/logos/boehringer_ingelheim_logo.jpg",
      logoAlt: "Boehringer Ingelheim logo"
    },
    {
      company: "Montefiore Hospital",
      role: "Project Coordinator",
      period: "Oct 2015 - Jul 2016",
      accomplishments: [
        "Managed Epic Go-Live supporting 50,000+ users utilizing SuccessFactors LMS",
        "Coordinated training logistics across 7 locations with 120+ instructors and 50+ classrooms",
        "Tracked learner progress and completion rates for enterprise-wide training initiatives",
        "Produced ILT/WBT content, analytics dashboards, and an Access-based scheduling tool supporting 120+ trainers"
      ],
      logo: "/src/assets/logos/montefiore_health_system_logo.jpg",
      logoAlt: "Montefiore Health System logo"
    },
    {
      company: "American Express",
      role: "Regulatory Compliance Training Analyst",
      period: "Feb 2012 - Oct 2015",
      accomplishments: [
        "Oversaw enterprise-wide compliance training and SharePoint workflow migration",
        "Led global compliance training programs, migrating workflows to SharePoint and SumTotal",
        "Authored SCORM modules and delivered weekly/monthly/quarterly performance reporting"
      ],
      logo: "/src/assets/logos/amex_logo.jpg",
      logoAlt: "American Express logo"
    }
  ],

  education: {
    institution: "New York Code + Design Academy",
    program: "Software Engineering Bootcamp",
    year: "2018",
    description: "Immersive full-stack program covering JavaScript, Ruby on Rails, Python, SQL/PostgreSQL, API development, authentication, responsive design, Git/GitHub, and Agile delivery.",
    coursework: [
      {
        title: "Front-End",
        items: [
          "JavaScript",
          "HTML5",
          "CSS",
          "Bootstrap",
          "Materialize",
          "Responsive Design",
          "SASS"
        ]
      },
      {
        title: "Back-End",
        items: [
          "Ruby",
          "Rails",
          "Python",
          "SQL",
          "PostgreSQL",
          "Sinatra",
          "Heroku",
          "API Development",
          "User Authentication"
        ]
      },
      {
        title: "Tools",
        items: [
          "Git",
          "GitHub",
          "VS Code",
          "Atom",
          "Project Management"
        ]
      }
    ],
    logo: "/src/assets/logos/NYCDA_logo.jpg",
    logoAlt: "NYCDA logo"
  },

  technicalSkills: [
    {
      title: "LMS Platforms",
      items: [
        "Docebo",
        "Workday Learning",
        "SuccessFactors",
        "Cornerstone",
        "SumTotal",
        "Canvas"
      ]
    },
    {
      title: "Integrations & Standards",
      items: [
        "REST APIs",
        "SCORM/xAPI",
        "SAML",
        "OAuth2",
        "SSO"
      ]
    },
    {
      title: "Tools",
      items: [
        "Jira",
        "ServiceNow",
        "SharePoint",
        "Microsoft 365",
        "Teams",
        "Power Automate",
        "Tableau",
        "Power BI"
      ]
    },
    {
      title: "Development",
      items: [
        "JavaScript",
        "HTML5",
        "CSS",
        "SQL",
        "Python",
        "Git/GitHub"
      ]
    }
  ]
};

// Export individual sections for easy access
export const { personal, summary, coreCompetencies, experience, education, technicalSkills } = resumeData;
