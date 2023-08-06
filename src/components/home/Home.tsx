import React, { useEffect, useState } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { GifPlayer, gifs } from "../Gifplayer/Gifplayer";

const Home = () => {
  const currentGif = GifPlayer(gifs, 3000);

  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div
              className="home__img"
              style={{
                backgroundImage: `url(${currentGif})`,
              }}
            ></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </div>
  );
};
export default Home;
