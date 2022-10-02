import "../styles/navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src="/images/logo.png" alt="logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="navbar-item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
