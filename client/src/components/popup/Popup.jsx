import React from "react";
import "./popup.css";
import { MdOutlineAddTask } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { MdEditNote } from "react-icons/md";

function Popup({ msg }) {
  return (
    <div className="editPopup">
      <p>this is the message from the popup!</p>
      <MdEditNote className="popupIcon" />
    </div>
  );
}

export default Popup;
