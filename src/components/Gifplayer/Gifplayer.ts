import React, { useState, useEffect } from "react";
import facescanGif from "../../assets/gif/face-scan.gif";
import moodyGif from "../../assets/gif/moody.gif";
import hackerGif from "../../assets/gif/hacker.gif";

const gifs = [facescanGif, moodyGif, hackerGif];
const interval = 3000;

const GifPlayer = (gifs: string[], interval: number) => {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const changeGifInterval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, interval); // Change the gif every 10 seconds

    return () => {
      clearInterval(changeGifInterval);
    };
  }, [gifs, interval]);

  const currentGif = gifs[currentGifIndex];
  return currentGif;
};

export { GifPlayer, gifs };
