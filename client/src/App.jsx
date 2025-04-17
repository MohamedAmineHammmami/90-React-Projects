import React, { useEffect, useState } from "react";
import "./App.css";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHand } from "react-icons/fa6";
import Draw from "./popUp/Draw";

const odds = { 1: "Rock", 2: "Paper", 3: "Scissors" };

function App() {
  const [computer, setComputer] = useState({ score: 0, current: "" });
  const [player, setPlayer] = useState({ score: 0, current: "" });
  const [show, setShow] = useState(false);

  const handleChoices = (e) => {
    const unSignedArr = new Uint32Array(1);
    const randomNum = (crypto.getRandomValues(unSignedArr)[0] % 3) + 1;
    setPlayer({ ...player, current: e.currentTarget.dataset.value });
    setComputer({ ...computer, current: odds[randomNum] });
  };

  const handleResult = () => {
    if (!computer.current && !player.current) {
      return;
    }
    if (computer.current === player.current) {
      setShow(true);
      return;
    }

    const winPatterns = { Rock: "Scissors", Scissors: "Paper", Paper: "Rock" };

    if (winPatterns[player.current] === computer.current) {
      setPlayer({ ...player, score: player.score + 1 });
    } else {
      setComputer({ ...computer, score: computer.score + 1 });
    }
  };

  const handleReset = () => {
    setComputer({ ...computer, score: 0 });
    setPlayer({ ...player, score: 0 });
  };

  useEffect(() => {
    /* handleResult(); */
    handleResult();
  }, [player.current, computer.current]);

  return (
    <div className="container">
      <h1>
        WELCOME TO <strong>ROCK , PAPER , SCISSORS</strong> GAMES
      </h1>

      <div className="btns">
        <button data-value="Rock" onClick={(e) => handleChoices(e)}>
          <FaRegHandRock className="icon" />
          Rock
        </button>
        <button data-value={"Paper"} onClick={(e) => handleChoices(e)}>
          <FaRegHand className="icon" />
          Paper
        </button>
        <button data-value={"Scissors"} onClick={(e) => handleChoices(e)}>
          <FaRegHandScissors className="icon" />
          Scissors
        </button>
      </div>

      <div className="result">
        <h3>Your choice: {player.current}</h3>
        <h3>Computer's choice: {computer.current}</h3>
      </div>

      <b>
        Your Score: <strong>{player.score}</strong>
      </b>
      <b>
        Computer Score: <strong>{computer.score}</strong>
      </b>
      <button onClick={handleReset}>Reset</button>
      {show && <Draw toggle={show} toggling={setShow} />}
    </div>
  );
}

export default App;
