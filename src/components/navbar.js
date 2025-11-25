import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      {/*Logo */}
      <Navbar.Brand as={NavLink} to="/" className="ps-5 fw-standard">
        JOHN DOE
      </Navbar.Brand>

      {/*Toggle for responsive menu (hamburger)*/}
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-5" />

      <Navbar.Collapse id="basic-navbar-nav" className="ps-5">
        <Nav className="pe-5 ms-auto">
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
    </Navbar>
  );
}
