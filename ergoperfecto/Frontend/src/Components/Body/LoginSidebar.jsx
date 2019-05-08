import React, { Component } from 'react';
import {Card, Button, Row, Col, Form, Alert} from 'react-bootstrap';
import {Redirect, withRouter} from 'react-router-dom'
import AlertMessage from './AlertMessage'
import API from '../../api/API'
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import "../../Styles/Navigation.css"

class LoginSidebar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        signUp: 1,
        error: false,
        errorMessage: "",
        firstName: "", //required
        lastName: "", //Required
        email: "",  //required
        password: "",  //required
        city: "",
        state: "",
        zip: "",
      };
    }

    switchFormState=()=> {
      this.clearForm()
      let formState = this.state.signUp
      formState = -formState
      this.setState({
        signUp: formState,
        firstName: "", //required
        lastName: "", //Required
        email: "",  //required
        password: "",  //required
        city: "",
        state: "",
        zip: "",
      })
    }

    onChange = (e) => {
       this.setState({ [e.target.name]: e.target.value, error: false });
    }

    clearForm = () => {
     if (this.state.signUp === 1)
      document.getElementById("registerForm").reset();
     else
      document.getElementById("loginForm").reset();
    }

   handleSubmit(event) {
     let formData;
     let endpoint;
     event.preventDefault();
     if(this.state.signUp === 1) {
       formData = {
          googleOAuth : false,
         firstName: this.state.firstName, //required
         lastName: this.state.lastName, //Required
         email: this.state.email,  //required
         password: this.state.password,  //required
         
       }

       endpoint = API.routes.register
     } else {
       formData = {
         email: this.state.email,  //required
         password: this.state.password,  //required
       }
       endpoint = API.routes.login
     }
     const url = API.baseURL + endpoint
     axios.post(url, formData)

      .then((response) => {
        if(response.data.success){
          localStorage.setItem("token",response.data.token);
          localStorage.setItem('user_id',response.data.user.id)
          localStorage.setItem('user_email',response.data.user.email)
          localStorage.setItem('user_name',response.data.user.name)
          this.clearForm();
          this.setState({
            redirect: true
          })
        }
        else{
          this.setState({
            error: true,
            errorMessage: response.data.message
          })
        }
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

   setRedirect = () => {

    console.log(this.state.redirect);
  }
  responseGoogle = (response) => {
    console.log("response form google",response)
    // console.log("token",response.Zi.access_token);
    // console.log("email",response.profileObj.email);
    // console.log("firstName",response.profileObj.givenName);
    // console.log("lastName",response.profileObj.familyName);
    let formData = {
      googleOAuth : true,
      firstName: response.profileObj.givenName, //required
      lastName: response.profileObj.familyName, //Required
      email: response.profileObj.email,  //required
      password: "googlelogin",  //required -- placeholder actual password string taken from backend
    }
    let   endpoint = API.routes.register
    const url = API.baseURL + endpoint
    axios.post(url, formData)
    .then((response) => {
      console.log(response)
      if(response.data.success){
        localStorage.setItem("token",response.data.token);
        localStorage.setItem('user_id',response.data.user.id)
        localStorage.setItem('user_email',response.data.user.email)
        localStorage.setItem('user_name',response.data.user.name)
        this.clearForm();
        this.setState({
          redirect: true
        })
      }
      else{
        this.setState({
          error: true,
          errorMessage: response.data.message
        })
      }
    })
    .catch(err => {
      console.log("error!", err.message)
      this.setState({
        error: true,
        errorMessage: err.message
      })
    })

  }

  signUpForm = () => {

    return (

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
        <Col md={12} lg={12}>
        <Button variant="success" type="submit" style={{width: '100%'}}>Sign Up</Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12} lg={12}>
          <h6>Already have an account?</h6>
          <Button variant="info" style={{width: '100%'}} onClick={this.switchFormState}>Login</Button>
        </Col>
      </Row>
    </Form>

    );
  }

  loginForm = () => {
    return (
      <Form id="loginForm" onSubmit={e => this.handleSubmit(e)}>
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
        <Col md={12} lg={12}>
        <Button variant="success" type="submit" style={{width: '100%'}}>Login</Button>
        </Col>

      </Row>
      <br />
      <Row>
        <Col md={12} lg={12}>
          <h6>Don't have an account?</h6>
          <Button variant="info" style={{width: '100%'}} onClick={this.switchFormState}>Sign Up</Button>
        </Col>
      </Row>
    </Form>);
  }

  renderErrorMessage=()=> {
    return(  <AlertMessage message={this.state.errorMessage} />)
  }

  render() {
    let myForm;
    let alert;
    let dashboard
    if(this.state.signUp == 1)
      myForm = this.signUpForm();
    else
      myForm = this.loginForm();
    if (this.state.error)
      alert = this.renderErrorMessage();
    if(this.state.redirect == true){
      dashboard = <Redirect to="/dashboard" />
    } else{
        dashboard = <></>
    }
    return (
      <>
      {dashboard}
      {alert}
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>Want personalised recommendations?</Card.Title>
          <br />
          <Card.Subtitle className="mb-2 text-muted">Sign Up Today!</Card.Subtitle>
          <Row>
            <Col md={12} lg={12}>
              {myForm}
            </Col>
          </Row>
          <br />
          <Row>
          <Col md={12} lg={12}>
            <GoogleLogin className="googleButton"
              clientId="811696992821-kqv2bdca8lrnuvq6mqr5vp8lggvv5inr.apps.googleusercontent.com"
              buttonText="Use Google Account"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </Col>
          </Row>
        </Card.Body>
      </Card>
      </>
    );
  }
}

export default LoginSidebar;
