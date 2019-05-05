import React, { Component } from 'react';
import { Jumbotron, Row, Col, Container, ListGroup } from 'react-bootstrap';
import Profile from './Profile';
import Evaluation from './Evaluation';
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
      currentPageId: 0
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


  render() {
    let page;
    const id = this.state.currentPageId;

    switch (id) {
      case 0:
        page = <Profile></Profile>
        break;
      case 1:
        page = <Evaluation></Evaluation>
        break;
      default:

    }

    return (
      <Container fluid>
        <Row>
          <Col md={2} lg={2}>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={2} lg={2}>
              <ListGroup>
                <ListGroup.Item>
                  <a href="#">Product Recommendations</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">Video Recommendations</a>
                </ListGroup.Item>
                <ListGroup.Item >
                  <a href="#profile" onClick={() => this.handleLink(0)}>Profile</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#evaluation" onClick={() => this.handleLink(1)}>Evaluation</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#">Physical Therapy</a>
                </ListGroup.Item>
              </ListGroup>
          </Col>
          <Col sm={12} md={10} lg={10}>
            <div class="dashboard-content">
              {page}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
