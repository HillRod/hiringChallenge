import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function NavBar() {

  return (
    <Container className="d-flex justify-content-center">
      <Navbar bg="light" expand="lg">
        <Nav className="me-auto">
          <Nav.Link href="#all">All</Nav.Link>
          <Nav.Link href="#travel">Travel</Nav.Link>
          <Nav.Link href="#lyfestyle">Lifesyle</Nav.Link>
          <Nav.Link href="#business">Business</Nav.Link>
          <Nav.Link href="#food">Food</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  )
}