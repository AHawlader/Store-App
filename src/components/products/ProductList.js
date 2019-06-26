import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";

const Example = props => {
  return (
    <Container>
      <Row className="card-row">
        <Col>
          <div>
            <Card className="card-view">
              <CardImg
                top
                width="100%"
                height="200px"
                src="./img/laptop.png"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h5>Computer & gaming</h5>
                </CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  <h6>
                    RAM - 256 GB M.2 SSD - Intel HD Graphics 620 - 13.3 FHD
                    Laptop - Silver
                  </h6>
                </CardText>
                <Button>Quick View</Button>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <CardImg
                width="100%"
                height="200px"
                src="./img/laptop.png"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h5>Computer & gaming</h5>
                </CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  <h6>
                    RAM - 256 GB M.2 SSD - Intel HD Graphics 620 - 13.3 FHD
                    Laptop - Silver
                  </h6>
                </CardText>
                <Button>Quick View</Button>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <CardImg
                top
                width="100%"
                height="200px"
                src="./img/laptop.png"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h5>Computer & gaming</h5>
                </CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  <h6>
                    RAM - 256 GB M.2 SSD - Intel HD Graphics 620 - 13.3 FHD
                    Laptop - Silver
                  </h6>
                </CardText>
                <Button>Quick View</Button>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Example;
