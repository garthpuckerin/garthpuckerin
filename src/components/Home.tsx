import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

const Home: React.FC = () => {
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
};

export default Home;
