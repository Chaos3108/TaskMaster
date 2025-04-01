import React from "react";
import "./Dashboard.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbProgress } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { AiFillClockCircle } from "react-icons/ai";
const Dashboard = () => {
  return (
    <div>
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
            <TfiMenuAlt color="#4a84e9" />
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
    </div>
  );
};

export default Dashboard;
