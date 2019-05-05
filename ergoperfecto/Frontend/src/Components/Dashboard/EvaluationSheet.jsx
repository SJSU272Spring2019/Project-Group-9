import React, {Component} from 'react';

import {Row, Col, Form, Button, Table, Modal} from 'react-bootstrap';
import Question from './Question.jsx';

class EvaluationSheet extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      answers: [],
      currentQuestion: 0,
      currentCategory: 0
    };

    this.handleShow = () => {
      this.setState({ show: true });
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
      currentQuestion: 0,
      currentCategory: 0
    });
  }

  importAll=(r)=> {
    let questions = require('../../questions.json');
    return questions;
  }

  isLastQuestion=()=> {
    let categoryId = this.state.currentCategory
    let id = this.state.currentQuestion
    if(id < this.state.data[categoryId].questions.length - 1) {
      return false;
    } else {
      return true;
    }
  }

  isFirstQuestion=()=> {
    let id = this.state.currentQuestion;
    if(id > 0) {
      return false;
    } else {
      return true;
    }
  }

  previousQuestion=()=> {
    let id = this.state.currentQuestion;
    if(!this.isFirstQuestion()) {
      id = id - 1;
      this.setState({
        currentQuestion: id
      })
    }
  }

  nextQuestion=()=> {
    let id = this.state.currentQuestion
    if(!this.isLastQuestion()) {
      id = id + 1
       this.setState({
         currentQuestion: id
       })
    }
  }

  isLastCategory=()=> {
    let categoryId = this.state.currentCategory
    if(categoryId < this.state.data.length - 1) {
      return false;
    } else {
      return true;
    }
  }

  nextCategory=()=> {
    let id = this.state.currentCategory
    if(!this.isLastCategory()) {
      id = id + 1
       this.setState({
         currentCategory: id,
         currentQuestion: 0
       })
    }
  }

  getCurrentQuestion = () => {
    let output = this.state.data[this.state.currentCategory].questions[this.state.currentQuestion];
    // Reminder: possible point of failure if schema doesnt match json
    return output["q"];
  }

  getCurrentCategory = () => {
    let output = this.state.data[this.state.currentCategory]["category"];
    console.log(output);
    // Reminder: possible point of failure if schema doesnt match json
    return output;
  }

  render() {
    const question = this.getCurrentQuestion();
    const category = this.getCurrentCategory();
    let previous;
    let next;
    if (!this.isFirstQuestion()) {
      previous = <Button variant="primary" type="submit" onClick={this.previousQuestion}>Previous</Button>
    } else {
      previous = <Button variant="primary" type="submit" disabled>Previous</Button>
    }

    if (!this.isLastQuestion()) {
      next =  <Button variant="primary" type="submit" onClick={this.nextQuestion}>Next</Button>
    } else {
      next =  <Button variant="primary" type="submit" onClick={this.nextCategory}>Next Category</Button>
    }

    if (this.isLastCategory() && this.isLastQuestion()) {
      next =  <Button variant="success" type="submit" href="/dashboard">Submit</Button>
    }

    console.log(question);
    return (
      <div style={{padding: "5px;"}}>
        <Form>
        <fieldset>
           <Form.Group as={Row}>
           <Col lg={12}>
             <Form.Label as="legend">
              <Question category={category} question={question} />
             </Form.Label>
               <Form.Check
                 type="radio"
                 label="Yes"
                 name="formHorizontalRadios"
                 id="formHorizontalRadios1"
               />
               <Form.Check
                 type="radio"
                 label="No"
                 name="formHorizontalRadios"
                 id="formHorizontalRadios2"
               />
             </Col>
           </Form.Group>
         </fieldset>
         </Form>
         <Row>
           <Col md={2}>
             {previous}
           </Col>
           <Col md={8}></Col>
           <Col md={2}>
            {next}
           </Col>
         </Row>
       </div>
    );
  }
}

export default EvaluationSheet;
