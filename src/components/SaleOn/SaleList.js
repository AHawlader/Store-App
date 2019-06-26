import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";

import "./SaleList.css";

class SaleList extends Component {
  state = {};
  render() {
    return (
      <div className="Product-top">
        <Image className="img" src="./img/sale/sale1.jpg" />
        <div className="overlay-right">
          <Button
            className="btn-secondary"
            type="button"
            variant="outline-secondary"
            title="Quick shop"
          >
            <i className="fa fa-eye" aria-hidden="true" />
          </Button>
          <Button
            type="button"
            className="btn-secondary"
            variant="outline-secondary"
            title="Quick shop"
          >
            <i className="fa fa-heart" aria-hidden="true" />
          </Button>
          <Button
            className="btn-secondary"
            type="button"
            variant="outline-secondary"
            title="Add to Cart"
          >
            <i className="fa fa-shopping-cart" aria-hidden="true" />
          </Button>
        </div>
        <div className="product-bottom text-center">
          <i className="fa fa-star" area-hidden="true" />
          <i className="fa fa-star" area-hidden="true" />
          <i className="fa fa-star" area-hidden="true" />
          <i className="fa fa-star" area-hidden="true" />
          <i className="fa fa-star-half" area-hidden="true" />
          <h3> Fitness Watch</h3>
          <h5>$40.00</h5>
        </div>
      </div>
    );
  }
}

export default SaleList;
