import React from "react";
import "./App.css";
import { FcTodoList } from "react-icons/fc";
import { IoAddCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Popup from "./components/popup/Popup";
import { RiEditBoxFill } from "react-icons/ri";

function App() {
  return (
    <div className="todoListContainer">
      <div className="header">
        <h1>Todo List</h1>
        <FcTodoList size={50} />
      </div>
      <div className="addTask">
        <input type="text" placeholder="Add your task" />
        <IoAddCircle className="addIcon" />
      </div>

      <div className="taskContainer">
        <div className="task">
          <h4>finish 90 react front-end projects</h4>
          <div className="taskIcons">
            <RiEditBoxFill size={40} color="#155799" className="add hover" />
            <MdDelete size={40} color="tomato" className="delete hover" />
          </div>
        </div>
        <div className="task">
          <h4>finish 90 react front-end projects</h4>
          <div className="taskIcons">
            <RiEditBoxFill size={40} color="#155799" className="add hover" />
            <MdDelete size={40} color="tomato" className="delete hover" />
          </div>
        </div>
      </div>
      <Popup />
    </div>
  );
}

export default App;
