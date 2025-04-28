import React, { useEffect, useState } from "react";
import "./box.css";

const ColorValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
function Box() {
  const [color, setColor] = useState("");

  const genRandomIndex = () => {
    const unSignedArr = new Uint32Array(1);
    const randomIndex = crypto.getRandomValues(unSignedArr)[0] % 16;
    return randomIndex;
  };

  const genRandomColor = () => {
    let randomHexColor = "#";
    for (let i = 0; i < 6; i++) {
      randomHexColor += ColorValues[genRandomIndex()];
    }
    setColor(randomHexColor);
  };

  useEffect(() => {
    genRandomColor();
  }, []);

  return (
    <div style={{ backgroundColor: color }} onClick={genRandomColor}></div>
  );
}

export default Box;
