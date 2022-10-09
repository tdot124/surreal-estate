import React from "react";
import PropTypes from "prop-types";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="property-card-title">{title}</div>
      <div className="property-card-type">{type}</div>
      <div className="property-card-bathrooms">{bathrooms}</div>
      <div className="property-card-bedrooms">{bedrooms}</div>
      <div className="property-card-price">{price}</div>
      <div className="property-card-city">{city}</div>
      <a href={`mailto:${email}`} className="property-card-email">
        Email
      </a>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
