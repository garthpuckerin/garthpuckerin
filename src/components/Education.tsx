import React from "react";
import { GraduationCap } from "lucide-react";
import NycdaLogo from "../assets/logos/NYCDA_logo.jpg";

const Education: React.FC = () => {
  const coursework = [
    {
      title: "Front-End",
      items: [
        "JavaScript",
        "HTML5",
        "CSS",
        "Bootstrap",
        "Materialize",
        "Responsive Design",
        "SASS",
      ],
    },
    {
      title: "Back-End",
      items: [
        "Ruby",
        "Rails",
        "Python",
        "SQL",
        "PostgreSQL",
        "Sinatra",
        "Heroku",
        "API Development",
        "User Authentication",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Atom", "Project Management"],
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-50 py-20 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Education</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/60 md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-md shadow-lg">
                <img
                  src={NycdaLogo}
                  alt="NYCDA logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">
                  New York Code + Design Academy
                </h3>
                <p className="text-slate-500 dark:text-gray-400">
                  Software Engineering Bootcamp - 2018
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 text-sm uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
              <GraduationCap size={18} /> Immersive Full-Stack Curriculum
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {coursework.map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-slate-200 bg-slate-100 p-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900"
              >
                <h4 className="mb-4 text-lg font-semibold text-cyan-600 dark:text-cyan-300">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-gray-300">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
