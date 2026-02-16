export type Project = {
    title: string;
    subtitle?: string;
    description: string;
    highlights: string[];
    tech: string[];
    role: string;
    link?: string;
    repo?: string;
    status?: string;
    internalLink?: string;
};

export const projects: Project[] = [
    {
        title: "GrantTracker 2.0",
        subtitle: "Knowledge-Governed Grant Lifecycle System",
        description:
            "Multi-stakeholder grant management platform treating compliance knowledge as governed infrastructure. Automated tracking, audit trails, and modular workflows that adapt across organizational contexts without manual rework.",
        role: "Systems Architect & Lead Developer",
        highlights: [
            "Designed modular workflow architecture adaptable across institution types",
            "Built automated compliance monitoring with sponsor-aware logic (2 CFR 200)",
            "Integrated multi-agent AI for proactive spending insights and policy queries",
        ],
        tech: [
            "Next.js 16",
            "tRPC",
            "Prisma",
            "PostgreSQL",
            "Clerk Auth",
            "Tailwind CSS",
        ],
        status: "Production Ready",
        internalLink: "/projects/grant-tracker",
        link: "https://grant-tracker2-0-demo.vercel.app/",
    },
    {
        title: "Dreamcatcher",
        subtitle: "AI Knowledge Capture & Context Preservation",
        description:
            "Canonical knowledge spine that captures, organizes, and contextualizes AI interaction fragments — separating truth from presentation and enabling semantic retrieval across distributed project contexts.",
        role: "Knowledge Systems Architect",
        highlights: [
            "Built semantic search and context preservation across conversation threads",
            "Designed canonical knowledge structures with automated topic clustering",
            "Created feedback loops surfacing knowledge gaps and drift signals",
        ],
        tech: [
            "Python",
            "FastAPI",
            "React",
            "PostgreSQL",
            "Vector DB",
            "Docker",
        ],
        status: "Open Source",
        internalLink: "/projects/dreamcatcher",
    },
    {
        title: "EPIC 2025",
        subtitle: "Scaling Trainer-Led Enablement Infrastructure",
        description:
            "Modernizing a legacy scheduling system that coordinated 120+ trainers across 7 locations into a governed, web-first platform with RBAC, audit trails, and automated reporting — reducing manual overhead while preserving operational fidelity.",
        role: "Systems Modernization Lead",
        highlights: [
            "Migrated legacy data models to SQL Server with governed ETL pipelines",
            "Introduced RBAC, audit trails, and governance for multi-site training operations",
            "Delivered REST APIs enabling self-service access for distributed teams",
        ],
        tech: [
            "Next.js",
            "Python",
            "FastAPI",
            "SQL Server",
            "Docker",
            "GitHub Actions",
        ],
        status: "In Flight",
        internalLink: "/projects/epic-2025",
    },
    {
        title: "PDE / IPDE",
        subtitle: "AI-Augmented Development Pipeline",
        description:
            "AI-as-infrastructure development environment converting natural-language specifications into governed, reproducible outputs — scaffolded repos, tests, CI, and review-ready PRs with human-in-the-loop quality controls.",
        role: "Product / Lead Architect",
        highlights: [
            "Built guardrailed, provider-agnostic code generation pipelines",
            "Automated doc/test creation with reproducible, inspectable agent runs",
            "Designed quality validation loops ensuring output consistency at scale",
        ],
        tech: [
            "VS Code Extension",
            "TypeScript",
            "Node.js",
            "Electron",
            "OpenAPI",
            "LLM Adapters",
        ],
        status: "Beta",
        internalLink: "/projects/pde-ecosystem",
    },
];
