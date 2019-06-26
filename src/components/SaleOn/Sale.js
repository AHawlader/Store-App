import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Sale.css";
import SaleList from "./SaleList";

const Sale = () => {
  return (
    <section className="on-sale">
      <Container>
        <div className="title-box">
          <h2>On Sale</h2>
        </div>
      </Container>
      <Container>
        <Row>
          <Col md={3}>
            <SaleList />
          </Col>
          <Col md={3}>
            <SaleList />
          </Col>
          <Col md={3}>
            <SaleList />
          </Col>
          <Col md={3}>
            <SaleList />
          </Col>
        </Row>
      </Container>
      <Container />
    </section>
  );
};
export default Sale;
