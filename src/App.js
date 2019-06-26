import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavbar from "./components/NavBar/TopNavbar";
import Cart from "./components/Cart/Cart";
import SideNavbar from "./components/NavBar/SideNavbar";
import Feature from "./components/Featured/Featured";
import Sale from "./components/SaleOn/Sale";
import newArrived from "./components/NewArrived/newArrived";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div className="App" style={{ height: "100%" }}>
          <TopNavbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideNavbar show={this.state.sideDrawerOpen} />
          {backdrop}

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const Home = () => (
  <div className="cotainer">
    <Slider />
    <Feature />
    <Sale />
    <Route path="" component={newArrived} />
    <Footer />
  </div>
);
export default App;
