import React from "react";
import "./dice.css";
import { FaCircle } from "react-icons/fa";
function Dice() {
  return (
    <div className="dicePointsContainer">
      <FaCircle size={35} className="dicePointLeft" />
    </div>
  );
}

export default Dice;
