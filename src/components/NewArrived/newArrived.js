import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./newArrived.css";
import SaleList from "../SaleOn/SaleList";

const newArrived = () => {
  return (
    <section className="on-sale">
      <Container>
        <div className="title-box">
          <h2>New Arrived</h2>
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
    </section>
  );
};
export default newArrived;
