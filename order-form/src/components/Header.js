import React from "react";

import classes from "./Header.module.css";
const Header = () => {

 
  return (
    <div className={classes.header}>
      <div className={classes.contactbar}>
        <a href="emailto:design@hiteccopy.com">design@hiteccopy.com</a>
        <a href="tel:3148654111">(314)865-4111</a>|<a href ="https://goo.gl/maps/t6UTu8Uw5a15wnNz5">375 N. Big Bend Blvd.  St. Louis, MO 63130</a>
      
      </div>

      <img src="Assets/cropped-header-60-01-1.png" height="150px" alt="" />


</div>
  );
};
export default Header;
