import React from "react";
import './Skills.css';
import arrowImg from "../../assets/svg/arrow.svg";

function Skills() {
    return (
        
        <><div id="section__skills--desktop">

            <div className="skills__desktop--left">
                <h2>Skills</h2>
                <div className="desktop__left--arrow">
                    <img src={arrowImg} alt="Arrow" />
                </div>
            </div>

            <div className="skills__desktop--right">
                <div className="skills__frontend">
                    <h3>Front-End</h3>
                    <p>HTML & CSS</p>
                    <p>SCSS</p>
                    <p>JavaScript</p>
                    <p>Responsive Design</p>
                    <p>GitHub</p>
                </div>

                <div clasName="skills__backend">
                    <h3>Back-End</h3>
                    <p>PHP</p>
                    <p>MySQL</p>
                    <p>XML</p>
                    <p>JSON</p>
                    <p>Bash Shell</p>
                </div>

                <div className="skills__programs">
                    <h3>Programs</h3>
                    <p>Visual Studio Code</p>
                    <p>Figma & Miro</p>
                    <p>MAMP</p>
                    <p>FileZilla</p>
                    <p>Adobe Programs</p>
                </div>
            </div>
            </div><hr className="skills__desktop--hr" />
        <div className="section__skills--mobile">
                <h2>Skills</h2>
                <div className="skills__frontend">
                    <h3>Front-End</h3>
                    <p>HTML & CSS</p>
                    <p>SCSS</p>
                    <p>JavaScript</p>
                    <p>Responsive Design</p>
                    <p>GitHub</p>
                </div>

                <div className="skills__backend">
                    <h3>Back-End</h3>
                    <p>PHP</p>
                    <p>MySQL</p>
                    <p>XML</p>
                    <p>Bash Shell</p>
                </div>

                <div className="skills__programs">
                    <h3>Programs</h3>
                    <p>Visual Studio Code</p>
                    <p>Figma & Miro</p>
                    <p>MAMP</p>
                    <p>FileZilla</p>
                    <p>Adobe Programs</p>
                </div>
        </div></>
    )
}
export default Skills;