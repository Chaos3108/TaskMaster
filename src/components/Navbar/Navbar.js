import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTasks } from "react-icons/fa";
import { AiOutlineClose, AiOutlineLineChart } from "react-icons/ai";
import { MdBarChart } from "react-icons/md";
import { GoCalendar } from "react-icons/go";
import "./Navbar.css";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const showSideBar = () => [setIsActive(!isActive)];

  const sideBarData = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdBarChart />,
      csName: "nav-text",
    },
    {
      title: "Tasks",
      path: "/tasks",
      icon: <FaTasks />,
      csName: "nav-text",
    },

    {
      title: "Calendar",
      path: "/tasks",
      icon: <GoCalendar />,
      csName: "nav-text",
    },

    {
      title: "Progress",
      path: "/tasks",
      icon: <AiOutlineLineChart />,
      csName: "nav-text",
    },
  ];
  return (
    <>
      <nav className={"nav-menu"}>
        <ul className="nav-menu-items">
          <li className="nav-bar-heading">
            <span className="menu-bars">Task Master</span>
          </li>
          {sideBarData.map((item, index) => {
            return (
              <li className={item.csName} key={index}>
                <Link to={item.path}>
                  {item.icon} <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
