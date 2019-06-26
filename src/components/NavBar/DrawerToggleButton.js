import React from "react";
import "./DrawerToggle.css";

const DrawerToggleButton = props => {
  return (
    <div onClick={props.click} className="toglle-button">
      <i className="fa fa-bars" aria-hidden="true" id="menu-btn" />
      <i className="fa fa-times" aria-hidden="true" id="close-btn" />
    </div>
  );
};
export default DrawerToggleButton;
