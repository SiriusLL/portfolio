import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
    </div>
  );
}

export default Hero;
