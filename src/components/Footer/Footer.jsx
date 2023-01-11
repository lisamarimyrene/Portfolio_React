// Må implementeres på hver jsx fil, er som en "DOCTYPE".
import React from "react";
import './Footer.css';

//Starter alltid som en funksjon.
function Footer() {
    const title = 'Lisa foter';

    // Return det du skal pushe ut.
    return (
        <footer className="hei">
            <h1>{title}</h1>
        </footer>
    )
}

// Alltid avslutte med export default + navn på funksjon.
export default Footer;