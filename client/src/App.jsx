import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";

import "./App.css";

import Map from "./map/Map";

function App() {
  const [ipInfos, setIpInfos] = useState("");
  const [ip, setIp] = useState("");
  const [search, setSearch] = useState(false);
  const [error, setError] = useState("");
  console.log(ipInfos);

  const getTheIPinfos = async (ip = "") => {
    try {
      const res = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await res.json();
      setIpInfos(data);
    } catch (err) {
      console.log("error message", message);
      setError(err);
    }
  };
  const handleOnchange = (e) => {
    setIp(e.target.value);
  };
  useEffect(() => {
    getTheIPinfos(ip);
  }, [search]);
  return (
    <div className="container">
      <div className="header">
        <FaMapLocationDot size={55} />
        <h1>LOCATION FINDER</h1>
      </div>
      <div className="ipContainer">
        <span>Find Location By IP Address:</span>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter your IP address.."
            value={ip}
            onChange={(e) => handleOnchange(e)}
          />
          <button onClick={() => setSearch(!search)}>
            Search
            <FaSearchLocation size={25} />
          </button>
        </div>
      </div>
      <Map position={ipInfos} />
    </div>
  );
}

export default App;
