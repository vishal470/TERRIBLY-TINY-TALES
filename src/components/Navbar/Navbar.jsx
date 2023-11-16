import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav">
      <div className="nav-left">
        <div>
          <img
            className="logo"
            src="https://i.pinimg.com/280x280_RS/45/13/ed/4513ede75c1139af511c64152c953907.jpg"
            alt=""
          />
        </div>
            <hr />
        <div className="nav-text">
          <h4>STORIES</h4>
        </div>
      </div>

      <div className="nav-right">
        <div className="nav-btn">
            <button className="main-btn">Courses</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
