import React from "react";
import "./draw.css";
import { FaRegHandshake } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
function Draw({ toggling }) {
  return (
    <div className="drawPopup">
      <FaRegHandshake size={35} />
      <b>The Result is a Draw.</b>
      <MdCancelPresentation
        className="popupRemoval"
        onClick={() => toggling(false)}
      />
    </div>
  );
}

export default Draw;
