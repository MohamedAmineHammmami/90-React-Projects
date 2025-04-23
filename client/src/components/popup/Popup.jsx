import React, { useEffect, useState } from "react";
import "./popup.css";
import { MdOutlineAddTask } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { MdEditNote } from "react-icons/md";

const icons = [
  { class: "editPopup", jsx: <MdEditNote className="popupIcon" /> },
  { class: "addPopup", jsx: <MdOutlineAddTask className="popupIcon" /> },
  {
    class: "deletePopup",
    jsx: <MdOutlineDeleteSweep className="popupIcon" />,
  },
];

function Popup({ msg, visibility, classname }) {
  return (
    <div className={classname} style={{ display: visibility }}>
      <p>{msg}</p>
      {icons.map((el) => {
        if (el.class === classname) {
          return el.jsx;
        }
      })}
    </div>
  );
}

export default Popup;
