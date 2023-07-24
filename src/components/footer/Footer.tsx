import React, { useState } from "react";
import "./footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const [isLinkedInAvailable, setLinkedInAvailability] = useState(true);
  const handleImageError = () => {
    setLinkedInAvailability(false);
  };
  const handleRedirect = () => {
    if (
      !isLinkedInAvailable ||
      window.location.href !== "https://translated.turbopages.org/proxy_u/en-id.en.4619a25a-64be1993-34918079-74722d776562/https/id.linkedin.com/in/satria-wibowo-subiantoro"
    ) {
      window.location.href = "https://www.google.com";
    }
  };
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Satria</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="footer__link">
              Certificates
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://translated.turbopages.org/proxy_u/en-id.en.4619a25a-64be1993-34918079-74722d776562/https/id.linkedin.com/in/satria-wibowo-subiantoro"
            className="footer__social-link"
            target="_blank"
      
          >
            <i className="bx">
              <LinkedInIcon fontSize="medium" />
            </i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx">
              <LanguageIcon />
            </i>
          </a>
          <a
            href="https://github.com/Satria-WS"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx">
              <GitHubIcon />
            </i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Warriorcode. All rights reserved
        </span>
      </div>
    </footer>
  );
};
export default Footer;
