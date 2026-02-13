import React from 'react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import ProjectNavigation from '../components/ProjectNavigation';

const GrantTrackerPage = () => {
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
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span>Live Demo Available</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                                GrantTracker 2.0
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                A comprehensive multi-year federal grant management platform demonstrating enterprise-level full-stack architecture.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://grant-tracker-demo.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-600/20"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Launch Live Demo
                                </a>
                                <a
                                    href="https://github.com/garthpuckerin/GrantTracker2.0-Demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-white font-semibold rounded-lg border border-gray-200 dark:border-gray-600 transition-colors"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    View Code
                                </a>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-8 border-l border-gray-100 dark:border-gray-700">
                            {/* Placeholder for Hero Image/Video */}
                            <div className="w-full aspect-video bg-white dark:bg-gray-900 rounded-xl shadow-2xl flex items-center justify-center border border-gray-200 dark:border-gray-600 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                    <span className="text-white font-medium">Click to Launch Demo</span>
                                </div>
                                <span className="text-gray-400 font-medium">Interactive Preview (Coming Soon)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">

                        {/* Problem & Solution */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Challenge & Solution</h2>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
                                <p>
                                    Educational institutions manage multi-year federal grants across departments, often struggling with budget compliance, document organization, and audit trails.
                                </p>
                                <p>
                                    GrantTracker 2.0 solves this by providing unique yearly grant numbers, automated fiscal year generation, real-time budget monitoring with overspend alerts, and a complete audit trail for compliance.
                                </p>
                            </div>
                        </section>

                        {/* Key Features */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Multi-Year Grant Tracking",
                                    "Real-time Budget Monitoring",
                                    "Role-Based Access Control",
                                    "Type-safe Document Management",
                                    "Task Assignment & Tracking",
                                    "Complete Audit Trails"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Architecture Highlight (Optional code snippet) */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Architecture Highlight: Type-Safe API</h2>
                            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                                <code className="text-sm font-mono text-blue-300">
                                    {`// tRPC Router Definition
export const grantRouter = createTRPCRouter({
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const grant = await ctx.db.grant.findUnique({
        where: { id: input.id },
        include: { grantYears: true }
      });
      return grant;
    }),
});`}
                                </code>
                            </div>
                            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                End-to-end type safety ensures frontend components know exactly what shape of data to expect from the backend, eliminating a whole class of runtime errors.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Tech Stack */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Next.js 16", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Tailwind CSS", "Clerk Auth", "Vercel"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Project Info</h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Role</span>
                                    <span className="text-gray-900 dark:text-white font-medium">Lead Developer</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Timeline</span>
                                    <span className="text-gray-900 dark:text-white font-medium">3 Months</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Status</span>
                                    <span className="text-green-600 dark:text-green-400 font-medium">Production Ready</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <ProjectNavigation
                    prev={{ title: "PDE Ecosystem", link: "/projects/pde-ecosystem" }}
                    next={{ title: "Dreamcatcher", link: "/projects/dreamcatcher" }}
                />
            </div>
        </div>
    );
};

export default GrantTrackerPage;
