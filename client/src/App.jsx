import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState("result");
  console.log("result", result);
  console.log("input", input);

  const handleOnClick = (el) => {
    if (el === "clear") {
      setInput(0);
      setResult("result");
    } else if (el === "=") {
      try {
        const r = eval(input);
        setResult(r);
      } catch (err) {
        setResult("math error!");
        setInput(0);
      }
    } else {
      setInput((c) => (c !== 0 ? c + el : el));
    }
  };
  return (
    <div className="appBg">
      <div className="container">
        <h1 className="appTitle">Calculator</h1>
        <div className="inputShowScreen">
          <input type="text" readOnly value={input} />
          <input type="text" readOnly value={result} />
        </div>
        <div className="btnContainer">
          <div>
            {["7", "8", "9", "/"].map((el, i) => {
              return (
                <button key={i} onClick={() => handleOnClick(el)}>
                  {el}
                </button>
              );
            })}
          </div>
          <div>
            {["4", " 5", "6", "*"].map((el, i) => {
              return (
                <button key={i} onClick={() => handleOnClick(el)}>
                  {el}
                </button>
              );
            })}
          </div>
          <div>
            {["1", "2", "3", "-"].map((el, i) => {
              return (
                <button key={i} onClick={() => handleOnClick(el)}>
                  {el}
                </button>
              );
            })}
          </div>
          <div>
            {["0", "+", "=", "clear"].map((el, i) => {
              return (
                <button key={i} onClick={() => handleOnClick(el)}>
                  {el}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
