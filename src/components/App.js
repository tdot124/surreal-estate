import "../styles/app.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  const handleLogin = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

export default App;
