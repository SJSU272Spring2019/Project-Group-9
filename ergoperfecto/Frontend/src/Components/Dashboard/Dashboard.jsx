import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { Jumbotron, Row, Col, Container, ListGroup } from 'react-bootstrap';
import '../../Styles/Dashboard.css';

class Dashboard extends Component {
  render() {
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
                <ListGroup.Item active>Activity</ListGroup.Item>
                <ListGroup.Item>Logs</ListGroup.Item>
                <ListGroup.Item>Data</ListGroup.Item>
                <ListGroup.Item>Menu Option</ListGroup.Item>
                <ListGroup.Item>Menu Option</ListGroup.Item>
                <ListGroup.Item>Activity</ListGroup.Item>
                <ListGroup.Item>Logs</ListGroup.Item>
                <ListGroup.Item>Data</ListGroup.Item>
                <ListGroup.Item>Menu Option</ListGroup.Item>
                <ListGroup.Item>Menu Option</ListGroup.Item>
              </ListGroup>
          </Col>
          <Col sm={12} md={10} lg={10}>
            <div class="dashboard-content">
              content
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
