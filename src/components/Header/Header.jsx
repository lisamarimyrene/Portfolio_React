import React from "react";
import './Header.css';
import headercircle from "../../assets/img/gradientcirclepng.png";


function Header() {
    return ( 
        <header>
        <div className="header__navbar">
            <ul>
                <li id="li__firstBtn">Home</li>
                <li id="li__skills"><a href="#section__skills--desktop">Skills</a></li>
                <li id="li__project"><a href="#section__projects">Projects</a></li>
                <li id="li__aboutme"><a href="#section__about">About Me</a></li>
            </ul>
            <hr/>

        </div>
        <div className="header__imgcontainer">
            <img src={headercircle} alt="Gradient Circle Graphic"/>

        </div>

        <div className="header__flexcontainer">

            <div className="header__h2">
                <h2>Portfolio</h2>
            </div>

            <div className="header__introtext">
                <h1>Lisa Mari Myrene</h1>
                <p>– Web Developer student</p>
            </div>
        </div>
    </header>
    );
}

export default Header;