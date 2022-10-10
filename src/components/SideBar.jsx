import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  render(
    <div>
      <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      <Link to={`/?query={"city": "Manchester"}`}>Leeds</Link>
      <Link to={`/?query={"city": "Manchester"}`}>Liverpool</Link>
      <Link to={`/?query={"city": "Manchester"}`}>Sheffield</Link>
    </div>
  );
};

export default SideBar;
