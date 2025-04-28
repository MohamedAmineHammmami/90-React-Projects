import React from "react";
import "./colorValues.css";
function ColorValues({ colorModel, placeholders }) {
  return (
    <div className={colorModel}>
      <h1>{colorModel}</h1>
      {placeholders?.map((el, i) => (
        <input type="text" readOnly key={i} placeholder={el} />
      ))}
    </div>
  );
}

export default ColorValues;
