import React, { createContext, useState } from "react";
import "./App.css";
import BoxContainer from "./components/boxContainer/BoxContainer";

export const MyContext = createContext();
function App() {
  return (
    <div className="appContainer">
      <BoxContainer boxNum={100} />
    </div>
  );
}

export default App;
