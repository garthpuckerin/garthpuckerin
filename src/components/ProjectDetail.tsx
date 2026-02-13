import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Award } from "lucide-react";
import { projects } from "../data/projects";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { theme } = useTheme();

    // Find project by matching the internalLink
    // internalLink is like "/projects/grant-tracker"
    // we need to match it with the current slug
    const project = projects.find((p) =>
        p.internalLink?.endsWith(`/${slug}`)
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="flex h-[50vh] flex-col items-center justify-center p-8 text-center">
                <h2 className="mb-4 text-2xl font-bold">Project Not Found</h2>
                <Link to="/" className="text-cyan-600 hover:underline">
                    Return Home
                </Link>
            </div>
        );
    }

    const sectionClass = cn(
        "min-h-screen py-20 transition-colors duration-300",
        theme === "original" && "bg-slate-950 text-gray-100",
        theme === "light" && "bg-slate-50 text-slate-800",
        theme === "dark" && "bg-slate-950 text-gray-100",
    );

    const cardClass = cn(
        "rounded-xl border backdrop-blur-sm p-8 shadow-sm transition-colors duration-300",
        theme === "original" && "border-slate-800 bg-slate-900/60",
        theme === "dark" && "border-slate-800 bg-slate-900/60",
        theme === "light" && "border-slate-200 bg-white",
    );

    const badgeClass =
        theme === "light"
            ? "bg-slate-200 text-cyan-600"
            : "bg-slate-800 text-cyan-300";

    const toolBadge =
        theme === "light"
            ? "bg-slate-200 text-slate-700"
            : "bg-slate-800 text-gray-200";

    return (
        <section className={sectionClass}>
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <Link
                    to="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-500 hover:text-cyan-400"
                >
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>

                <article className={cardClass}>
                    <header className="mb-8">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                            <h1 className="text-3xl font-bold md:text-4xl">{project.title}</h1>
                            {project.status && (
                                <span
                                    className={cn(
                                        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                                        badgeClass,
                                    )}
                                >
                                    <Award size={14} /> {project.status}
                                </span>
                            )}
                        </div>

                        {project.subtitle && (
                            <p className="mb-4 text-xl text-cyan-500">{project.subtitle}</p>
                        )}

                        <p className="text-sm uppercase tracking-widest opacity-70">
                            {project.role}
                        </p>
                    </header>

                    <div className="mb-8 space-y-4">
                        <h3 className="text-lg font-semibold">Overview</h3>
                        <p className="leading-relaxed opacity-90">{project.description}</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="mb-4 text-lg font-semibold">Key Highlights</h3>
                        <ul className="space-y-3">
                            {project.highlights.map((highlight, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                                    <span className="leading-relaxed opacity-90">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h3 className="mb-4 text-lg font-semibold">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className={cn("rounded-full px-3 py-1 text-sm", toolBadge)}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-500"
                            >
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        )}
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                            >
                                <Github size={16} /> View Code
                            </a>
                        )}
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ProjectDetail;
