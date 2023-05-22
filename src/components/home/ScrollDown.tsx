import React from "react";
import Scroll from "../../assets/scroll.svg";
const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <img src={Scroll} alt="Scroll svg" 
         />
      </a>
    </div>
  );
};

export default ScrollDown;
