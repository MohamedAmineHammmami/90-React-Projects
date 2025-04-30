import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import UpDown from "./components/updown/UpDown";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <form>
          <div className="cardTopSection">
            <div className="topInfo">
              <label>Card number</label>
              <input
                type="text"
                className="cardNumberInput"
                placeholder="XXXXXXXXXXXXXXXXXXX"
              />
              <label>Expiration Date</label>
              <div className="exp">
                <div className="expCont">
                  <input type="number" className="expInput" placeholder="01" />
                  <UpDown />
                </div>
                <div className="expCont">
                  <input
                    type="number"
                    className="expInput"
                    placeholder="2025"
                  />
                  <UpDown />
                </div>
              </div>
            </div>
            <img src={logo} alt="logo" className="img" />
          </div>
          <div className="cardBottomSection">
            <label>Cardholder name</label>
            <input
              type="text"
              className="cardHolderNameInput"
              placeholder="Mohamed Amine Hammami"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
