import React, { useEffect, useState } from "react";
import { Menu, X, Send, Moon, Sun, Monitor } from "lucide-react";
import HeaderAvatar from "../assets/header-avatar.jpg";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

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

const themeLabel: Record<string, string> = {
  original: "Original",
  dark: "Dark",
  light: "Light",
};

const Header: React.FC = () => {
  const { theme, cycleTheme } = useTheme();
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
    cn(
      "relative font-medium transition-all duration-200",
      theme === "dark" && "text-slate-300 hover:text-cyan-300",
      theme !== "dark" && "text-slate-700 hover:text-cyan-600",
      activeSection === id &&
        (theme === "dark"
          ? "text-cyan-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-cyan-300"
          : "text-cyan-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-cyan-500"),
    );

  const headerClass = cn(
    "sticky top-0 z-50 border-b backdrop-blur transition-colors duration-300",
    theme === "dark" && "border-slate-800 bg-slate-950/80",
    theme === "original" && "border-slate-200 bg-white/95",
    theme === "light" && "border-slate-200 bg-white/90",
  );

  const icon =
    theme === "original" ? (
      <Monitor size={18} />
    ) : theme === "dark" ? (
      <Sun size={18} />
    ) : (
      <Moon size={18} />
    );

  return (
    <header className={headerClass}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
            <span
              className={cn(
                "hidden text-2xl font-bold bg-clip-text sm:block",
                theme === "dark" &&
                  "bg-gradient-to-r from-slate-100 to-cyan-300 text-transparent",
                theme !== "dark" &&
                  "bg-gradient-to-r from-slate-800 to-cyan-600 text-transparent",
              )}
            >
              Garth Puckerin
            </span>
          </button>

          <div className="flex items-center gap-6 md:gap-8">
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
              <button
                aria-label="Cycle theme"
                onClick={cycleTheme}
                className={cn(
                  "hidden h-10 w-28 items-center justify-center gap-2 rounded-full border text-sm font-medium transition duration-200 md:flex",
                  theme === "dark"
                    ? "border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
                    : "border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-600",
                )}
              >
                {icon}
                {themeLabel[theme]}
              </button>
              <a
                href="mailto:garth.puckerin@me.com?subject=Let%27s%20Connect"
                className={cn(
                  "hidden items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all duration-200 md:inline-flex",
                  theme === "dark"
                    ? "border-cyan-300 text-cyan-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:text-white"
                    : "border-cyan-600 text-cyan-600 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700",
                )}
              >
                <Send size={16} />
                Connect
              </a>
              <button
                aria-label="Toggle navigation"
                onClick={() => setIsOpen((prev) => !prev)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border transition duration-200 md:hidden",
                  theme === "dark"
                    ? "border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
                    : "border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-600",
                )}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div
              className={cn(
                "space-y-3 border-t py-4",
                theme === "dark" ? "border-slate-800" : "border-slate-200",
              )}
            >
              <button
                onClick={cycleTheme}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-4 py-2 text-left text-sm font-medium transition duration-150",
                  theme === "dark"
                    ? "border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-cyan-300"
                    : "border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-cyan-600",
                )}
              >
                {icon}
                <span>{themeLabel[theme]}</span>
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={cn(
                    "block w-full rounded-lg px-4 py-2 text-left text-sm font-medium transition duration-150",
                    theme === "dark"
                      ? activeSection === item.id
                        ? "bg-slate-800 text-cyan-300"
                        : "text-slate-300 hover:bg-slate-800 hover:text-cyan-300"
                      : activeSection === item.id
                        ? "bg-slate-100 text-cyan-600"
                        : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600",
                  )}
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
