import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/*Logo */}
        <Navbar.Brand as={NavLink} to="/" className="fw-standard">
          JOHN DOE
        </Navbar.Brand>

        {/*Toggle pour le menu responsive*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="custom-nav-link" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/services" className="custom-nav-link">
              Services
            </Nav.Link>

            <Nav.Link as={NavLink} to="/portfolio" className="custom-nav-link">
              Portfolio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact" className="custom-nav-link">
              Contact
            </Nav.Link>

            <Nav.Link as={NavLink} to="/legal" className="custom-nav-link">
              Mentions Légales
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
