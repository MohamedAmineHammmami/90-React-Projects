import React, { useEffect, useRef, useState } from "react";
import Dice from "./components/Dice/Dice";
import shakeSound from "./assets/shakeSound.mp3";

import "./App.css";

function App() {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  const [shake, setShake] = useState(false);
  const audioRef = useRef();

  const genRandomNum = () => {
    const unSignArray = new Uint32Array(1);
    const randomNum = crypto.getRandomValues(unSignArray)[0];
    return (randomNum % 6) + 1;
  };
  const handleDiceRolling = () => {
    setShake(true);
    audioRef.current.play();
    setDiceOne(genRandomNum());
    setDiceTwo(genRandomNum());
    setTimeout(() => {
      setShake(false);
    }, 500);
  };

  return (
    <div className="diceContainer">
      <audio ref={audioRef} src={shakeSound} controls hidden />
      <h1 className="header">
        Your Score is: <span>{diceOne + diceTwo} Points</span>
      </h1>
      <div className={shake ? "shake" : "dices"}>
        <Dice diceRandomNum={diceOne} />
        <Dice diceRandomNum={diceTwo} />
      </div>

      <button onClick={handleDiceRolling}>Roll Dice!</button>
    </div>
  );
}

export default App;
