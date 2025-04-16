import React, { useState } from "react";
import "./App.css";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHand } from "react-icons/fa6";

const odds = { 1: "Rock", 2: "Paper", 3: "Scissors" };

function App() {
  return (
    <div className="container">
      <h1>
        WELCOME TO <strong>ROCK , PAPER , SCISSORS</strong> GAMES
      </h1>

      <div className="btns">
        <button>
          <FaRegHandRock className="icon" />
          Rock
        </button>
        <button>
          <FaRegHandScissors className="icon" />
          Paper
        </button>
        <button>
          <FaRegHand className="icon" />
          Scissors
        </button>
      </div>

      <div className="result">
        <h3>Your choice: Rock</h3>
        <h3>Computer's choice: Paper</h3>
      </div>

      <b>Your Score:</b>
      <b>Computer Score:</b>
    </div>
  );
}

export default App;
