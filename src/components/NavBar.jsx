import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar({ heroHeight }) {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const mainRef = useRef(null);

  // const sectionRefs = [{ section: "Main", ref: mainRef }];

  // const scrollTo = (element) => {
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  // useEffect(() => {
  //   const handleScroll = () => {};

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const getDimensions = (element) => {
  //   const { height } = element.getBoundingClientRect();
  //   const offsetTop = element.offsetTop;
  //   const offsetBottom = offsetTop + height;

  //   return {
  //     height,
  //     offsetTop,
  //     offsietBottom,
  //   };
  // };

  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    console.log("h", heroHeight);
    const offset = window.scrollY;
    // console.log(ref.heroHeight.clientHeight);
    if (offset >= heroHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let stick = ["navbar"];
  if (scrolled) {
    stick.push("fixed-nav");
  }

  return (
    <div id="navb" className={stick.join(" ")}>
      {/* <div>{scrollPosition}</div> */}
      <nav className="nav-menu">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button>Contact</button>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button>Resume</button>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button>Skills</button>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button>Projects</button>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button>Experience</button>
            </Link>
          </li>
          {/* <li>
            <button>Contact</button>
          </li>
          <li>
            <button>Resume</button>
          </li>
          <li>
            <button>Skills</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>Experience</button>
          </li> */}
        </ul>
      </nav>
      {/* <div>{scrollPosition}</div> */}
    </div>
  );
}

export default NavBar;
