import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import NavBar from "./Navbar";
import "../styles.css";

export default function Header() {
  return (
    <>
      <Container fluid className="d-flex-column text-center">
        <Row className="my-3">
          <Col>
            <h1 className="slogan">
              <span className="bracket">[</span>
              <span className="s-text"> Making your Life Easier </span>
              <span className="bracket">]</span>
            </h1>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <h1>
              Discovering the World
            </h1>
          </Col>
        </Row>
      </Container>
      <NavBar />
    </>
  );
}