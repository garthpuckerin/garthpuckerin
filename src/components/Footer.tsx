import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github size={18} />,
      label: "GitHub",
      href: "https://github.com/garthpuckerin",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/garthpuckerin",
    },
  ];

  return (
    <footer className="py-10 border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:justify-between gap-6 text-gray-400">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Garth Puckerin. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-cyan-300 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;