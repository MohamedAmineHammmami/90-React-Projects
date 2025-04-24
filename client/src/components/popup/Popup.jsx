import React from "react";
import "./popup.css";
import { RiErrorWarningFill } from "react-icons/ri";
function Popup() {
  return (
    <div className="popup">
      You should submit an answer !
      <RiErrorWarningFill size={30} color="white" />
    </div>
  );
}

export default Popup;
