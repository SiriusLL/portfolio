import React from "react";
import "./NavBar.css";

function NavBar() {
  // const nav = document.querySelector("#navb");
  // ReactDOM.render(nav);
  // console.log("nav", nav);
  // const topOfNav = nav.offsetTop;

  // function fixNav() {
  //   // console.log(topOfNav, window.scrollY);
  //   if (window.scrollY >= topOfNav) {
  //     document.body.style.paddingTop = nav.offsetHeight + "px";
  //     document.body.classList.add("fixed-nav");
  //   } else {
  //     document.body.style.paddingTop = 0;
  //     document.body.classList.remove("fixed-nav");
  //   }
  // }
  useEffect(() => {});
  window.addEventListener("scroll", fixNav);

  function fixNav() {}
  return (
    <div id="navb" className="navbar">
      {/* <div>logo</div> */}
      <nav className="nav-menu">
        <ul>
          <li>
            <button>logo</button>
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
    </div>
  );
}

export default NavBar;
