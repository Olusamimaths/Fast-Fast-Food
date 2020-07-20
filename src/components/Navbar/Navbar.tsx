import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../styles/Navbar.scss";

const navlinks = [
  {
    href: "#",
    link_text: "Home",
    classNames: "active",
  },

  {
    href: "#",
    link_text: "Meals",
    classNames: "",
  },

  {
    href: "#",
    link_text: "About Us",
    classNames: "",
  },

  {
    href: "#",
    link_text: "Services",
    classNames: "",
  },
  {
    href: "#",
    link_text: "Contact",
    classNames: "",
  },
];

function navbar(): JSX.Element {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto green-links">
          {navlinks.map((navlink, i) => (
            <Nav.Link
              href={navlink.href}
              className={`mx-4 ${navlink.classNames}`}
              key={i}
            >
              {navlink.link_text}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
