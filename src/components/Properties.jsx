import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  const validProps = {
    title: "3 Bed House with a view",
    type: "Detached",
    bathrooms: 2,
    bedrooms: 3,
    price: 450000,
    city: "Liverpool",
    email: "test@email.com",
  };

  return <PropertyCard {...validProps} />;
};

export default Properties;
