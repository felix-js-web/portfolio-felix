import React from "react";
import github from '../images/github.png'
import linkedin from "../images/linkedin.png";
import stackOverflow from "../images/stack-overflow.png";
import "../styles/Footer.css";

export default function Footer() { 
    return (
      <div className="footer-container">
        <a
          href="https://github.com/felix-js-web"
          className="footer-logo-anchor"
          id="logo-github"
          target="_blank"
        >
          <img className="footer-logo-img" src={github} alt="github logo"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/felix-js-java-web/"
          className="footer-logo-anchor"
          id="logo-linkedin"
          target="_blank"
        >
          <img
            className="footer-logo-img"
            src={linkedin}
            alt="linkedin logo"
          ></img>
        </a>
        <a
          href="https://stackoverflow.com/users/"
          className="footer-logo-anchor"
          id="logo-stackoverflow"
          target="_blank"
        >
          <img
            className="footer-logo-img"
            src={stackOverflow}
            alt="stackOverflow logo"
          ></img>
        </a>
      </div>
    );
}