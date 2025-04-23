import React, { useEffect, useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import axios from "axios";

function Task({ el, getAllTasks, setMsg, setClassname, handlePopupDisplay }) {
  const [updateTask, setUpdateTask] = useState("");
  const [readOnlyState, setReadOnlyState] = useState(true);
  console.log("task");

  const deleteTask = async (id) => {
    try {
      await axios.delete("http://localhost:3000/tasks/" + id);
      getAllTasks();
      handlePopupDisplay();
      setMsg("Your Task was successfully removed!");
      setClassname("deletePopup");
    } catch (err) {
      console.log(err);
    }
  };

  const editTask = async (id) => {
    try {
      if (!readOnlyState) {
        await axios.patch("http://localhost:3000/tasks/" + id, {
          task: updateTask,
        });
        await getAllTasks();
        setReadOnlyState(true);
        handlePopupDisplay();
        setMsg("Your task was successfully edit!");
        setClassname("editPopup");
      } else {
        setReadOnlyState(false);
        setUpdateTask("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="task">
      <input
        type="text"
        value={readOnlyState ? el.task : updateTask}
        readOnly={readOnlyState}
        placeholder={el.task}
        className="taskInput "
        onChange={(e) => setUpdateTask(e.target.value)}
      />
      <div className="taskIcons">
        <RiEditBoxFill
          size={40}
          color="#155799"
          className="add hover"
          onClick={() => editTask(el.id)}
        />
        <MdDelete
          size={40}
          color="tomato"
          className="delete hover"
          onClick={() => deleteTask(el.id)}
        />
      </div>
    </div>
  );
}

export default Task;
