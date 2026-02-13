import React from 'react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectNavigation from '../components/ProjectNavigation';

const DreamcatcherPage = () => {
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
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6 w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                </span>
                                <span>Live Demo Available</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                Dreamcatcher
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                An AI-powered interpretation analysis platform designed for advanced cognitive data processing.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#" // TODO: Add deployed URL
                                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-purple-600/20"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Launch Live Demo
                                </a>
                                <a
                                    href="https://github.com/garthpuckerin/Dreamcatcher-Demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-600 transition-colors"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    View Code
                                </a>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-8 border-l border-gray-100 dark:border-gray-700">
                            <div className="w-full aspect-video bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex items-center justify-center border border-gray-200 dark:border-gray-600">
                                <span className="text-gray-400 font-medium">Product Demo Reel</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
                                <p>
                                    Dreamcatcher leverages advanced NLP models to interpret complex data streams, offering actionable insights for decision-making.
                                    Designed with a microservices architecture, it scales seamlessly to handle enterprise-grade loads.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Capabilities</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Cognitive Analysis Engine",
                                    "Real-time Data Stream Processing",
                                    "Microservices Architecture",
                                    "Secure Data Handling",
                                    "AI-Driven Insights",
                                    "Modular Extension System"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
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
                                {["Python", "FastAPI", "TensorFlow", "React", "Docker", "Kubernetes", "Redis"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <ProjectNavigation
                    prev={{ title: "GrantTracker 2.0", link: "/projects/grant-tracker" }}
                    next={{ title: "Epic 2025", link: "/projects/epic-2025" }}
                />
            </div>
        </div>
    );
};

export default DreamcatcherPage;
