import React, { FunctionComponent, useState, useEffect } from "react";
import "./Header.css";
import AppsIcon from "@mui/icons-material/Apps";

import CottageIcon from "@mui/icons-material/Cottage";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import ImageIcon from "@mui/icons-material/Image";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CloseIcon from "@mui/icons-material/Close";

const Header: FunctionComponent = () => {
  // =============change background header ============
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    //   if scroll higher than 500
    if (this.scrollY >= 80) header?.classList.add("scroll-header");
    else header?.classList.remove("scroll-header");
  });

  // ============== Toggle Menu ===============
  const [Toggle, showMenu] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      {/* nav.nav.container */}
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          satria
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil nav__icon ">
                  <CottageIcon fontSize="small" />
                </i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil nav__icon">
                  <PersonIcon fontSize="small" />
                </i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil nav__icon">
                  <ArticleIcon fontSize="small" />
                </i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil nav__icon">
                  {" "}
                  <ArticleIcon fontSize="small" />
                </i>
                Qualification
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil  nav__icon">
                  {" "}
                  <ImageIcon fontSize="small" />
                </i>
                Project
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#certificates"
                onClick={() => setActiveNav("#certificates")}
                className={
                  activeNav === "#certificates"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil nav__icon">
                  {" "}
                  <ImageIcon fontSize="small" />
                </i>
                Certificates
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil nav__icon">
                  {" "}
                  <ContactMailIcon fontSize="small" />
                </i>
                Contact
              </a>
            </li>
          </ul>
          <i className="uil nav__close" onClick={() => showMenu(!Toggle)}>
            <CloseIcon fontSize="small" />
          </i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil">
            <AppsIcon />
          </i>
        </div>
      </nav>
    </header>
  );
};
export default Header;
