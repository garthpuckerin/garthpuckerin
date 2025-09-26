import React from "react";
import { Github, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const footerClass = cn(
    "py-10 border-t transition-colors duration-300",
    theme === "light" && "border-slate-200 bg-slate-100 text-slate-600",
    theme === "dark" && "border-slate-800 bg-slate-950 text-gray-400",
    theme === "original" && "border-slate-800 bg-slate-950 text-gray-400",
  );

  const socialClass = cn(
    "rounded-lg p-3 transition-colors duration-200",
    theme === "light"
      ? "bg-white text-slate-500 hover:text-cyan-600"
      : "bg-slate-800 text-gray-300 hover:text-cyan-300",
  );

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
    <footer className={footerClass}>
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
              className={socialClass}
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
