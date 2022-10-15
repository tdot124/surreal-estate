import "../styles/navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

const NavBar = ({ onLogin }) => {
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
      <FacebookLogin
        appId="510250370947543"
        callback={onLogin}
        autoLoad
        fields="name,email,picture"
      />
    </div>
  );
};

export default NavBar;
