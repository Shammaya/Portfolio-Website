
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation({user}){
   return (
<Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"}>
  <Container>
  <Navbar.Brand href={"/"}>{user.name}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link href="/education">Education</Nav.Link> */}
      <Nav.Link href={"/projects"}>Projects</Nav.Link>
     
    </Nav>
    <Nav>
      {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
      <Nav.Link eventKey={2} href={"/contact-me"}>
        Contact Me
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
);
}