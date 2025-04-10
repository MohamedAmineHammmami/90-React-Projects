import React, { useState } from "react";
import "./App.css";
import { Eye, EyeOff, CircleOff, CircleCheckBig, Square } from "lucide-react";

const conditions = [
  " Length more than 8.",
  "  Contains uppe case letter.",
  " Contains lower case letter.",
  " Contains one numerical",
  " Contains one special character",
];
function App() {
  return (
    <div className="container">
      <h1>Password Validation</h1>
      <div className="inputContainer">
        <input placeholder="Enter your password" />
        <Eye color="white" size={24} />
      </div>

      {conditions.map((el, i) => {
        return (
          <div className="subSection">
            <CircleOff size={23} color="#000428" key={i} />
            <span key={i}>{el}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
