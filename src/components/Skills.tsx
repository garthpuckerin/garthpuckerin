import React from "react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const sectionClass = cn(
    "py-20 transition-colors duration-300",
    theme === "original" && "bg-white text-slate-800",
    theme === "light" && "bg-slate-50 text-slate-800",
    theme === "dark" && "bg-slate-950 text-gray-100",
  );

  const chipClass = cn(
    "cursor-default rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
    theme === "dark"
      ? "bg-slate-800 text-gray-100 hover:bg-slate-700"
      : "bg-slate-200 text-slate-700 hover:bg-slate-300",
  );

  const cardClass = cn(
    "rounded-xl border p-6 shadow-sm transition-shadow duration-200 hover:shadow-md",
    theme === "dark"
      ? "border-slate-800 bg-slate-900/60"
      : "border-slate-200 bg-white",
  );

  const progressTrack = theme === "dark" ? "bg-slate-700" : "bg-slate-200";

  const textMuted = theme === "dark" ? "text-gray-300" : "text-slate-600";
  const titleClass = theme === "dark" ? "text-gray-100" : "text-slate-800";

  const coreCompetencies = [
    "Project Management",
    "AI-Assisted Software Development",
    "GenAI & Agentic AI Strategy",
    "ChatGPT Platform Enablement",
    "Google Gemini Integrations",
    "Claude & Anthropic Tooling",
    "LMS Administration",
    "System Integration",
    "QA & Testing",
    "User Acceptance Testing",
    "Technical Troubleshooting",
    "Incident Resolution",
    "Compliance & Data Privacy",
    "Reporting & Analytics",
    "Training & Enablement",
    "User Management",
    "Vendor Management",
    "Process Improvement",
    "Sprint Planning",
    "Project Backlog Management",
  ];

  const technicalStacks = [
    {
      title: "LMS Platforms",
      skills: [
        { name: "Docebo", level: 95 },
        { name: "SuccessFactors", level: 90 },
        { name: "Workday", level: 88 },
        { name: "SumTotal", level: 85 },
        { name: "Canvas", level: 88 },
        { name: "Cornerstone", level: 82 },
      ],
    },
    {
      title: "Business Applications",
      skills: [
        { name: "Microsoft 365", level: 92 },
        { name: "G Suite", level: 88 },
        { name: "SharePoint", level: 90 },
      ],
    },
    {
      title: "Analytics & Reporting",
      skills: [
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 82 },
        { name: "QuickSight", level: 80 },
      ],
    },
    {
      title: "Development & APIs",
      skills: [
        { name: "JavaScript", level: 88 },
        { name: "HTML5 / CSS", level: 86 },
        { name: "SQL", level: 86 },
        { name: "REST APIs", level: 90 },
        { name: "Postman", level: 84 },
      ],
    },
  ];

  return (
    <section id="skills" className={sectionClass}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Core Competencies & Technical Proficiency
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <p className={cn("mx-auto mb-10 max-w-3xl", textMuted)}>
            A decade of enterprise LMS administration supported by deep
            technical knowledge, data-driven insight, and cross-functional
            collaboration to deliver reliable learning experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((item) => (
              <span key={item} className={chipClass}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {technicalStacks.map((category) => (
            <div key={category.title} className={cardClass}>
              <h3
                className={cn(
                  "mb-4 text-center text-lg font-semibold",
                  titleClass,
                )}
              >
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className={cn("font-medium", titleClass)}>
                        {skill.name}
                      </span>
                      <span className={textMuted}>{skill.level}%</span>
                    </div>
                    <div
                      className={cn(
                        "mt-1 h-1.5 w-full overflow-hidden rounded-full",
                        progressTrack,
                      )}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
