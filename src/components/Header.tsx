import React, { useEffect, useRef, useState } from "react";
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
  const activeSectionRef = useRef<string>("home");
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const getHeaderOffset = () => {
      const height = headerRef.current?.offsetHeight ?? 120;
      return height + 16;
    };

    const updateCurrentSection = () => {
      const offset = getHeaderOffset();
      const scrollPosition = window.scrollY + offset;
      let currentId: string = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) {
          continue;
        }

        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - 4) {
          currentId = item.id;
        } else {
          break;
        }
      }

      const { scrollHeight } = document.documentElement;
      const reachedBottom = window.innerHeight + window.scrollY >= scrollHeight - 2;
      if (reachedBottom) {
        currentId = navItems[navItems.length - 1].id;
      }

      if (currentId !== activeSectionRef.current) {
        activeSectionRef.current = currentId;
        setActiveSection(currentId);
      }
    };

    window.addEventListener("scroll", updateCurrentSection, { passive: true });
    window.addEventListener("resize", updateCurrentSection);
    updateCurrentSection();

    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
      window.removeEventListener("resize", updateCurrentSection);
    };
  }, []);
  const handleNavigate = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    activeSectionRef.current = id;
    setActiveSection(id);
    setIsOpen(false);
  };

  const navButtonClasses = (id: string) =>
    cn(
      "relative font-medium transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:rounded-full after:opacity-0 after:transition-opacity after:duration-200",
      theme === "dark" ? "after:bg-cyan-300" : "after:bg-cyan-500",
      activeSection === id
        ? theme === "dark"
          ? "text-cyan-300 hover:text-cyan-200 after:opacity-100"
          : "text-cyan-600 hover:text-cyan-500 after:opacity-100"
        : theme === "dark"
          ? "text-slate-300 hover:text-cyan-300"
          : "text-slate-700 hover:text-cyan-600"
    );
  const headerClass = cn(
    "sticky top-0 z-50 border-b backdrop-blur transition-colors duration-300",
    theme === "dark" && "border-slate-800 bg-slate-950/80",
    theme === "original" && "border-slate-200 bg-white/95",
    theme === "light" && "border-slate-200 bg-white/90"
  );

  const icon = theme === "original" ? <Monitor size={18} /> : theme === "dark" ? <Sun size={18} /> : <Moon size={18} />;

  return (
    <header ref={headerRef} className={headerClass}>
      <div className="flex w-full items-center justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-10">
        <button onClick={() => handleNavigate("home")} className="group flex items-center gap-4 text-left">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-[2px] shadow-md transition-transform duration-200 group-hover:scale-105">
            <img src={HeaderAvatar} alt="Garth Puckerin" className="h-full w-full rounded-full object-cover object-top" />
          </span>
          <span
            className={cn(
              "hidden text-2xl font-bold bg-clip-text sm:block",
              theme === "dark" && "bg-gradient-to-r from-slate-100 to-cyan-300 text-transparent",
              theme !== "dark" && "bg-gradient-to-r from-slate-800 to-cyan-600 text-transparent"
            )}
          >
            Garth Puckerin
          </span>
        </button>

        <div className="flex flex-1 items-center justify-end gap-4 sm:gap-6 lg:gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNavigate(item.id)} className={navButtonClasses(item.id)}>
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
                  : "border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-600"
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
                  : "border-cyan-600 text-cyan-600 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-700"
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
                  : "border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-600"
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
                theme === "dark" ? "border-slate-800" : "border-slate-200"
              )}
            >
              <button
                onClick={cycleTheme}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-4 py-2 text-left text-sm font-medium transition duration-150",
                  theme === "dark"
                    ? "border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-cyan-300"
                    : "border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
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
                        : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
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

    </header>
  );
};

export default Header;



