import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./homeTop.css";

const HomeTop = () => {
  return (
    <div className="homeTop">
      <div>
        <div id="textContainer">
          <span id="name">
            <u>EduZone</u>
          </span>
          <h1>Education And Training Centar.</h1>
          <h5>We proviet best education system for you </h5>
          <NavLink to="/service">
            <Button className="my-3 mx-4 px-3 py-2">Our Course</Button>
          </NavLink>
          <NavLink to="/contact">
            <Button className="my-3 mx-4 px-3 py-2" variant="success">
              Contact us
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
