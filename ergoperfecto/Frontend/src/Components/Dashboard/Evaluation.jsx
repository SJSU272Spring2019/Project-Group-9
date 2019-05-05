import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Row, Col, Form, Button, Table, Modal} from 'react-bootstrap';
import EvaluationForm from './EvaluationForm';

class Evaluation extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      selectedCategory: -1
    };

    this.handleShow = (i) => {
      this.setState({ show: true, selectedCategory: i });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  componentWillMount=()=>{
    const questions = this.importAll();
    console.log(questions);
    this.setState( {
      data: questions,
      selectedCategory: -1
    });
  }

  importAll=(r)=> {
    let questions = require('../../questions.json');
    return questions;
  }


  render() {
    var evalForm;
    const c = this.state.selectedCategory;
    if (c != -1) {
      evalForm = <EvaluationForm category={c} />
    }
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
           </Modal.Title>
         </Modal.Header>
         <Modal.Body>
          {evalForm}
         </Modal.Body>
       </Modal>
       <div style={{margin: "20px"}}>
        <Row>
          <Col md={12} lg={12}>
            <h3>Begin New Evaluation</h3>
            {this.state.data.map((item,i) => <Button variant="warning" className="evalButton" onClick={() => this.handleShow(i)} key={i}>{item.category}</Button>)}
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12}>
            <h3>Evaluations</h3>
            <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >dd/mm/yyyy</td>
                  <td><Button variant="info" type="submit">View</Button></td>
                </tr>
              </tbody>
            </Table>
            </Row>
            <Row>
              <Button variant="primary" type="submit" onClick={this.handleShow}>New Evaluation</Button>
            </Row>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default Evaluation;
