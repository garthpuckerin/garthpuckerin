import React from 'react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectNavigation from '../components/ProjectNavigation';

const EpicPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
            <div className="container mx-auto px-4 py-12">
                <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Portfolio
                </Link>

                {/* Hero Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100 dark:border-gray-700">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6 w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>Production Ready</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Epic 2025
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                A strategic modernization of legacy enterprise systems, bridging the gap between established workflows and modern efficiency.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#" // TODO: Add deployed URL
                                    className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-600/20"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Launch Demo
                                </a>
                                <a
                                    href="https://github.com/garthpuckerin/Epic-2025-Demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-600 transition-colors"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    View Code
                                </a>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-8 border-l border-gray-100 dark:border-gray-700">
                            <div className="w-full aspect-video bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex items-center justify-center border border-gray-200 dark:border-gray-600">
                                <span className="text-gray-400 font-medium">System Overview</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Strategic Modernization</h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
                                <p>
                                    Epic 2025 represents a complete overhaul of a legacy backend, migrating to a modern, scalable stack while preserving critical business logic.
                                    This demo showcases the updated frontend interface and the robust API layer that powers it.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Modernization Highlights</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Legacy to Cloud Migration",
                                    "API-First Architecture",
                                    "Modern React Frontend",
                                    "Automated CI/CD Pipelines",
                                    "Enhanced Security Protocols",
                                    "Real-time Analytics Dashboard"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js", "Python", "FastAPI", "PostgreSQL", "AWS", "Terraform"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <ProjectNavigation
                    prev={{ title: "Dreamcatcher", link: "/projects/dreamcatcher" }}
                    next={{ title: "PDE Ecosystem", link: "/projects/pde-ecosystem" }}
                />
            </div>
        </div>
    );
};

export default EpicPage;
