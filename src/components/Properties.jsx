import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
      })
      .catch(() => {
        setAlert({
          message: "Server Error. Please try again later.",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then((response) => {
        setProperties(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  return (
    <div className="properties">
      <SideBar />
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="property-card-container">
        {properties.map((property) => (
          <div className="property-card">
            <PropertyCard key={property._id} {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
