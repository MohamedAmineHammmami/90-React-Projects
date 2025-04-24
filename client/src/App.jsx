import React, { useState } from "react";
import "./App.css";
import { trivia } from "./trivia/trivia.js";
import Field from "./components/field/Field.jsx";
import Popup from "./components/popup/Popup.jsx";
import { IoReloadCircle } from "react-icons/io5";

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnwser] = useState("");
  const [show, setShow] = useState(false);

  console.log("index", index);
  console.log("score", score);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
      return;
    }
    if (answer) {
      setScore((prevScore) =>
        answer === trivia[index].answer ? prevScore + 1 : prevScore
      );
      setIndex((prev) => prev + 1);
      setAnwser("");
    }
  };

  const reset = () => {
    setScore(0);
    setIndex(0);
  };

  return (
    <div className="quizContainer">
      <h1>Quiz Application</h1>

      {index < trivia.length && (
        <>
          <h2>Question {trivia[index]?.id}: </h2>
          <h3>{trivia[index]?.question}</h3>
        </>
      )}

      {index >= trivia.length ? (
        <>
          <h1 className="score">Result: {score}</h1>
          <button onClick={reset}>
            Play again <IoReloadCircle size={30} color="white" />
          </button>
        </>
      ) : (
        <form>
          {trivia[index].options.map((el, i) => {
            return (
              <Field
                key={i}
                el={el}
                id={i}
                answer={answer}
                setAnswer={setAnwser}
              />
            );
          })}
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}

      {show && <Popup />}
    </div>
  );
}

export default App;
