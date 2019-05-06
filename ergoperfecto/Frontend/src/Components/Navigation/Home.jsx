import React, { Component } from 'react';
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge} from 'react-bootstrap';

import {Redirect} from 'react-router';
import { Jumbotron, Row, Col } from 'react-bootstrap';

import Pagination from '../Navigation/Pagination';
import ProdDisplay from './ProdDisplay';
import VidDisplay from './VidDisplay'
import './Home.css'
class Home extends Component {

  render() {
    return (
        <Container fluid>
        <Row>
          <Col sm={30} md={40} lg={100}>
            <ProdDisplay />
            <VidDisplay />
          </Col>
      
        </Row>
        <Row>
              
      
        </Row>
 
      </Container>

    );
  }
}

export default Home;
