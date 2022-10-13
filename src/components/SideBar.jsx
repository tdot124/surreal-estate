/* eslint-disable comma-dangle */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-search">
        <h3 className="sidebar-header">Filter by city</h3>
        <Link
          className="sidebar-link"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>
        <Link
          className="sidebar-link"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>
        <Link
          className="sidebar-link"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>
        <Link
          className="sidebar-link"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>
        <h3 className="sidebar-header">Sort by price</h3>
      </div>
      <div className="sidebar-sort">
        <Link
          className="sidebar-link"
          to={buildQueryString("sort", { price: 1 })}
        >
          Ascending
        </Link>
        <Link
          className="sidebar-link"
          to={buildQueryString("sort", { price: -1 })}
        >
          Decending
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
