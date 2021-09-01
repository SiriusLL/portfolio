import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="header-content">
        <h1>HELLO!!</h1>
        <p>My name is James</p>
      </div>
    </div>
  );
}

export default Hero;
