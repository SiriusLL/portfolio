import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      {/* <div>logo</div> */}
      <div className="nav-menu">
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
      </div>
    </div>
  );
}

export default NavBar;
