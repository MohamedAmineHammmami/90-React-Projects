import React, { useEffect, useState } from "react";
import "./App.css";
import { FcTodoList } from "react-icons/fc";
import { IoAddCircle } from "react-icons/io5";
import Popup from "./components/popup/Popup";
import axios from "axios";
import Task from "./components/task/Task";

function App() {
  const [newTask, setNewTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [state, setState] = useState(false);
  const [visibility, setVisibility] = useState("none");
  const [msg, setMsg] = useState("");
  const [classname, setClassname] = useState("");

  console.log("allTasks", allTasks);

  const handlePopupDisplay = () => {
    setVisibility("flex");
    setTimeout(() => {
      setVisibility("none");
    }, 3000);
  };

  const addNewTask = async () => {
    try {
      await axios.post("http://localhost:3000/tasks", { task: newTask });
      setNewTask("");
      setState(!state);
      handlePopupDisplay();
      setMsg("New task added.");
      setClassname("addPopup");
    } catch (err) {
      console.log(err);
    }
  };

  const getAllTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tasks");
      setAllTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, [state]);
  return (
    <div className="todoListContainer">
      <div className="header">
        <h1>Todo List</h1>
        <FcTodoList size={50} />
      </div>
      <div className="addTask">
        <input
          type="text"
          value={newTask}
          placeholder="Add your task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <IoAddCircle className="addIcon " onClick={addNewTask} />
      </div>

      <div className="taskContainer">
        {allTasks.map((el) => {
          return (
            <Task
              key={el.id}
              el={el}
              getAllTasks={getAllTasks}
              setVisibility={setVisibility}
              setMsg={setMsg}
              setClassname={setClassname}
              handlePopupDisplay={handlePopupDisplay}
            />
          );
        })}
      </div>
      <Popup visibility={visibility} classname={classname} msg={msg} />
    </div>
  );
}

export default App;
