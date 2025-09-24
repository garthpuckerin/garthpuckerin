import React from "react";
import { ArrowDown, MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import ProfileHeadshot from "../assets/profile-headshot.jpg";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-white text-slate-900 transition-colors duration-300 dark:from-slate-900 dark:via-slate-800 dark:to-cyan-950 dark:text-white"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2333415e%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 dark:opacity-40"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-slate-900 dark:text-gray-100">
        <div className="mb-8">
          <div className="mx-auto mb-6 h-36 w-36 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1 shadow-xl shadow-cyan-900/30">
            <img
              src={ProfileHeadshot}
              alt="Portrait of Garth Puckerin"
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>
          <h1 className="mb-4 text-5xl font-bold leading-tight sm:text-6xl">
            Garth Puckerin
          </h1>
          <p className="font-light text-cyan-600 sm:text-2xl dark:text-cyan-300">
            LMS Administrator & Learning Technology Specialist
          </p>
        </div>

        <div className="mb-12">
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-gray-300">
            Experienced LMS Administrator with 10+ years managing, configuring,
            and optimizing learning ecosystems. I combine system expertise with
            agentic AI workflows to automate diagnostics, accelerate content
            operations, and surface real-time insights so global audiences keep
            learning without disruption.
          </p>
        </div>

        <div className="mb-12 flex flex-col items-center gap-4 text-slate-700 dark:text-gray-300">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-cyan-500 dark:text-cyan-300" />
              <span>East Stroudsburg, PA</span>
            </div>
            <a
              href="mailto:garth.puckerin@me.com"
              className="flex items-center gap-2 hover:text-cyan-600 transition-colors dark:hover:text-cyan-300"
            >
              <Mail size={18} className="text-cyan-500 dark:text-cyan-300" />
              <span>garth.puckerin@me.com</span>
            </a>
            <a
              href="tel:+17183108707"
              className="flex items-center gap-2 hover:text-cyan-600 transition-colors dark:hover:text-cyan-300"
            >
              <Phone size={18} className="text-cyan-500 dark:text-cyan-300" />
              <span>(718) 310-8707</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/garthpuckerin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-600 transition-colors dark:hover:text-cyan-300"
            >
              <Linkedin
                size={18}
                className="text-cyan-500 dark:text-cyan-300"
              />
              <span>/garthpuckerin</span>
            </a>
            <a
              href="https://github.com/garthpuckerin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-600 transition-colors dark:hover:text-cyan-300"
            >
              <Github size={18} className="text-cyan-500 dark:text-cyan-300" />
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
          <a
            href="mailto:garth.puckerin@me.com?subject=Resume%20Request"
            className="rounded-full border-2 border-cyan-500 px-8 py-3 font-semibold text-cyan-600 transition-all duration-200 hover:bg-cyan-500 hover:text-white dark:border-cyan-300 dark:text-cyan-200 dark:hover:text-slate-900"
          >
            Download Resume
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-700 transition-colors hover:text-cyan-600 dark:text-gray-200 dark:hover:text-cyan-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
