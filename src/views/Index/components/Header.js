import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";

export default function Header() {
  return (
    <Container>
      <h1>Header</h1>
      <NavBar />
    </Container>
  );
}