/* eslint-disable comma-dangle */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/side-bar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h3>Filter by city</h3>
      <Link className="sidebar-link" to={`/?query={"city": "Manchester"}`}>
        Manchester
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Leeds"}`}>
        Leeds
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Liverpool"}`}>
        Liverpool
      </Link>
      <Link className="sidebar-link" to={`/?query={"city": "Sheffield"}`}>
        Sheffield
      </Link>
    </div>
  );
};

export default SideBar;
