import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Hero />
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
