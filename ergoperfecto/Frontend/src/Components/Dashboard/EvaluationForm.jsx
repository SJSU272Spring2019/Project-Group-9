import React, {Component} from 'react';
import {Row, Col, Form, Button, Table, Modal, Badge} from 'react-bootstrap';
import Question from './Question.jsx';
import API from '../../api/API'
import axios from 'axios'

class EvaluationForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isChecked: false,
      data: this.props.data,
      answers: {data:[]},
      currentQuestion: 0,
      currentCategory: this.props.category,

    };

    this.handleChecked = this.handleChecked.bind(this);

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }


  componentWillMount=()=>{
    // const questions = this.importAll();
    // console.log(questions);
    this.setState( {
      currentQuestion: 0,

    });
  }

  // importAll=(r)=> {
  //   let questions = require('../../questions.json');
  //   return questions;
  // }

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
        currentQuestion: id,
        isChecked: this.state.answers.data[id].answer
      })
    }
  }

  nextQuestion=()=> {
    // section id
    let sid = this.state.data[this.state.currentCategory].id;
    // question id
    let qid = this.state.data[this.state.currentCategory].questions[this.state.currentQuestion].id;
    // question & answer
    let qa = {sectionId: sid, questionId: qid, answer: this.state.isChecked}
    // answers.data
    let d = this.state.answers.data
    d.push(qa)
    this.setState({
      answers: {data: d},
      isChecked: false
    })
    // Forward Traversal of Questions List
    let id = this.state.currentQuestion
    if(!this.isLastQuestion()) {
      id = id + 1
       this.setState({
         currentQuestion: id,
         isChecked: false
       })
       console.log(this.state.isChecked);
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
    let output = this.state.data[this.state.currentCategory].questions[this.state.currentQuestion].title;
    // Reminder: possible point of failure if schema doesnt match json
    return output;
  }

  getCurrentCategory = () => {
    let output = this.state.data[this.state.currentCategory]["name"];
    console.log(output);
    // Reminder: possible point of failure if schema doesnt match json
    return output;
  }

  handleSubmit =  async () => {
    const formData = this.state.answers
    const url = API.baseURL + API.routes.answers
    axios.post(url, formData, {headers: {
      token: localStorage.getItem("token")
    }})
      .then((res) => {
        console.log(res.data)
      }).catch(err => console.log("error!", err))
    this.setState({ validated: true })
  }

  handleChecked () {
    let c = !this.state.isChecked
    console.log(c);
    this.setState({isChecked: c});
  }

  render() {
    const question = this.getCurrentQuestion();
    const category = this.getCurrentCategory();
    let previous;
    let instructions = <></>;
    let next;
    if (!this.isFirstQuestion()) {
      previous = <Button variant="primary" type="submit" onClick={this.previousQuestion}>Previous</Button>
    } else {
      previous = <Button variant="primary" type="submit" disabled>Previous</Button>
      instructions = <Badge variant="light">Check if yes, leave blank if no</Badge>
    }

    if (!this.isLastQuestion()) {
      next =  <Button variant="primary"   onClick={this.nextQuestion}>Next</Button>
    } else {
      next =  <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
    }
    {//
    // if (this.isLastCategory() && this.isLastQuestion()) {
    //   next =  <Button variant="success" type="submit" href="/dashboard">Submit</Button>
    // }
    }
    let checkBox;
    if (this.state.isChecked) {
      checkBox = <Form.Check label="Yes" name="check" id="formHorizontalRadios1" checked={true} onClick={ this.handleChecked } />;
    } else {
      checkBox = <Form.Check label="Yes" name="check" id="formHorizontalRadios1" checked={false} onClick={ this.handleChecked } />;
    }
    return (

      <div style={{padding: "5px"}}>
        <Form>
        <fieldset>
           <Form.Group as={Row}>
           <Col lg={12}>
             <Form.Label as="Col">
              <Question category={category} question={question} />
              {instructions}
             </Form.Label>
               {checkBox}
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

export default EvaluationForm;
