import React, { Component } from 'react';
import {Card, Button, Row, Col, Form} from 'react-bootstrap';

class LoginSidebar extends Component {

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Want personalised recommendations?</Card.Title>
          <br />
          <Card.Subtitle className="mb-2 text-muted">Sign Up Today!</Card.Subtitle>
          <Row>
            <Col md={12} lg={12}>
              <Form>
                <Form.Group >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Row>
                  <Col md={12} lg={12}>
                    <a href="/login"><Button variant="success" style={{width: '100%'}}>Sign Up</Button></a>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={12} lg={12}>
                    <h6>Already have an account?</h6>
                    <a href="/productdisplay"><Button variant="info" style={{width: '100%'}}>Login</Button></a>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default LoginSidebar;
