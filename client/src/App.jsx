import React, { useState } from "react";
import Dice from "./components/Dice/Dice";

import "./App.css";

function App() {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  return (
    <div className="diceContainer">
      <div className="dices">
        {" "}
        {[...Array(2)].map((_, i) => {
          return <Dice key={i} />;
        })}
      </div>

      <button>Roll Dice!</button>
    </div>
  );
}

export default App;
