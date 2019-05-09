import React, { Component } from 'react';
import {Alert, Button, Col} from 'react-bootstrap';


class AlertMessage extends Component{
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
      <>
      <Alert show={this.state.show} variant="danger">
          <Button onClick={handleHide} style={{ fontFace: "monaco", width: "21px", padding: "0", borderRadius: "25px"}} variant="outline-light">X</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{this.props.message}</strong>
      </Alert>

      </>
    );
  }
}

export default AlertMessage;
