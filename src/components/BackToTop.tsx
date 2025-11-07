import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

const BackToTop: React.FC = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonClass = cn(
    "fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2",
    // Light button on original and dark themes
    (theme === "original" || theme === "dark") && 
      "border-slate-300/50 bg-white/90 text-slate-700 backdrop-blur-sm hover:border-slate-300 hover:bg-white hover:text-slate-900 focus:ring-slate-300",
    // Dark button on light theme
    theme === "light" && 
      "border-slate-700/50 bg-slate-900/90 text-slate-200 backdrop-blur-sm hover:border-slate-700 hover:bg-slate-900 hover:text-white focus:ring-slate-700",
    // Visibility and animation
    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
  );

  return (
    <button
      onClick={scrollToTop}
      className={buttonClass}
      aria-label="Back to top"
      title="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default BackToTop;