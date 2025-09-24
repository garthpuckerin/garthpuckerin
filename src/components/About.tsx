import React from "react";
import { Code, Palette, Users, Zap } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "LMS Administration",
      description: "End-to-end platform configuration and governance",
    },
    {
      icon: <Palette size={24} />,
      title: "System Integration",
      description: "API-driven connections with HRIS, CRM, and BI tools",
    },
    {
      icon: <Users size={24} />,
      title: "User Enablement",
      description: "Training, documentation, and enterprise support",
    },
    {
      icon: <Zap size={24} />,
      title: "Compliance",
      description: "Data privacy and regulatory alignment for global audiences",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-50 py-20 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Professional Summary</h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="prose prose-lg space-y-6 text-slate-600 transition-colors duration-300 dark:prose-invert dark:text-gray-300">
              <p>
                Experienced LMS Administrator with more than a decade of success
                managing, configuring, and optimizing learning management
                systems across highly regulated enterprise environments. I
                specialize in diagnosing complex platform issues, leading
                coordinated incident response, and implementing process
                improvements that keep learning programs running smoothly.
              </p>

              <p>
                I partner with cross-functional stakeholders to integrate LMS
                platforms with business-critical applications, ranging from
                Workday and Salesforce to analytics suites like Tableau and
                QuickSight, while safeguarding data privacy and compliance
                requirements.
              </p>

              <p>
                By combining technical depth with a people-first mindset, I
                support global audiences of 10,000+ learners, deliver insightful
                reporting, and build scalable solutions that improve
                accessibility, automation, and user satisfaction.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 dark:bg-slate-800 dark:text-gray-100">
                10+ Years in Enterprise LMS
              </span>
              <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 dark:bg-slate-800 dark:text-gray-100">
                10,000+ Global Learners Supported
              </span>
              <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 dark:bg-slate-800 dark:text-gray-100">
                Compliance & Security Focused
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-800"
              >
                <div className="mb-4 text-cyan-600 dark:text-cyan-300">
                  {highlight.icon}
                </div>
                <h3 className="mb-2 font-bold text-slate-800 transition-colors duration-300 dark:text-gray-100">
                  {highlight.title}
                </h3>
                <p className="text-sm text-slate-600 transition-colors duration-300 dark:text-gray-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
