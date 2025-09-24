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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 shadow-xl shadow-cyan-900/40">
            <img
              src={ProfileHeadshot}
              alt="Portrait of Garth Puckerin"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Garth Puckerin
          </h1>
          <p className="text-xl sm:text-2xl text-cyan-300 mb-6 font-light">
            LMS Administrator & Learning Technology Specialist
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experienced LMS Administrator with 10+ years managing, configuring,
            and optimizing learning ecosystems. I combine system expertise with
            agentic AI workflows to automate diagnostics, accelerate content
            operations, and surface real-time insights so global audiences keep
            learning without disruption.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 mb-12 text-gray-300">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-cyan-400" />
              <span>East Stroudsburg, PA</span>
            </div>
            <a
              href="mailto:garth.puckerin@me.com"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
            >
              <Mail size={18} className="text-cyan-400" />
              <span>garth.puckerin@me.com</span>
            </a>
            <a
              href="tel:+17183108707"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
            >
              <Phone size={18} className="text-cyan-400" />
              <span>(718) 310-8707</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <a
              href="https://linkedin.com/in/garthpuckerin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
            >
              <Linkedin size={18} className="text-cyan-400" />
              <span>/garthpuckerin</span>
            </a>
            <a
              href="https://github.com/garthpuckerin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
            >
              <Github size={18} className="text-cyan-400" />
              <span>@garthpuckerin</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            View My Work
          </button>
          <a
            href="mailto:garth.puckerin@me.com?subject=Resume%20Request"
            className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 inline-flex items-center justify-center"
          >
            Download Resume
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-cyan-300 transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
