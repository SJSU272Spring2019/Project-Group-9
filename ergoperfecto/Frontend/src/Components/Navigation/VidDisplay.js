import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import ChatBot from 'react-simple-chatbot';
import VideoCard from '../Body/Cards/VideoCard';


class VidDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {
      rows:[],
    
    }

    }
    login=(e)=>{
      this.setState({goto:true})
    }

  importAll=(r)=> {
    let videos = require('../../video.json');
    let result = []
    for (let obj in videos) {
      result.push(obj["src"]);
    }
    return videos;
  }
  componentWillMount=()=>{
    const videos = this.importAll();
    const values= Object.values(videos);
    this.setState({rows:values})
  }
  render() {

    return (
      <div>
      
        <Container fluid>
          <Row>
            <Col sm={9} md={9} lg={8}>
            <Jumbotron>
            
            
              <Row>
              {this.state.rows.slice(0, 4).map( (member) => {
                return (<VideoCard title={member["title"]} src={member["src"]}/>)
              }) }
              </Row>
            </Jumbotron>
            </Col>
            <Col >
      
          
          </Col>
           
          </Row>
        </Container>
      </div>
    );
  }
}

export default VidDisplay;
