import React, { useRef, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  const [heroHeight, setHeroHeight] = useState([]);

  return (
    <div className="App">
      <Hero setHeroHeight={setHeroHeight} />
      <NavBar heroHeight={heroHeight && heroHeight} />
      {heroHeight}
      <Contact />
      <Resume />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
