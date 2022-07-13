import React from "react";
import "./Navbar.scss";
import logo from "../../Assets/Images/logo.svg";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <img src={logo} className="nav-logo" alt=""></img>
        <div className="nav-text-group">
          <p className="nav-text">Contact</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
