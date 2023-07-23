import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./scrollup.css";

const Scrollup = () => {
  // window.addEventListener("scroll", function () {
  //   const scrollUp = document.querySelector(".scrollup");
  //   //   if scroll higher than 500
  //   if (this.scrollY >= 1000) scrollUp?.classList.add("show-scroll");
  //   else scrollUp?.classList.remove("show-scroll");
  // });

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // "scrollup"
  return (
    <a href="#" className={`scrollup ${showScroll ? "show-scroll" : ""}`}>
      <i onClick={scrollToTop} className="uil scrollup__icon">
        <ArrowUpwardIcon fontSize="small" />
      </i>
    </a>
  );
};
export default Scrollup;
