import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "3 Bed House with a view",
    type: "Detached",
    bathrooms: 2,
    bedrooms: 3,
    price: 450000,
    city: "Liverpool",
    email: "test@email.com",
  };

  it("Displays property title", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("3 Bed House with a view")).toHaveClass(
      "property-card-title"
    );
  });

  it("Displays property type", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("Detached")).toHaveClass("property-card-type");
  });

  it("Displays property Bathrooms", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("2")).toHaveClass("property-card-bathrooms");
  });

  it("Displays property Bedrooms", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("3")).toHaveClass("property-card-bedrooms");
  });

  it("Displays property Price", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("450000")).toHaveClass("property-card-price");
  });

  it("Displays property city", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("Liverpool")).toHaveClass("property-card-city");
  });

  it("Displays property email with correct recipient", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText("Email")).toHaveAttribute("href", "mailto:test@email.com");
  });
});
