import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Row, Col, Form, Button, Table, Modal} from 'react-bootstrap';
import EvaluationForm from './EvaluationForm';

class Evaluation extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    return (
      <div>
        <Modal
         show={this.state.show}
         onHide={this.handleHide}
         size="lg"
         aria-labelledby="example-custom-modal-styling-title"
         >
         <Modal.Header closeButton>
           <Modal.Title id="example-custom-modal-styling-title">
             New Evaluation
           </Modal.Title>
         </Modal.Header>
         <Modal.Body>
          <EvaluationForm />
         </Modal.Body>
       </Modal>

        <h3>Evaluations</h3>
        <Row>
        <Table as={Col} md={6} striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td md={4}>dd/mm/yyyy</td>
              <td><Button variant="info" type="submit">View</Button></td>
            </tr>
          </tbody>
        </Table>
        </Row>
        <Row>
          <Button variant="primary" type="submit" onClick={this.handleShow}>New Evaluation</Button>
        </Row>
      </div>
    );
  }
}

export default Evaluation;
