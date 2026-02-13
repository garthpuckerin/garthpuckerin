import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Theme, ThemeContext } from "./context/ThemeContext";

// Page Components
import GrantTrackerPage from "./pages/GrantTrackerPage";
import DreamcatcherPage from "./pages/DreamcatcherPage";
import EpicPage from "./pages/EpicPage";
import PDEPage from "./pages/PDEPage";

const THEMES: Theme[] = ["original", "dark", "light"];

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>("original");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && THEMES.includes(stored)) {
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(prefersDark ? "dark" : "original");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => {
      const currentIndex = THEMES.indexOf(prev);
      const nextIndex = (currentIndex + 1) % THEMES.length;
      return THEMES[nextIndex];
    });
  };

  const value = useMemo(() => ({ theme, setTheme, cycleTheme }), [theme]);

  // Determine if we should show standard header/footer based on logic if needed,
  // but for now we keep them everywhere.

  return (
    <ThemeContext.Provider value={value}>
      <Router>
        <ScrollToTop />
        <div className="font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/grant-tracker" element={<GrantTrackerPage />} />
              <Route path="/projects/dreamcatcher" element={<DreamcatcherPage />} />
              <Route path="/projects/epic-2025" element={<EpicPage />} />
              <Route path="/projects/pde-ecosystem" element={<PDEPage />} />
            </Routes>
          </div>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
