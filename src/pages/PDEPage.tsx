import React from 'react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectNavigation from '../components/ProjectNavigation';

const PDEPage = () => {
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
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6 w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                <span>Active Development</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                PDE Ecosystem
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                A unified Personal Development Environment that integrates productivity tools directly into the developer workflow.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#" // TODO: Add Marketplace URL
                                    className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-orange-600/20"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    View in Marketplace
                                </a>
                                <a
                                    href="https://github.com/garthpuckerin/PDE-Ecosystem-Demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-600 transition-colors"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    View Code
                                </a>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-8 border-l border-gray-100 dark:border-gray-700">
                            <div className="w-full aspect-video bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex items-center justify-center border border-gray-200 dark:border-gray-600">
                                <span className="text-gray-400 font-medium">Extension Demo</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Developer-Centric Productivity</h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
                                <p>
                                    The PDE (Personal Development Environment) Ecosystem is a VS Code extension and suite of tools designed to minimize context switching.
                                    It brings project management, documentation, and personal notes directly into the IDE.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "VS Code Integration",
                                    "Context-Aware Notes",
                                    "Project Tracking",
                                    "Automated Documentation",
                                    "Seamless Git Workflow",
                                    "Personal Knowledge Base"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
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
                                {["TypeScript", "VS Code API", "React", "Node.js", "Electron"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <ProjectNavigation
                    prev={{ title: "Epic 2025", link: "/projects/epic-2025" }}
                    next={{ title: "GrantTracker 2.0", link: "/projects/grant-tracker" }}
                />
            </div>
        </div>
    );
};

export default PDEPage;
