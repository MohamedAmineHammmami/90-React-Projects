import React, { useEffect, useState } from "react";
import "./App.css";
import Map from "./map/Map";

function App() {
  const [currentIP, setCurrentIP] = useState(0);
  const [error, setError] = useState("");
  const position = [51.505, -0.09];

  const getTheCurrentIP = () => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setCurrentIP(data.ip))
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    getTheCurrentIP();
  }, []);
  return (
    <div className="container">
      <div className="header">
        {/* icon */}
        <h1>LOCATION FINDER</h1>
      </div>
      <div className="ipContainer">
        <span>Find Location By IP Address:</span>
        <div className="inputContainer">
          <input type="text" placeholder="Enter your IP address.." />
          <button>Search</button>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default App;
