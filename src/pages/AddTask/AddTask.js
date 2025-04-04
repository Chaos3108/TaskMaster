import React from "react";
import "./AddTask.css";
import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
const AddTask = () => {
  const taskData = ["Morning Stand up", "go to gym",  "Do 100 push ups"];
  return (
    <div className="addTask-container">
      <h1 className="task-titletext">Add Task</h1>
      <p className="sub-heading-text"> Manage Your daily and monthly tasks</p>

      <section className="daily-task-section">
        <div className="task-list-container" >
          <div className="daily-task-container">
            <h2>Daily Tasks</h2>
            <div className="date-container">
              <input className="date-input" type="date" />
              <button className="add-task-button">+ Add Task</button>
            </div>
          </div>
          <div className="tasks-list-container">
            {taskData.map((item) => {
              return (
                <div className="task-list">
                  <div className="text-box">
                    <input type="checkbox" />
                    <p>{item}</p>
                  </div>
                  <div className="edit-container">
                    <MdOutlineEdit />
                    <FaTrash />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddTask;
