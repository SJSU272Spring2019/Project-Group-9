import React, { Component } from 'react';
import { Jumbotron, Row, Col, Container, ListGroup } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Profile from './Profile';
import Evaluation from './Evaluation';
import Header from '../Navigation/Header'
import RecomendedProducts from './RecomendedProducts';
import Physio from './physio'
import '../../Styles/Dashboard.css';

class Dashboard extends Component {
  // Product recommendations
  // video recomendations
  // profile
  // evaluation
  // log/physical therapy sessions
  constructor(props) {
    super(props);
    this.state = {
      currentPageId: 0,
      pages: [0,1,2,3],
      titles: ["Profile", "Evaluations", "Physical Therapy", "Recommended Products"]
    }
  }

  componentWillMount=()=> {
    this.setState({
      currentPageId: 0
    })
  }

  handleLink=(i)=> {
    console.log(i);
    this.setState({
      currentPageId: i
    })
  }

  isActive = () => {

  }

  loggedIn=()=> {
    return localStorage.hasOwnProperty('token')
  }

  render() {
    let page;
    let mainPage = <></>
    const id = this.state.currentPageId;
    if (!this.loggedIn()) {
      mainPage = <Redirect to="/productdisplay" />
    }
    switch (id) {
      case 0:
        page = <Profile></Profile>
        break;
      case 1:
        page = <Evaluation></Evaluation>
        break;
      case 2:
        page = <Physio></Physio>
        break;
      case 3:
        page = <RecomendedProducts></RecomendedProducts>
        break;
      default:
    }

    return (
      <>
      <Header />
      <br />
      <Container fluid>
      {mainPage}
        <Row>
          <Col md={2} lg={2}>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={3}>
              <ListGroup>
              {this.state.pages.map(
                item => (
                  <ListGroup.Item>
                     <a href="#" key={item.toString()} onClick={() => this.handleLink(item)}>{this.state.titles[item]}</a>
                  </ListGroup.Item>
                )
              )}
              </ListGroup>
          </Col>
          <br />
          <Col sm={12} md={12} lg={8} xl={9}>
            <Jumbotron>
              {page}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Dashboard;
