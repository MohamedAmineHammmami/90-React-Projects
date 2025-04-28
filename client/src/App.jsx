import React, { useState } from "react";
import "./App.css";
import BoxContainer from "./components/boxContainer/BoxContainer";
import ColorValues from "./components/colorValues/ColorValues";
const rgb = ["RGB: ( RED , GREEN , BLUE )", "RED: 00", "GREEN: 00", "BLUE: 00"];
const hex = ["HEX: #RRGGBB ", "Red: 00", "GREEN: 00", "BLUE: 00"];
function App() {
  return (
    <div className="appContainer">
      <ColorValues colorModel="hex" placeholders={hex} />
      <BoxContainer boxNum={100} />
      <ColorValues colorModel="rgb" placeholders={rgb} />
    </div>
  );
}

export default App;
