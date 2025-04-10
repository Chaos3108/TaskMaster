import React, { useState } from "react";
import "./AddTask.css";
import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { apiNetwork } from "../../network";
import Modal from "react-modal";
import axios from "axios";
const AddTask = () => {
  // const taskData = ["Morning Stand up", "go to gym", "Do 100 push ups"];
  const [taskData, setTaskData] = useState([]);
  const [date, setDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [time, setTime] = useState("");

  const customStyles = {
    content: {
      width: "40vw",
      height: "60vh",
      margin: "auto",
      background: "#f4f4f4", // Light gray background
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  };

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
  const closeModal = () => {
    setIsOpen(!isOpen);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(time);
    const data = {
      task_title: title,
      task_description: description,
      task_day: date,
      task_time: "14:00",
    };
    try {
      const response = await apiNetwork.post('/tasks', data);
      setIsOpen(!isOpen);
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
              <button onClick={openModal} className="add-task-button">
                + Add Task
              </button>
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

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="add-task-modal">
          <h2>Add New Task</h2>
          <form
            onSubmit={(e) => {
              handleFormSubmit(e);
            }}
          >
            <p className="modal-subheading">Task Title</p>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Task Title"
              className="input-container"
            />
            <p className="modal-subheading">Task Description</p>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Task Description"
              className="input-description-container"
            />
            <div className="date-time-container">
              <div style={{ width: "100%" }}>
                <p className="modal-subheading">Date</p>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input-container"
                  type="date"
                />
              </div>
              <div style={{ width: "100%" }}>
                <p className="modal-subheading">Time</p>
                <input
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="input-container"
                  type="time"
                />
              </div>
            </div>
            <div className="button-container">
              <button className="cancel-button" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="add-task-button"
                type="submit"
                // onClick={}
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddTask;
