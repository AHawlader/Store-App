import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./TopNav.css";
import { Link } from "react-router-dom";
import DrawerToggleButton from "../NavBar/DrawerToggleButton";

class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }
  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }
  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }
  render() {
    return (
      <div className="top-nav-bar">
        <div className="search-box">
          <div className="toolbar-toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <Link to="/">
            <h3 className="logo">Store</h3>
          </Link>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              className="form-control"
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <i className="fa fa-search" aria-hidden="true" />
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </div>
        <div className="menu-bar">
          <ul>
            <li className="cart-item" onClick={this.showDropdownMenu}>
              <a href="/">
                <Link to="/">
                  <i className="fa fa-cart-arrow-down" aria-hidden="true">
                    Cart
                  </i>
                </Link>
              </a>
              {this.state.displayMenu ? (
                <div className="cart-content">
                  <p>Your cart is empty!</p>
                </div>
              ) : null}
            </li>

            <li>
              <Link to="/">Sign Up</Link>
            </li>
            <li>
              <Link to="/">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopNav;
