import React from 'react'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import "../styles.css";

export default function NavBar() {

  return (
    <Container fluid className="d-flex justify-content-center">
      <Navbar bg="light" expand="lg">
        <Nav className="me-auto">
          <Row>
            <Col xs={4} md={2}><Nav.Link href="#all">All</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#travel">Travel</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#lyfestyle">Lifesyle</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#business">Business</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#food">Food</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#work">Work</Nav.Link></Col>
          </Row>
        </Nav>
      </Navbar>
    </Container>
  )
}