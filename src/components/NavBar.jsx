import React, { useEffect, useState, useRef } from "react";
import "./NavBar.css";

function NavBar() {
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

  const mainRef = useRef(null);

  const sectionRefs = [{ section: "Main", ref: mainRef }];

  const scrollTo = (element) => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getDimensions = (element) => {
    const { height } = element.getBoundingClientRect();
    const offsetTop = element.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsietBottom,
    };
  };

  return (
    <div id="navb" className="navbar">
      {/* <div>{scrollPosition}</div> */}
      <nav className="nav-menu">
        <ul>
          <li>
            <button
              type="button"
              className="something1"
              onClick={() => {
                scrollTo(mainRef.current);
              }}
            >
              logo
            </button>
          </li>
          <li>
            <button>one</button>
          </li>
          <li>
            <button>two</button>
          </li>
          <li>
            <button>three</button>
          </li>
          <li>
            <button>four</button>
          </li>
        </ul>
      </nav>
      <div>{scrollPosition}</div>
    </div>
  );
}

export default NavBar;
