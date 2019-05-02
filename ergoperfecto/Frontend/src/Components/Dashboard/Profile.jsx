import React, {Component} from 'react';
import {Form, Row, Col, InputGroup, Button} from 'react-bootstrap';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      firstName: "", //required
      lastName: "", //Required
      email: "",  //required
      password: "",  //required
      city: "",
      state: "",
      zip: "",

    };
  }

  onChange = (e) => {
     this.setState({ [e.target.name]: e.target.value });
   }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const formData = {
      firstName: this.state.firstName, //required
      lastName: this.state.lastName, //Required
      email: this.state.email,  //required
      password: this.state.password,  //required
    }

    axios.post("http://localhost:3001/register", formData)
     .then((res) => {
       console.log(res);
     })
     .catch(err => console.log(err))

    this.setState({ validated: true });

  }

  render() {
    const { validated } = this.state;
    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstname"
              placeholder="First name"
              defaultValue=""
              onChange={this.onChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastname"
              placeholder="Last name"
              defaultValue=""
              onChange={this.onChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} md={6} controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onChange}  required/>
            </Form.Group>
            <Form.Group as={Col} md={6} controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={this.onChange} required />
            </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" placeholder="City" onChange={this.onChange} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" name="state"  onChange={this.onChange} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" name="zip" onChange={this.onChange}  />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Button type="submit">Update</Button>
      </Form>
    );
  }
}

export default Profile;
