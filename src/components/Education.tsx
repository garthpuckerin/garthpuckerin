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
    <section id="education" className="py-20 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-md overflow-hidden shadow-lg">
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
                <p className="text-slate-400">
                  Software Engineering Bootcamp - 2018
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 text-sm uppercase tracking-widest text-cyan-300">
              <GraduationCap size={18} /> Immersive Full-Stack Curriculum
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coursework.map((section) => (
              <div
                key={section.title}
                className="bg-slate-900 rounded-xl border border-slate-800 p-6"
              >
                <h4 className="text-lg font-semibold text-cyan-300 mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
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
