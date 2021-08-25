import React from "react";
import "./NavBar.css";

function NavBar() {
  const nav = document.querySelector("#main");

  function fixNav() {}
  return (
    <div className="navbar">
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
