import React from "react";
import { ExternalLink, Github, Award } from "lucide-react";

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
    title: "PipelineOS",
    subtitle: "Intent-to-Execution DevOps Platform",
    description:
      "Turns strategic intent into structured workstreams (projects, tickets, agent runs, and PRs) inside a human-in-the-loop DevOps control hub.",
    role: "Founder / Architect",
    highlights: [
      "Coordinated PDE/IPDE orchestration with enforceable guardrails",
      "Implemented dashboards for intent capture, review, and deployment workflows",
      "Unified local-to-cloud delivery with provider-agnostic AI adapters and GitHub integration",
    ],
    tech: [
      "Next.js 14",
      "FastAPI",
      "Postgres",
      "SQLite",
      "Redis",
      "Docker Compose",
      "OpenAPI",
      "GitHub Integration",
    ],
    status: "Production",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-20 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Highlighted Projects</h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <p className="mx-auto max-w-3xl text-slate-600 dark:text-gray-300">
            Strategic platforms spanning LMS modernization, AI-assisted
            engineering, and intent-to-execution DevOps orchestration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm text-cyan-600 dark:text-cyan-300">
                        {project.subtitle}
                      </p>
                    )}
                    <p className="mt-2 text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400">
                      {project.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300 dark:hover:text-cyan-300"
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
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300 dark:hover:text-cyan-300"
                        aria-label="View project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                {project.status && (
                  <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:bg-slate-800 dark:text-cyan-300">
                    <Award size={14} /> {project.status}
                  </span>
                )}
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-700 dark:text-gray-300">
                {project.description}
              </p>

              <ul className="mb-4 space-y-2 text-sm text-slate-700 dark:text-gray-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-300"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-slate-200 pt-4 dark:border-slate-800">
                <p className="mb-2 text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400">
                  Key Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
