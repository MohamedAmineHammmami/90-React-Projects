import React from "react";
import "./App.css";

function App() {
  return (
    <div className="appBg">
      <div className="container">
        <h1 className="appTitle">Calculator</h1>
        <div className="inputShowScreen">
          <input type="text" readOnly value={3} />
          <input type="text" readOnly value={"result"} />
        </div>
        <div className="btnContainer">
          <div>
            {[7, 8, 9, "/"].map((el, i) => {
              return <button>{el}</button>;
            })}
          </div>
          <div>
            {[4, 5, 6, "*"].map((el, i) => {
              return <button>{el}</button>;
            })}
          </div>
          <div>
            {[1, 2, 3, "-"].map((el, i) => {
              return <button>{el}</button>;
            })}
          </div>
          <div>
            {[0, "+", "=", "clear"].map((el, i) => {
              return <button>{el}</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
