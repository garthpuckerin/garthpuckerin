import React from "react";
import { GraduationCap } from "lucide-react";
import NycdaLogo from "../assets/logos/NYCDA_logo.jpg";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";
import { education } from "../data/resumeData";

const Education: React.FC = () => {
  const { theme } = useTheme();

  const sectionClass = cn(
    "py-20 transition-colors duration-300",
    theme === "original" && "bg-slate-950 text-gray-100",
    theme === "dark" && "bg-slate-950 text-gray-100",
    theme === "light" && "bg-slate-50 text-slate-800",
  );

  const wrapperClass = cn(
    "rounded-2xl border p-8 shadow-2xl transition-colors duration-300 md:p-10",
    theme === "light" && "border-slate-200 bg-white",
    theme !== "light" && "border-slate-800 bg-slate-900/60",
  );

  const cardClass = cn(
    "rounded-xl border p-6 transition-colors duration-300",
    theme === "light"
      ? "border-slate-200 bg-slate-100"
      : "border-slate-800 bg-slate-900",
  );

  const headingMuted = theme === "light" ? "text-slate-500" : "text-gray-400";
  const listText = theme === "light" ? "text-slate-700" : "text-gray-300";

  return (
    <section id="education" className={sectionClass}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Education</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        </div>

        <div className={wrapperClass}>
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
                  {education.institution}
                </h3>
                <p className={headingMuted}>
                  {education.program} - {education.year}
                </p>
              </div>
            </div>
            <span
              className={cn(
                "flex items-center gap-2 text-sm uppercase tracking-widest",
                theme === "light" ? "text-cyan-600" : "text-cyan-300",
              )}
            >
              <GraduationCap size={18} /> Immersive Full-Stack Curriculum
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {education.coursework.map((section) => (
              <div key={section.title} className={cardClass}>
                <h4
                  className={cn(
                    "mb-4 text-lg font-semibold",
                    theme === "light" ? "text-cyan-600" : "text-cyan-300",
                  )}
                >
                  {section.title}
                </h4>
                <ul className={cn("space-y-2 text-sm", listText)}>
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
