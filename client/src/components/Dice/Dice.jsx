import React from "react";
import "./dice.css";
import { FaCircle } from "react-icons/fa";

const dicePatterns = {
  1: ["dicePointCenter"],
  2: ["dicePointRight", "dicePointLeftBottom"],
  3: ["dicePointCenter", "dicePointRight", "dicePointLeftBottom"],

  4: [
    "dicePointLeft",
    "dicePointLeftBottom",
    "dicePointRight",
    "dicePointRightBottom",
  ],

  5: [
    "dicePointCenter",
    "dicePointLeft",
    "dicePointLeftBottom",
    "dicePointRight",
    "dicePointRightBottom",
  ],
  6: [
    "dicePointLeft",
    "dicePointLeftBottom",
    "dicePointRight",
    "dicePointRightBottom",
    "dicePointMiddleLeft",
    "dicePointMiddleRight",
  ],
};

function Dice({ diceRandomNum }) {
  return (
    <div className="dicePointsContainer">
      {dicePatterns[diceRandomNum].map((el, i) => {
        return <FaCircle key={i} size={35} className={el} />;
      })}
    </div>
  );
}

export default Dice;
