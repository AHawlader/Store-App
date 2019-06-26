import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./featured.css";

const Features = () => {
  return (
    <section className="feature-catagory">
      <Container>
        <Row>
          <Col className="feature-img">
            <Image src="./img/feature/Feature1.jpg" />
          </Col>
          <Col className="feature-img">
            <Image src="./img/feature/Feature2.jpg" />
          </Col>
          <Col className="feature-img">
            <Image src="./img/feature/Feature1.jpg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Features;
