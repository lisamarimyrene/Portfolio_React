import React from "react";
import "./Homepage.css";
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import About from '../About/About';

function Homepage() {
    return (
        <main>
            <hr class="skills__desktop--hr" />
            <h2 id="main__h2--portfolio">Portfolio</h2>
            <Skills />
            <Projects />
            <About />
        </main>
    )
}
export default Homepage;