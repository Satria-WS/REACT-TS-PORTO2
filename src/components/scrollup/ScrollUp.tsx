import React, { useEffect, useState } from "react";

import "./scrollup.css";

const Scrollup = () => {
  //   window.addEventListener("scroll", function () {
  //     const scrollUp = document.querySelector(".scrollup");
  //     //   if scroll higher than 500
  //     if (this.scrollY >= 1000) scrollUp?.classList.add("show-scroll");
  //     else scrollUp?.classList.remove("show-scroll");
  //   });

  const [showScroll, setShowScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.screenY >= 1000) {
      setShowScroll(true);
    }
  };
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};
export default Scrollup;
