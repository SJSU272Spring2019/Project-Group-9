import React, {Component} from 'react'
import {Form, Row, Col, InputGroup, Button} from 'react-bootstrap'
import axios from 'axios'
import API from '../../api/API'


class Profile extends Component {
    constructor(props) {
      super(props)
      this.state = {
        validated: false,
        editing: false,
        buttonText: "Edit",
      }
    }

    componentWillMount=()=> {
      const token = localStorage.getItem('token');
      const url = API.baseURL + API.routes.profile
      axios.get(url, {
          headers: {
            token: localStorage.getItem("token")
          }
      }).then((res) => {
          //This works
          console.log(res.data)
          this.setState({
            firstName: res.data.data.firstName,
            lastName: res.data.data.lastName,
            email: res.data.data.email
          })
        }).catch(err => console.log("error!", err))
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    clearForm = () => {
      document.getElementById("profileForm").reset()
    }

    setEditing=()=> {
      if(this.state.editing) {
        const formData = {
          firstName: this.state.firstName, //required
          lastName: this.state.lastName, //Required
          email: this.state.email,  //required
          password: this.state.password,  //required
        }
        const url = API.baseURL+API.rprofile
        axios.post(url, formData, {headers: {

            token: localStorage.getItem("token")
          }
        })
          .then((res) => {
            console.log(res.data)
            this.clearForm()
          }).catch(err => console.log("error!", err))
        this.setState({ validated: true })
      }
      let e = !this.state.editing
      let m = "Edit"
      if (e) {
        m = "Done"
      }
      this.setState({
        editing: e,
        buttonText: m
      })

    }


    handleSubmit=(event)=> {
      //event.preventDefault()
      const formData = {
        firstName: this.state.firstName, //required
        lastName: this.state.lastName, //Required
        email: this.state.email,  //required
        password: this.state.password,  //required
      }
      const url = API.baseURL + API.profile;
      axios.post(url ,formData, {headers: {
        token: localStorage.getItem("token")
      }})
        .then((res) => {
          console.log(res.data)
          this.clearForm()
        }).catch(err => console.log("error!", err.response.data))
      this.setState({ validated: true })
    }

  render() {
    const { validated } = this.state
    const buttonColor = (this.state.editing) ? "success" : "primary";
    return (
      <Form noValidate validated={validated} id="profileForm" onSubmit={e => this.handleSubmit(e)} >
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder={this.state.firstName}
              disabled={!this.state.editing}
              onChange={this.onChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder={this.state.lastName}
              disabled={!this.state.editing}
              onChange={this.onChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} md={6} controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder={this.state.email}
                disabled
                required
              />
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
                disabled={!this.state.editing}
                required
              />
            </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              onChange={this.onChange}
              disabled={!this.state.editing}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              name="state"
              onChange={this.onChange}
              disabled={!this.state.editing}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              name="zip"
              onChange={this.onChange}
              disabled={!this.state.editing}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
       <Button onClick={this.setEditing} variant={buttonColor}>{this.state.buttonText}</Button>
      </Form>
    )
  }
}

export default Profile
