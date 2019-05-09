import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Row, Col, Form, Button, Table, Modal, Spinner} from 'react-bootstrap';
import EvaluationForm from './EvaluationForm';
import API from '../../api/API'
import axios from 'axios'

class Evaluation extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      loading: true,
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
    const token = localStorage.getItem('token');

    const url = API.baseURL + API.routes.questions
    axios.get(url, {
        headers: {
          token: localStorage.getItem("token")
        }
    }).then((res) => {
        //This works
        console.log(res.data)
        this.setState({
          data: res.data.data,
          selectedCategory: -1,
          loading: false
        })
      }).catch(err => console.log("error!", err))
  }

  render() {
    let evalForm;
    let buttons;
    if (!this.state.loading) {
      console.log(this.state.data);
      buttons = this.state.data.map((item,i) => <Button variant="warning" className="evalButton" onClick={() => this.handleShow(i)} key={i}>{item.name}</Button>)
      const c = this.state.selectedCategory;
      if (c != -1) {
        evalForm = <EvaluationForm data={this.state.data} category={this.state.selectedCategory} />
      }
    } else {
      buttons = <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
    }
    return (
      <div>
        <Modal
         show={this.state.show}
         onHide={this.handleHide}
         size="xl"
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
            {buttons}
          </Col>
        </Row>

        </div>
      </div>
    );
  }
}

export default Evaluation;
