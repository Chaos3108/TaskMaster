import React, { useState } from "react";
import "./AddTask.css";
import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { apiNetwork } from "../../network";
const AddTask = () => {
  // const taskData = ["Morning Stand up", "go to gym", "Do 100 push ups"];
  const [taskData, setTaskData] = useState([]);
  const [date, setDate] = useState("");

  const getTaskByDate = async (e) => {
    setDate(e.target.value);
    try {
      const response = await apiNetwork.get(
        `/tasks/by-date?date=${e.target.value}`
      );
      setTaskData(response.tasks);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="addTask-container">
      <h1 className="task-titletext">Add Task</h1>
      <p className="sub-heading-text"> Manage Your daily and monthly tasks</p>
      <section className="daily-task-section">
        <div className="task-list-container">
          <div className="daily-task-container">
            <h2>Daily Tasks</h2>
            <div className="date-container">
              <input
                value={date}
                onChange={(e) => {
                  getTaskByDate(e);
                }}
                className="date-input"
                type="date"
              />
              <button className="add-task-button">+ Add Task</button>
            </div>
          </div>
          <div className="tasks-list-container">
            {taskData.length === 0 ? (
              <div className="text-box">
                <p>No tasks found </p>
              </div>
            ) : (
              <>
                {taskData.length > 0 &&
                  taskData.flatMap((item) => {
                    return (
                      <div className="task-list">
                        <div className="text-box">
                          <input type="checkbox" />
                          <p>{item.task_title}</p>
                        </div>
                        <div className="edit-container">
                          <MdOutlineEdit />
                          <FaTrash />
                        </div>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddTask;
