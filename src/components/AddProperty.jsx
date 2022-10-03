import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      city: "Manchester",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form className="add-property-form" onSubmit={handleAddProperty}>
        <label className="add-property-label" htmlFor="title">
          Title
          <input
            className="add-property-input"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="Property Title"
            type="text"
          />
        </label>
        <label htmlFor="city">
          City
          <select
            className="add-property-select"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            className="add-property-input"
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            placeholder="0"
            type="number"
            min="0"
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            className="add-property-input"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            placeholder="0"
            type="number"
            min="0"
          />
        </label>
        <label htmlFor="price">
          Price
          <span className="add-property-price-span">£</span>
          <input
            className="add-property-input"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            placeholder="100,000"
            min="0.00"
            step="500"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            className="add-property-input"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="your@email.com"
            type="email"
          />
        </label>
        <label htmlFor="type">
          Type
          <select
            className="add-property-select"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <button className="add-property-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
