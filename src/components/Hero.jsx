import React, { useRef, useEffect } from "react";
import "./Hero.css";

function Hero({ setHeroHeight }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const doTheThing = () => {
      console.log("theThing", heroRef.current.offsetHeight);
    };
    setHeroHeight(heroRef.current.offsetHeight);
  }, []);
  // doTheThing();
  return (
    <div className="hero" ref={heroRef}>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="hero-content">
        <h1>HELLO!!</h1>
        <p>My name is James</p>
        {/* <div onScroll={doTheThing}>buttom</div> */}
      </div>
    </div>
  );
}

export default Hero;
//window.innerHeight
