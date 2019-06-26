import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={3}>
            <h1>Useful Lisks</h1>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Return Policy</p>
            <p>Discount Coupons</p>
          </Col>
          <Col md={3}>
            <h1>Company</h1>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Cereer</p>
            <p>Affiliate</p>
          </Col>
          <Col md={3}>
            <h1>Follow Us</h1>
            <p>
              <i className="fa fa-facebook-official" aria-hidden="true" />
              Facebook
            </p>
            <p>
              <i className="fa fa-youtube-play" aria-hidden="true" />
              YouTube
            </p>
            <p>
              <i className="fa fa-linkedin" aria-hidden="true" />
              Linkedin
            </p>
            <p>
              <i className="fa fa-twitter" aria-hidden="true" />
              Twitter
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
