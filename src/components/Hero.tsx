import React, { useEffect, useRef, useState } from "react";
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
import { resumeData } from "../data/resumeData";

const resumeOptions = [
  {
    id: "classic",
    title: "Classic Resume",
    description: "Traditional format with centered header and clean sections. Perfect for corporate environments.",
    url: "/resume/resume-generator.html?style=classic",
    previewGradient: "from-slate-700 via-slate-800 to-slate-900",
    focus: "Professional layout with structured experience bullets",
  },
  {
    id: "modern",
    title: "Modern Resume",
    description: "Two-column layout with colored sidebar. Great for creative and tech roles.",
    url: "/resume/resume-generator.html?style=modern",
    previewGradient: "from-cyan-500/40 via-blue-500/30 to-indigo-500/40",
    focus: "Visual design with skills sidebar",
  },
  {
    id: "minimal",
    title: "Minimal Resume",
    description: "Clean, typography-focused design. Ideal for senior positions and consulting roles.",
    url: "/resume/resume-generator.html?style=minimal",
    previewGradient: "from-slate-900 via-slate-800 to-cyan-900",
    focus: "Clean layout emphasizing content",
  },
];

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [isResumeModalOpen, setResumeModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  const sectionClass = cn(
    "relative flex min-h-screen items-center justify-center overflow-hidden transition-colors duration-300",
    "py-8 sm:py-12", // Add mobile padding top/bottom
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

  useEffect(() => {
    if (!isResumeModalOpen) {
      return;
    }

    previouslyFocusedElement.current = document.activeElement as HTMLElement | null;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const modalNode = modalRef.current;
    const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = modalNode ? Array.from(modalNode.querySelectorAll<HTMLElement>(focusableSelectors)) : [];
    focusable[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setResumeModalOpen(false);
        return;
      }

      if (event.key === "Tab" && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousOverflow;
      previouslyFocusedElement.current?.focus();
    };
  }, [isResumeModalOpen]);

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
            {resumeData.personal.name}
          </h1>
          <p className={cn("font-light sm:text-2xl", subtitleTextClass)}>
            {resumeData.personal.title}
          </p>
        </div>

        <div className="mb-12">
          <p
            className={cn(
              "mx-auto max-w-3xl text-lg leading-relaxed",
              bodyTextClass,
            )}
          >
            {resumeData.summary}
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
              <span>{resumeData.personal.location}</span>
            </div>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="flex items-center gap-2 transition-colors duration-200 hover:text-cyan-500"
            >
              <Mail size={18} className="text-cyan-500" />
              <span>{resumeData.personal.email}</span>
            </a>
            <a
              href={`tel:+17183108707`}
              className="flex items-center gap-2 transition-colors duration-200 hover:text-cyan-500"
            >
              <Phone size={18} className="text-cyan-500" />
              <span>{resumeData.personal.phone}</span>
            </a>
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center justify-center gap-6",
              infoTextClass,
            )}
          >
            <a
              href={`https://${resumeData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-cyan-500"
            >
              <Linkedin size={18} className="text-cyan-500" />
              <span>/garthpuckerin</span>
            </a>
            <a
              href={`https://${resumeData.personal.github}`}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-4 overflow-y-auto">
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" aria-hidden="true"
            onClick={() => setResumeModalOpen(false)}
          ></div>
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            aria-describedby="resume-modal-description"
            tabIndex={-1}
            className={cn(
              "relative z-10 w-full max-w-5xl rounded-3xl border p-6 shadow-2xl sm:p-8",
              "my-4 max-h-[90vh] overflow-y-auto", // Add scrolling and height constraint
              modalSurface,
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="resume-modal-title" className="text-2xl font-semibold">Select a Resume</h3>
                <p id="resume-modal-description" className={cn("mt-1 max-w-2xl text-sm", mutedText)}>
                  Preview the available formats and download the version that best fits your target audience.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close resume picker"
                onClick={() => setResumeModalOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent transition-colors duration-200 hover:border-cyan-400 hover:text-cyan-400"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resumeOptions.map((option) => (
                <div
                  key={option.id}
                  className={cn(
                    "group flex h-full flex-col gap-4 rounded-2xl border p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl",
                    cardSurface,
                  )}
                >
                  {/* Resume Thumbnail Preview */}
                  <div className={cn(
                    "h-64 sm:h-80 rounded-xl p-3 sm:p-5 flex items-center justify-center",
                    theme === "light" ? "bg-slate-100" : "bg-slate-800/50"
                  )}>
                    <div className={cn(
                      "w-full h-full rounded-lg shadow-lg flex flex-col text-[6px] overflow-hidden",
                      option.id === "modern" ? "" : "p-4 bg-white text-slate-900"
                    )}>
                      {option.id === "classic" && (
                        <>
                          <div className="text-center border-b border-slate-300 pb-2 mb-2">
                            <div className="font-bold text-[10px] mb-1 text-slate-900">{resumeData.personal.name.toUpperCase()}</div>
                            <div className="text-[5px] text-slate-600">{resumeData.personal.location} | {resumeData.personal.phone}</div>
                          </div>
                          <div className="mb-2">
                            <div className="font-bold text-[7px] uppercase border-b border-slate-300 mb-1 text-slate-900">Professional Summary</div>
                            <div className="text-[5px] text-slate-700 leading-tight">Project-focused LMS Administrator with 10+ years...</div>
                          </div>
                          <div className="mb-2">
                            <div className="font-bold text-[7px] uppercase border-b border-slate-300 mb-1 text-slate-900">Experience</div>
                            <div className="text-[6px] font-semibold text-slate-900">Business Systems Analyst</div>
                            <div className="text-[5px] italic text-slate-600">Entrust Corporation</div>
                          </div>
                          <div>
                            <div className="font-bold text-[7px] uppercase border-b border-slate-300 mb-1 text-slate-900">Education</div>
                            <div className="text-[5px] text-slate-700">Software Engineering Bootcamp</div>
                          </div>
                        </>
                      )}
                      {option.id === "modern" && (
                        <div className="flex h-full">
                          <div className="w-[80px] bg-slate-700 text-white p-3 flex flex-col">
                            <div className="mb-3">
                              <div className="text-[6px] font-bold text-cyan-400 mb-1">CONTACT</div>
                              <div className="text-[4px] mb-1 text-white">📧 Email</div>
                              <div className="text-[4px] text-white">📱 Phone</div>
                            </div>
                            <div className="mb-3">
                              <div className="text-[6px] font-bold text-cyan-400 mb-1">SKILLS</div>
                              <div className="text-[4px] mb-1 text-white">Docebo</div>
                              <div className="text-[4px] mb-1 text-white">Workday</div>
                              <div className="text-[4px] text-white">JavaScript</div>
                            </div>
                            <div className="flex-1">
                              <div className="text-[6px] font-bold text-cyan-400 mb-1">EDUCATION</div>
                              <div className="text-[4px] text-white">Software Engineering</div>
                            </div>
                          </div>
                          <div className="flex-1 p-3 bg-white flex flex-col">
                            <div className="font-bold text-[9px] mb-1 text-slate-900">{resumeData.personal.name}</div>
                            <div className="text-[6px] text-cyan-600 mb-2">LMS Administrator</div>
                            <div className="mb-2">
                              <div className="text-[6px] font-bold border-b border-cyan-500 mb-1 text-slate-900">EXPERIENCE</div>
                              <div className="text-[5px] font-semibold text-slate-900">Business Systems Analyst</div>
                              <div className="text-[4px] text-slate-600">Entrust Corporation</div>
                            </div>
                            <div className="flex-1">
                              <div className="text-[6px] font-bold border-b border-cyan-500 mb-1 text-slate-900">SUMMARY</div>
                              <div className="text-[4px] text-slate-700">Project-focused LMS Administrator...</div>
                            </div>
                          </div>
                        </div>
                      )}
                      {option.id === "minimal" && (
                        <>
                          <div className="mb-3">
                            <div className="text-[12px] font-light mb-1 text-slate-900">{resumeData.personal.name}</div>
                            <div className="text-[5px] text-slate-600">{resumeData.personal.email} • {resumeData.personal.phone}</div>
                          </div>
                          <div className="mb-2">
                            <div className="text-[6px] font-semibold uppercase tracking-wider mb-1 text-slate-900">SUMMARY</div>
                            <div className="text-[5px] text-slate-700 leading-tight">LMS Administrator with 10+ years managing enterprise...</div>
                          </div>
                          <div className="mb-2">
                            <div className="text-[6px] font-semibold uppercase tracking-wider mb-1 text-slate-900">EXPERIENCE</div>
                            <div className="flex justify-between items-start mb-1">
                              <div className="text-[6px] font-semibold text-slate-900">Business Systems Analyst</div>
                              <div className="text-[5px] text-slate-400">2022 - 2025</div>
                            </div>
                            <div className="text-[5px] text-slate-600">Entrust Corporation</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold">{option.title}</h4>
                    <p className={cn("text-sm leading-relaxed", mutedText)}>
                      {option.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                    <a
                      href={option.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-cyan-500 transition-colors duration-200 hover:text-cyan-400"
                    >
                      <ExternalLink size={16} /> Preview
                    </a>
                    <button
                      onClick={() => {
                        // Open the HTML generator with the selected style and trigger print
                        const generatorWindow = window.open(option.url, '_blank');
                        if (generatorWindow) {
                          generatorWindow.addEventListener('load', () => {
                            // Wait for the page to load, then trigger print
                            setTimeout(() => {
                              generatorWindow.print();
                            }, 1000);
                          });
                        }
                      }}
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:from-cyan-600 hover:to-blue-700"
                    >
                      <Download size={16} /> Download
                    </button>
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


