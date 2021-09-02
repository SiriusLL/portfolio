import React, { useRef } from "react";
import "./Hero.css";

function Hero({ setHeroHeight }) {
  const heroRef = useRef(null);
  const doTheThing = () => {
    console.log("theThing", heroRef.current.offsetHeight);
    // console.log(setHeroHeight);
    setHeroHeight(heroRef.current.offsetHeight);
  };
  return (
    <div className="hero" ref={heroRef}>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="hero-content">
        <h1>HELLO!!</h1>
        <p>My name is James</p>
        <div onClick={doTheThing}>buttom</div>
      </div>
    </div>
  );
}

export default Hero;
