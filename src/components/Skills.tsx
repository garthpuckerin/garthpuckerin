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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Core Competencies & Technical Proficiency
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            A decade of enterprise LMS administration supported by deep
            technical knowledge, data-driven insight, and cross-functional
            collaboration to deliver reliable learning experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((item) => (
              <span
                key={item}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-default"
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
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span className="font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
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
