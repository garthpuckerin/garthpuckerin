import React, { useEffect, useState } from "react";
import { Menu, X, Send } from "lucide-react";
import HeaderAvatar from "../assets/header-avatar.jpg";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navButtonClasses = (id: string) =>
    `relative font-medium transition-all duration-200 ${
      activeSection === id
        ? "text-cyan-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-cyan-500"
        : "text-slate-700 hover:text-cyan-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => handleNavigate("home")}
            className="group flex items-center gap-4 text-left"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-[2px] shadow-md transition-transform duration-200 group-hover:scale-105">
              <img
                src={HeaderAvatar}
                alt="Garth Puckerin"
                className="h-full w-full rounded-full object-cover object-top"
              />
            </span>
            <span className="hidden bg-gradient-to-r from-slate-800 to-cyan-600 bg-clip-text text-2xl font-bold text-transparent sm:block">
              Garth Puckerin
            </span>
          </button>

          <div className="flex items-center gap-8 md:gap-10">
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={navButtonClasses(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="mailto:garth.puckerin@me.com?subject=Let%27s%20Connect"
                className="hidden items-center gap-2 rounded-full border-2 border-cyan-600 px-4 py-2 text-sm font-semibold text-cyan-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700 md:inline-flex"
              >
                <Send size={16} />
                Connect
              </a>
              <button
                aria-label="Toggle navigation"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition duration-200 hover:border-cyan-500 hover:text-cyan-600 md:hidden"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-2 border-t border-slate-200 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`block w-full rounded-lg px-4 py-2 text-left font-medium transition duration-150 ${
                    activeSection === item.id
                      ? "bg-slate-100 text-cyan-600"
                      : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:garth.puckerin@me.com?subject=Let%27s%20Connect"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:from-cyan-600 hover:to-blue-700"
              >
                <Send size={16} />
                Connect
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
