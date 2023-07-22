import React from "react";
import "./footer.css";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Smith</h1>
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
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx"><LinkedInIcon fontSize="medium"/></i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx">
            <LanguageIcon/>
            </i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx"><GitHubIcon/></i>
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
