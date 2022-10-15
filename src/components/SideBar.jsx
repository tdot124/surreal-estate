/* eslint-disable comma-dangle */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [query, setQuery] = useState("");
  const { search } = useLocation();
  const navigate = useNavigate();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="sidebar">
      <form className="sidebar-title-search" onSubmit={handleSearch}>
        <h3 className="sidebar-header">Search by title</h3>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="sidebar-form"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
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
