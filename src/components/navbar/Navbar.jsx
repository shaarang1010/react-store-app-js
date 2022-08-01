import React from "react";

import { Container, Navbar } from "react-bootstrap";

export const NavBar = ({ brandName, cartItems }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">{brandName}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <i className="fa fa-shopping-cart"></i>:{" "}
            <a href="#login">{cartItems ? cartItems : 0}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
