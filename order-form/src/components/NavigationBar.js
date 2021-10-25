import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/ContactUs">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/OrderRequestForm">
              Order Request Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
