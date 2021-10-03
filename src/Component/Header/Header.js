import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./header-logo.png";
import "./Header.css"
const Header = () => {
  return (
    <div className="row ">
      <Navbar
        className="fs-5 col-sm-12 col-md-10 mx-auto border-bottom rounded-3 fixed-top  shadow "
        bg="light"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand >
            <img
              src={logo}
              width="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="link"  to="/home">
                Home
              </NavLink>
              <NavLink className="link" to="/about">
                {" "}
                About
              </NavLink>
              <NavLink className="link" to="/service">
                Service
              </NavLink>
              <NavLink className="link" to="/contact">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
