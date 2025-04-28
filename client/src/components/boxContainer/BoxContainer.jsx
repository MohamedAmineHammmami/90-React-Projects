import React from "react";
import "./boxContainer.css";
import Box from "../box/Box";

function BoxContainer(props) {
  return (
    <div className="boxContainer">
      {[...Array(props.boxNum)].map((_, i) => (
        <Box key={i} />
      ))}
    </div>
  );
}

export default BoxContainer;
