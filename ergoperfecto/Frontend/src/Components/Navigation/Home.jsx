import React, { Component } from 'react';
import {Container, Navbar, Nav, NavDropdown, Modal, Form, FormControl, Button, Badge, Card} from 'react-bootstrap';
import {Redirect} from 'react-router';
import { Jumbotron, Row, Col, ListGroup } from 'react-bootstrap';
import Header from '../Navigation/Header'
import Pagination from '../Navigation/Pagination';
import ProdDisplay from './ProdDisplay';
import VidDisplay from './VidDisplay'
import './Home.css'
import API from '../../api/API'
import axios from 'axios'

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      times: [0,1,2],
      selectedTime: 0,
      redirect: false,
      titles: ["Wednesday May 8th, 6:15pm", "Wednesday May 8th, 7:15pm", "Thursday May 9th, 8:00am"]
    }

    this.handleShow = (i) => {
      this.setState({ show: true});
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  handleLink=(i)=> {
    console.log(i);
    this.setState({
      selectedTime: i
    })
  }

  clearForm = () => {
    document.getElementById("registerForm").reset();
  }


  handleSubmit(event) {
    let formData;
    let endpoint = API.routes.register
    event.preventDefault();
      formData = {
        firstName: this.state.firstName, //required
        lastName: this.state.lastName, //Required
        email: this.state.email,  //required
        password: this.state.password,  //required
      }
    const url = API.baseURL + endpoint
    axios.post(url, formData).then((response) => {
       console.log(response.data);
       localStorage.setItem("token",response.data.token);
       localStorage.setItem('user_id',response.data.user.id)
       localStorage.setItem('user_email',response.data.user.email)
       localStorage.setItem('user_name',response.data.user.name)
       this.clearForm();
       this.setState({
         redirect: true
       })
     })
     .catch(err => {
       console.log("error!", err.message)
       this.setState({
         error: true,
         errorMessage: err.message
       })
     })
   // this.setState({ validated: true });
  }

  onChange = (e) => {
     this.setState({ [e.target.name]: e.target.value, error: false });
  }


  render() {
    let redirect = <></>
    const selectedText = this.state.titles[this.state.selectedTime]
    if(this.state.redirect == true) {
      redirect = <Redirect to="dashboard" />
    }
    return (
      <>
      <Header />
      {redirect}
      <Modal
       show={this.state.show}
       onHide={this.handleHide}
       size="xl"
       aria-labelledby="example-custom-modal-styling-title"
       >
       <Modal.Header closeButton>
         <Modal.Title id="example-custom-modal-styling-title">
          Create an Account & Schedule a Consultation Appointment
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Form id="registerForm" onSubmit={e => this.handleSubmit(e)}>
         <Form.Group>
           <Form.Label>First Name</Form.Label>
           <Form.Control type="text" name="firstName" placeholder="First Name" onChange={this.onChange} />
         </Form.Group>
         <Form.Group >
           <Form.Label>Last Name</Form.Label>
           <Form.Control type="text" name="lastName" placeholder="Last Name" onChange={this.onChange} />
         </Form.Group>
         <Form.Group >
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onChange} />
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange} />
         </Form.Group>
         <Row>
          <Col sm={12} md={12} lg={12}>
            <h5>You've Selected {selectedText}</h5>
           <ListGroup as="ul">
           {this.state.times.map(
             item => (
               <ListGroup.Item >
                  <a href="#" key={item.toString()} onClick={() => this.handleLink(item)}>{this.state.titles[item]}</a>
               </ListGroup.Item>
             )
           )}
           </ListGroup>
          </Col>
         </Row>
         <br /><br />
         <Row>
           <Col md={12} lg={12}>
           <Button variant="success" type="submit" style={{width: '100%'}}>Sign Up</Button>
           </Col>
         </Row>
         <br />
       </Form>
       </Modal.Body>
      </Modal>
      <div className="homePage">
        <br /><br />
        <Container fluid >
          <Row>
            <Col sm={8} md={8} lg={8}>
              <Jumbotron>
                <Row>
                <h1>Explore Ergonomic Products</h1>
                  <Col sm={12} md={12} lg={12}>
                    <ProdDisplay />
                  </Col>
                </Row>
              </Jumbotron>
              <br /><br />
              <Jumbotron>
              <Row>
                <h1>Learn & Practice Helpful Exercises</h1>
                  <Col sm={12} md={12} lg={12}>
                    <VidDisplay />
                  </Col>
                </Row>
              </Jumbotron>
            </Col>
            <Col sm={4} md={4} lg={4}>
            <Card>
              <Card.Header>Adapting an ergonomic lifestyle</Card.Header>
              <Card.Body>
                <Card.Title>Welcome To ErgoPerfecto!</Card.Title>
                <Card.Text>
                Necessities for an ergonomic office and workstation should include: an adjustable ergonomic chair, a computer input device and keyboard that helps maintain natural posture, proper lighting to avoid eye strain, and footrest so legs and feet are in a comfortable position.
                Get them with a much discounted price at ErgoPerfecto.
                </Card.Text>
                <Button variant="primary">Set up your workstation</Button>
                <br /><br />
                <Button variant="info" onClick={this.handleShow}>Schedule a free consultation</Button>
              </Card.Body>
            </Card>
            </Col>
          </Row>
      </Container>
      </div>
      </>
    );
  }
}

export default Home;
