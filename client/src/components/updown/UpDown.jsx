import React from "react";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import "./updown.css";

function UpDown() {
  return (
    <div className="updown">
      <FaCaretUp className="icon hover" />
      <FaCaretDown className="icon hover" />
    </div>
  );
}

export default UpDown;
