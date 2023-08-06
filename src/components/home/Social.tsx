import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/satria-wibowo-subiantoro/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil">
          <LinkedInIcon />
        </i>
      </a>
      {/* <a href="" className="home__social-icon" target="_blank">
        <i className="uil uil-whatsapp"></i>
      </a> */}
      <a
        href="https://github.com/Satria-WS"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil">
          <GitHubIcon />
        </i>
      </a>
    </div>
  );
};
export default Social;
