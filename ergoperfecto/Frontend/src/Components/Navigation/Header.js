import React, { Component } from 'react';
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge} from 'react-bootstrap';
import Content from '../Body/Content';

class Header extends Component {

  render() {
    return (
      <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">✅ Ergonomics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/productdisplay">Products</Nav.Link>
            <Nav.Link href="#link">Videos</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
           <NavDropdown title="My Account" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">
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
      <br /><br /><br />
      <Content />

      </div>
    );
  }
}

export default Header;
