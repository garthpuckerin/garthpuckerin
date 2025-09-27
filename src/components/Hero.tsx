import React, { useState } from "react";
import {
  ArrowDown,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  ExternalLink,
  X,
} from "lucide-react";
import ProfileHeadshot from "../assets/profile-headshot.jpg";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

const resumeOptions = [
  {
    id: "modern",
    title: "Modern Resume",
    description: "Polished single-column layout with detailed summary, achievements, and projects.",
    file: "/resume/garth_modern_resume.pdf",
    previewLight: "from-cyan-200 via-blue-100 to-indigo-100",
    previewDark: "from-cyan-500/40 via-blue-500/30 to-indigo-500/40",
    focus: "Comprehensive narrative with strategic highlights",
  },
  {
    id: "classic",
    title: "Classic Resume",
    description: "ATS-friendly text layout optimized for automated parsing and compliance portals.",
    file: "/resume/garth_classic_resume.pdf",
    previewLight: "from-slate-200 via-slate-100 to-white",
    previewDark: "from-slate-700 via-slate-800 to-slate-900",
    focus: "Plain-text format with structured experience bullets",
  },
  {
    id: "executive",
    title: "Executive Brief",
    description: "Concise executive summary emphasising leadership outcomes and signature projects.",
    file: "/resume/garth_exec_resume.pdf",
    previewLight: "from-blue-200 via-cyan-100 to-slate-100",
    previewDark: "from-slate-900 via-slate-800 to-cyan-900",
    focus: "High-level overview for board and leadership audiences",
  },
];

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [isResumeModalOpen, setResumeModalOpen] = useState(false);

  const sectionClass = cn(
    "relative flex min-h-screen items-center justify-center overflow-hidden transition-colors duration-300",
    theme === "light" &&
      "bg-gradient-to-br from-slate-100 via-slate-50 to-white text-slate-900",
    theme === "dark" &&
      "bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white",
    theme === "original" &&
      "bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white",
  );

  const patternClass = cn(
    "absolute inset-0 opacity-30",
    theme !== "light" && "opacity-40",
  );

  const badgeGradient =
    theme === "light"
      ? "from-cyan-500 to-blue-600"
      : "from-cyan-500 to-blue-600";

  const headingTextClass = theme === "light" ? "text-slate-900" : "text-white";
  const subtitleTextClass =
    theme === "light" ? "text-cyan-600" : "text-cyan-300";
  const bodyTextClass = theme === "light" ? "text-slate-700" : "text-gray-300";
  const infoTextClass = theme === "light" ? "text-slate-700" : "text-gray-200";
  const modalSurface =
    theme === "light"
      ? "bg-white text-slate-900 border-slate-200"
      : "bg-slate-900/90 text-slate-100 border-slate-700";
  const cardSurface =
    theme === "light"
      ? "border-slate-200 bg-white"
      : "border-slate-700 bg-slate-900/70";
  const mutedText = theme === "light" ? "text-slate-500" : "text-slate-400";

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={sectionClass}>
      <div
        className={cn(
          "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2333415e%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]",
          patternClass,
        )}
      ></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mb-8">
          <div
            className={cn(
              "mx-auto mb-6 h-36 w-36 rounded-full p-1 shadow-xl",
              `bg-gradient-to-r ${badgeGradient}`,
            )}
          >
            <img
              src={ProfileHeadshot}
              alt="Portrait of Garth Puckerin"
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>
          <h1
            className={cn(
              "mb-4 text-5xl font-bold leading-tight sm:text-6xl",
              headingTextClass,
            )}
          >
            Garth Puckerin
          </h1>
          <p className={cn("font-light sm:text-2xl", subtitleTextClass)}>
            LMS Administrator & Learning Technology Specialist
          </p>
        </div>

        <div className="mb-12">
          <p
            className={cn(
              "mx-auto max-w-3xl text-lg leading-relaxed",
              bodyTextClass,
            )}
          >
            Experienced LMS Administrator with 10+ years managing, configuring,
            and optimizing learning ecosystems. I combine system expertise with
            agentic AI workflows to automate diagnostics, accelerate content
            operations, and surface real-time insights so global audiences keep
            learning without disruption.
          </p>
        </div>

        <div className="mb-12 flex flex-col items-center gap-4">
          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-6",
              infoTextClass,
            )}
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-cyan-500" />
              <span>East Stroudsburg, PA</span>
            </div>
            <a
              href="mailto:garth.puckerin@me.com"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-cyan-500"
            >
              <Mail size={18} className="text-cyan-500" />
              <span>garth.puckerin@me.com</span>
            </a>
            <a
              href="tel:+17183108707"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-cyan-500"
            >
              <Phone size={18} className="text-cyan-500" />
              <span>(718) 310-8707</span>
            </a>
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-6",
              infoTextClass,
            )}
          >
            <a
              href="https://linkedin.com/in/garthpuckerin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-cyan-500"
            >
              <Linkedin size={18} className="text-cyan-500" />
              <span>/garthpuckerin</span>
            </a>
            <a
              href="https://github.com/garthpuckerin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-cyan-500"
            >
              <Github size={18} className="text-cyan-500" />
              <span>@garthpuckerin</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={scrollToAbout}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-xl transition-all duration-200 hover:from-cyan-600 hover:to-blue-700 hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => setResumeModalOpen(true)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-full border-2 px-8 py-3 font-semibold transition-all duration-200",
              theme === "light"
                ? "border-cyan-600 text-cyan-600 hover:bg-cyan-500 hover:text-white"
                : "border-cyan-300 text-cyan-200 hover:bg-cyan-300 hover:text-slate-900",
            )}
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 transition-colors duration-200 hover:text-cyan-500"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setResumeModalOpen(false)}
          ></div>
          <div
            className={cn(
              "relative z-10 w-full max-w-5xl rounded-3xl border p-6 shadow-2xl sm:p-8",
              modalSurface,
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">Select a Resume</h3>
                <p className={cn("mt-1 max-w-2xl text-sm", mutedText)}>
                  Preview the available formats and download the version that best fits your target audience.
                </p>
              </div>
              <button
                aria-label="Close resume picker"
                onClick={() => setResumeModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {resumeOptions.map((option) => (
                <div
                  key={option.id}
                  className={cn(
                    "group flex h-full flex-col gap-4 rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl",
                    cardSurface,
                  )}
                >
                  <div
                    className={cn(
                      "flex h-36 w-full items-start justify-between rounded-xl bg-gradient-to-br p-4 text-left text-xs font-medium uppercase tracking-widest text-white shadow-inner",
                      theme === "light" ? option.previewLight : option.previewDark,
                    )}
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-semibold">{option.title}</span>
                      <span className="text-[11px] opacity-90">{option.focus}</span>
                    </div>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase">
                      PDF
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold">{option.title}</h4>
                    <p className={cn("text-sm leading-relaxed", mutedText)}>
                      {option.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                    <a
                      href={option.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-cyan-500 transition-colors duration-200 hover:text-cyan-400"
                    >
                      <ExternalLink size={16} /> Preview
                    </a>
                    <a
                      href={option.file}
                      download
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-cyan-600 hover:to-blue-700"
                    >
                      <Download size={16} /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
