import React from "react";
import { Code, Palette, Users, Zap } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

const About: React.FC = () => {
  const { theme } = useTheme();

  const sectionClass = cn(
    "py-20 transition-colors duration-300",
    theme === "original" && "bg-white text-slate-800",
    theme === "light" && "bg-slate-50 text-slate-800",
    theme === "dark" && "bg-slate-950 text-gray-100",
  );

  const highlightCard = cn(
    "rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
    theme === "dark" && "border-slate-800 bg-slate-900/60",
    theme === "light" &&
      "border-slate-200 bg-gradient-to-br from-white to-slate-100",
    theme === "original" &&
      "border-slate-200 bg-gradient-to-br from-white to-slate-100",
  );

  const highlightText = theme === "dark" ? "text-gray-300" : "text-slate-600";

  const tagClass = cn(
    "rounded-full px-4 py-2 text-sm font-medium",
    theme === "dark" && "bg-slate-800 text-gray-100",
    theme !== "dark" && "bg-slate-200 text-slate-700",
  );

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
    <section id="about" className={sectionClass}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Professional Summary</h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div
              className={cn(
                "space-y-6 text-base leading-relaxed",
                theme === "dark" ? "text-gray-300" : "text-slate-600",
              )}
            >
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
              <span className={tagClass}>10+ Years in Enterprise LMS</span>
              <span className={tagClass}>
                10,000+ Global Learners Supported
              </span>
              <span className={tagClass}>Compliance & Security Focused</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <div key={index} className={highlightCard}>
                <div
                  className={cn(
                    "mb-4",
                    theme === "dark" ? "text-cyan-300" : "text-cyan-600",
                  )}
                >
                  {highlight.icon}
                </div>
                <h3
                  className={cn(
                    "mb-2 font-bold",
                    theme === "dark" ? "text-gray-100" : "text-slate-800",
                  )}
                >
                  {highlight.title}
                </h3>
                <p className={cn("text-sm", highlightText)}>
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
