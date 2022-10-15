import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
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
      <div className="property-card-bathrooms">
        <span className="property-card-bathrooms-icon">
          <FontAwesomeIcon icon={faBath} />
        </span>
        {bathrooms}
      </div>
      <div className="property-card-bedrooms">
        <span className="property-card-bedrooms-icon">
          <FontAwesomeIcon icon={faBed} />
        </span>
        {bedrooms}
      </div>
      <div className="property-card-price">
        <span className="property-card-price-icon">
          <FontAwesomeIcon icon={faSterlingSign} />
        </span>
        {price}
      </div>
      <div className="property-card-city">{city}</div>
      <a href={`mailto:${email}`} className="property-card-email">
        <span className="property-card-email-icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        Email
      </a>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
