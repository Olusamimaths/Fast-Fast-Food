import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import navlinks from "./navlinks";
import TopBar from "../TopBar/TopBar";
import { NavLink } from "react-router-dom";

import "../../styles/Navbar.scss";

const Navigation: React.FC = () => {
  return (
    <>
      <TopBar />
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto green-links">
            {navlinks.map((navlink, i) => (
              <NavLink
                to={navlink.href}
                className={`mx-4 ${navlink.classNames}`}
                key={i}
              >
                {navlink.link_text}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
