import React from "react";
import { ExternalLink, Github, Award } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  tech: string[];
  role: string;
  link?: string;
  repo?: string;
  status?: string;
};

const projects: Project[] = [
  {
    title: "EPIC 2025",
    subtitle: "Montefiore Access DB Modernization",
    description:
      "Modernizing the legacy Microsoft Access scheduling system I authored at Montefiore into a secure, web-first platform with normalized data and automated reporting.",
    role: "Original Author & Modernization Lead",
    highlights: [
      "Migrated Access data models to SQL Server with SSMA and custom ETL",
      "Introduced RBAC, audit trails, and governance for multi-site operations",
      "Delivered REST APIs consumed by a modern Next.js front end for schedulers",
    ],
    tech: [
      "Microsoft Access",
      "SQL Server",
      "Python",
      "FastAPI",
      "Next.js",
      "Docker",
      "GitHub Actions",
    ],
    status: "In Flight",
  },
  {
    title: "PDE / IPDE",
    subtitle: "Intelligent Professional Development Environment",
    description:
      "AI-augmented development environment and VS Code extension that converts natural-language specs into scaffolded repos, tests, CI, and review-ready PRs.",
    role: "Product / Lead Architect",
    highlights: [
      "Built guardrailed, provider-agnostic code generation with semantic diff review",
      "Automated doc/test creation and reproducible agent runs with approval gates",
      "Integrated PipelineOS agents for seamless hand-off across the SDLC",
    ],
    tech: [
      "VS Code Extension",
      "TypeScript",
      "Node.js",
      "Python",
      "Docker",
      "GitHub Actions",
      "OpenAPI",
      "LLM Adapters",
    ],
    status: "Beta",
  },
  {
    title: "Dreamcatcher",
    subtitle: "AI Conversation Fragment Organizer",
    description:
      "Intelligent conversation processing system that captures, organizes, and contextualizes AI interaction fragments for project management and knowledge building.",
    role: "Lead Developer & AI Integration Architect",
    highlights: [
      "Built ML-powered conversation analysis and topic clustering algorithms",
      "Implemented semantic search and context preservation across conversation threads",
      "Created intuitive project organization with automated tagging and relationship mapping",
    ],
    tech: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "OpenAI API",
      "Vector Database",
      "Docker",
      "TypeScript",
    ],
    status: "Open Source",
  },
  {
    title: "GrantTracker 2.0",
    subtitle: "Enterprise Grant Management Platform",
    description:
      "Next-generation grant lifecycle management system designed for non-profits and government agencies. Features automated compliance tracking, multi-stakeholder workflows, and real-time reporting with audit trails.",
    role: "Lead Developer & Product Architect",
    highlights: [
      "Built comprehensive grant application and award management workflows",
      "Implemented automated compliance monitoring with deadline alerts and progress tracking",
      "Designed multi-tenant architecture supporting various organizational structures and reporting requirements",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "Stripe",
    ],
    status: "In Development",
  },
];

const Projects: React.FC = () => {
  const { theme } = useTheme();

  const sectionClass = cn(
    "py-20 transition-colors duration-300",
    theme === "original" && "bg-slate-950 text-gray-100",
    theme === "dark" && "bg-slate-950 text-gray-100",
    theme === "light" && "bg-slate-50 text-slate-800",
  );

  const cardClass = cn(
    "flex flex-col rounded-2xl border p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl",
    theme === "light" && "border-slate-200 bg-white",
    theme !== "light" && "border-slate-800 bg-slate-900/60",
  );

  const textMuted = theme === "light" ? "text-slate-500" : "text-gray-400";
  const textBody = theme === "light" ? "text-slate-700" : "text-gray-300";
  const badgeClass =
    theme === "light"
      ? "bg-slate-200 text-cyan-600"
      : "bg-slate-800 text-cyan-300";

  const toolBadge =
    theme === "light"
      ? "bg-slate-200 text-slate-700"
      : "bg-slate-800 text-gray-200";

  return (
    <section id="projects" className={sectionClass}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Highlighted Projects</h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <p
            className={cn(
              "mx-auto max-w-3xl",
              theme === "light" ? "text-slate-600" : "text-gray-300",
            )}
          >
            Strategic platforms spanning LMS modernization, AI-assisted
            engineering, and intent-to-execution DevOps orchestration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className={cardClass}>
              <div className="mb-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3
                      className={cn(
                        "text-2xl font-semibold",
                        theme === "light" ? "text-slate-900" : "text-white",
                      )}
                    >
                      {" "}
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p
                        className={cn(
                          "text-sm",
                          theme === "light" ? "text-cyan-600" : "text-cyan-300",
                        )}
                      >
                        {project.subtitle}
                      </p>
                    )}
                    <p
                      className={cn(
                        "mt-2 text-xs uppercase tracking-widest",
                        textMuted,
                      )}
                    >
                      {project.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200",
                          theme === "light"
                            ? "border-slate-200 text-slate-500 hover:border-cyan-400 hover:text-cyan-500"
                            : "border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-300",
                        )}
                        aria-label="View source code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200",
                          theme === "light"
                            ? "border-slate-200 text-slate-500 hover:border-cyan-400 hover:text-cyan-500"
                            : "border-slate-700 text-slate-300 hover:border-cyan-300",
                        )}
                        aria-label="View project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                {project.status && (
                  <span
                    className={cn(
                      "mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                      badgeClass,
                    )}
                  >
                    <Award size={14} /> {project.status}
                  </span>
                )}
              </div>

              <p
                className={cn("mb-4 flex-1 text-sm leading-relaxed", textBody)}
              >
                {project.description}
              </p>

              <ul className={cn("mb-4 space-y-2 text-sm", textBody)}>
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div
                className={cn(
                  "mt-auto border-t pt-4",
                  theme === "light" ? "border-slate-200" : "border-slate-800",
                )}
              >
                <p
                  className={cn(
                    "mb-2 text-xs uppercase tracking-widest",
                    textMuted,
                  )}
                >
                  Key Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tool) => (
                    <span
                      key={tool}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs",
                        toolBadge,
                      )}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Portfolio Expansion Teaser */}
        <div className="mt-16 text-center">
          <div className={cn(
            "mx-auto max-w-2xl rounded-xl border p-6 shadow-lg",
            theme === "light" && "border-blue-200 bg-blue-50/70",
            theme !== "light" && "border-cyan-800/50 bg-cyan-950/20"
          )}>
            <div className="flex items-center justify-center mb-4">
              <Award className={cn(
                "mr-2 h-5 w-5",
                theme === "light" ? "text-blue-600" : "text-cyan-400"
              )} />
              <h3 className={cn(
                "text-lg font-semibold",
                theme === "light" ? "text-blue-700" : "text-cyan-300"
              )}>
                Coming Soon: Live Demonstrations
              </h3>
            </div>
            <p className={cn(
              "text-sm leading-relaxed",
              theme === "light" ? "text-blue-600" : "text-cyan-200"
            )}>
              Interactive showcases for these projects are in development. Each demo will feature 
              live walkthroughs, architecture deep-dives, and hands-on exploration of key features.
              <span className={cn(
                "block mt-2 text-xs font-medium",
                theme === "light" ? "text-blue-500" : "text-cyan-300"
              )}>
                Portfolio Demo System v1.1.0 • Q1 2026
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
