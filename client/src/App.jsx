import React from "react";
import "./App.css";
import head from "./assets/head.jpg";
import tail from "./assets/tail.jpg";

function App() {
  return (
    <div className="flipCoinContainer">
      <h1>Flip Coin</h1>

      <img src={head} alt="head" className="img" />
      {/*  <img src={tail} alt="tail" className="img" /> */}
      <button>Flip</button>
      <h2>Out of n flip There have been x Heads y tails</h2>
    </div>
  );
}

export default App;
