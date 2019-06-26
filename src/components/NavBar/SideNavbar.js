import React from "react";
import "./SideNavbar.css";

const SideNavbar = props => {
  let drawerClasses = ["side-menu"];
  if (props.show) {
    drawerClasses = "side-menu open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          On Sale
          <i className="fa fa-angle-right" aria-hidden="true" />
          <ul>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
          </ul>
        </li>
        <li>
          Mobiles
          <i className="fa fa-angle-right" aria-hidden="true" />
          <ul>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
          </ul>
        </li>
        <li>
          Computers
          <i className="fa fa-angle-right" aria-hidden="true" />
          <ul>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
          </ul>
        </li>
        <li>
          Books
          <i className="fa fa-angle-right" aria-hidden="true" />
          <ul>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
          </ul>
        </li>
        <li>
          Fitness
          <i className="fa fa-angle-right" aria-hidden="true" />
          <ul>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
          </ul>
        </li>
        <li>
          Baby Care
          <i className="fa fa-angle-right" aria-hidden="true" />
          <ul>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
          </ul>
        </li>
        <li>
          Computers
          <i className="fa fa-angle-right" aria-hidden="true" />
          <ul>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
          </ul>
        </li>
        <li>
          Computers
          <i className="fa fa-angle-right" aria-hidden="true" />
          <ul>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
          </ul>
        </li>
        <li>
          Computers
          <i className="fa fa-angle-right" aria-hidden="true" />
          <ul>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
            <li>Sub Menu-1</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
