import React, { Component } from 'react';
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge} from 'react-bootstrap';


class Header extends Component {

  render() {
    return (
      <div>
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">✅ Ergonomics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/productdisplay">Products</Nav.Link>
            <Nav.Link href="/videodisplay">Videos</Nav.Link>
          </Nav>
          <Nav>
           <NavDropdown title="My Account" id="basic-nav-dropdown">
             <NavDropdown.Item href="/dashboard">
               Dashboard <Badge variant="info">2</Badge>
             </NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
           </NavDropdown>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />

      </div>
    );
  }
}

export default Header;