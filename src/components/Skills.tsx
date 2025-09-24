import React from "react";

const Skills: React.FC = () => {
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
    <section
      id="skills"
      className="bg-slate-50 py-20 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Core Competencies & Technical Proficiency
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
          <p className="mx-auto mb-10 max-w-3xl text-gray-600 dark:text-gray-300">
            A decade of enterprise LMS administration supported by deep
            technical knowledge, data-driven insight, and cross-functional
            collaboration to deliver reliable learning experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((item) => (
              <span
                key={item}
                className="cursor-default rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-300 dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {technicalStacks.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="mb-4 text-center text-lg font-semibold text-slate-800 dark:text-gray-100">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-gray-300">
                      <span className="font-medium text-slate-700 dark:text-gray-100">
                        {skill.name}
                      </span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
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
