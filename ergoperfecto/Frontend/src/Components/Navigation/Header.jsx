import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge} from 'react-bootstrap';
import { GoogleLogout } from 'react-google-login';
import axios from 'axios'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  logout = () => {
    axios.get("http://localhost:3001/logout", {headers: {
        token: localStorage.getItem("token")
      }})
        .then((res) => {
          localStorage.removeItem('token');
          localStorage.removeItem('user_id');
          localStorage.removeItem('user_email');
          this.setState({redirect: true});
        }).catch(err => console.log("error!", err.response.data))
  }

  loggedIn=()=> {
    return localStorage.hasOwnProperty('token')
  }

  dashboard = () => {
    return (
      <Nav>
       <NavDropdown title="My Account" id="basic-nav-dropdown">
         <NavDropdown.Item href="/dashboard">
           Dashboard <Badge variant="info">2</Badge>
         </NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
         <NavDropdown.Divider />
         {/* <NavDropdown.Item href="#" onClick={this.logout}>Logout</NavDropdown.Item> */}
         <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={this.logout}
            >
         </GoogleLogout>
       </NavDropdown>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Nav>
    );
  }

  render() {
    let dropdown =<></>
    if(this.loggedIn()) {
      console.log("logged in");
      dropdown = this.dashboard()
    }

    let redirectLogout = <></>
    if(this.state.redirect) {
      redirectLogout = <Redirect to="/" />
    }

    else dropdown = <></>
    return (
      <div>
        {redirectLogout}
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="/">✅ ErgoPerfecto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/productdisplay">Products</Nav.Link>
            <Nav.Link href="/videodisplay">Videos</Nav.Link>
            <Nav.Link href="/chatbot">Chat With Us</Nav.Link>
          </Nav>

          {dropdown}
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default Header;
