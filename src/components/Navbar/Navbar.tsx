import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../styles/Navbar.scss";

function navbar(): JSX.Element {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto green-links">
          <Nav.Link href="#" className="mx-4">
            Home
          </Nav.Link>
          <Nav.Link href="##" className="mx-4">
            Meals
          </Nav.Link>
          <Nav.Link href="###" className="mx-4">
            About Us
          </Nav.Link>
          <Nav.Link href="####" className="mx-4">
            Services
          </Nav.Link>
          <Nav.Link href="#####" className="mx-4">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
