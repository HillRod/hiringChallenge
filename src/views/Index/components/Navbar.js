import React from 'react'
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import "../styles.css";

export default function NavBar({setFilter}) {

  return (
    <Container fluid className="d-flex justify-content-center">
      <Navbar bg="light" expand="lg">
        <Nav className="me-auto">
          <Row>
            <Col xs={4} md={2}><Nav.Link href="#all" onClick={() => setFilter('All')}>All</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#travel" onClick={() => setFilter('Travel')}>Travel</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#lifestyle" onClick={() => setFilter('Lifestyle')}>Lifesyle</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#business" onClick={() => setFilter('Business')}>Business</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#food" onClick={() => setFilter('Food')}>Food</Nav.Link></Col>
            <Col xs={4} md={2}><Nav.Link href="#work" onClick={() => setFilter('Work')}>Work</Nav.Link></Col>
          </Row>
        </Nav>
      </Navbar>
    </Container>
  )
}