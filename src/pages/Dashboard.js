import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbProgress } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { AiFillClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { apiNetwork } from "../network";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddTask = () => {
    navigate("/tasks");
  };

  const getTasks = async () => {
    setIsLoading(true);
    try {
      const response = await apiNetwork.get("/tasks");
      setTasks([response.tasks]);
      setIsLoading(false);
    } catch (e) {
      console.log(console.error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  const days = [
    { day: "Monday", tasks: 5, taskName: "Task 1" },
    { day: "Tuesday", tasks: 3, taskName: "Task 2" },
    { day: "Wednesday", tasks: 4, taskName: "Task 3" },
    { day: "Thursday", tasks: 2, taskName: "Task 4" },
    { day: "Friday", tasks: 6, taskName: "Task 5" },
    { day: "Saturday", tasks: 1, taskName: "Task 6" },
    { day: "Sunday", tasks: 0, taskName: "Task 7" },
  ];
  const taskData = [
    { TotalTasks: 24 },
    { InProgress: 12 },
    { Completed: 8 },
    { Pending: 4 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <>
          <h1>Welcome back ,Alex</h1>
          <p>Here's your tasks overview</p>
        </>
      </div>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-header">
            <span> Total Tasks </span>
            <TfiMenuAlt color="#2762ec" />
          </div>
          <h2 className="task-text">24</h2>
          <p className="sub-text">8 Completed</p>
        </div>
        <div className="dashboard-card">
          <div className="card-header">
            <span> In Progress </span>
            <TbProgress color="orange" />
          </div>
          <h2 className="task-text">12</h2>
          <p className="sub-text">8 Completed</p>
        </div>
        <div className="dashboard-card">
          <div className="card-header">
            <span> Total Completed </span>
            <TiTick color="green" />
          </div>
          <h2 className="task-text">8</h2>
          <p className="sub-text">Today</p>
        </div>
        <div className="dashboard-card">
          <div className="card-header">
            <span> Pending </span>
            <AiFillClockCircle color="red" />
          </div>
          <h1 className="task-text">4</h1>
          <p className="sub-text"> Need Attention</p>
        </div>
      </div>

      <section className="dashboard-section">
        <div className="section-header">
          <h4>Weekly Tasks</h4>
          <button onClick={handleAddTask} className="Add-Task">
            {" "}
            + Add Task
          </button>
        </div>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height:'8vh'
            }}
          >
            <AiOutlineLoading3Quarters />
          </div>
        ) : (
          <>
            {" "}
            {Object.entries(tasks).map(([day, taskList], index) => (
              <div className="cards-section">
                {Object.entries(taskList).map(([day, taskItems], index) => (
                  <div className="card-body" key={index}>
                    <h4>{day}</h4>
                    <div className="task-card">
                      {taskItems.map((item, index) => {
                        return (
                          <div className="task-card-content" key={item._id}>
                            <input type="checkbox" />
                            <p>{item.task_title}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </section>
      <section className="weekly-progress">
        <div className="section-header">
          <h4>Weekly Progress</h4>
        </div>
        <div className="progress-cards">
          {taskData.map((task, index) => {
            return (
              <div className="progress-card" key={index}>
                <h4>{Object.keys(task)[0]}</h4>
                <h1>{task[Object.keys(task)[0]]}</h1>
              </div>
            );
          })}
        </div>
        <progress max={100} value={70} className="progress-data" />
        <p className="status-text">60% of weekly tasks completed</p>
      </section>
    </div>
  );
};

export default Dashboard;
