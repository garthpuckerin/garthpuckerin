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
    <footer className="border-t border-slate-200 bg-slate-100 py-10 text-slate-600 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Garth Puckerin. All rights
            reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white p-3 text-slate-500 transition-colors duration-200 hover:text-cyan-600 dark:bg-slate-800 dark:text-gray-300 dark:hover:text-cyan-300"
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
