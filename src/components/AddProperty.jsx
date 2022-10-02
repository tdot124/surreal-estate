import React, { useState } from "react";

const AddProperty = () => {
  const initialState = {
    title: "",
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <div className="add-property">
      <div>Add Property Page</div>
      <form onSubmit={handleAddProperty}>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
