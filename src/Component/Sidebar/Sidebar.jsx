import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/Dummydata/navLinks";
import "./sidebar.css";
import { AntDesignOutlined } from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar" value="maindiv">
        <div className="sidebar__top">
          <h2>
            <span>
              <i class="ri-taxi-line"></i>
            </span>{" "}
            UberX
          </h2>
        </div>

        <div className="sidebar__content">
          <div className="menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__link" : "nav__link"
                    }
                  >
                    <i className={item.icon}></i>
                    <span className="display">{item.display}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar__bottom">
            <span className="log-out">
              <i class="ri-logout-circle-r-line"></i> <p> Logout </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
