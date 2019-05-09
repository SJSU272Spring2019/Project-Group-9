import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Row, Col, Form, Button, Table, Modal} from 'react-bootstrap';
import VideoCard from '../Body/Cards/VideoCard';
import { Jumbotron, Container } from 'react-bootstrap';



class singleitem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rows:[],
      };

    }
    importAll=(r)=> {

        let videos = require('../physioex/'+this.props.match.params.name+".json");
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

          <Col sm={27} md={9} lg={12}>
            <Jumbotron>
              <Row>
           <h3>{this.props.match.params.name}</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <Button
           >Add More Videos</Button>
              </Row>
            </Jumbotron>
            </Col>
            <Col sm={12} md={9} lg={12}>
            <Jumbotron>
              <Row>
              {this.state.rows.map( (member) => {
                return (<VideoCard title={member["title"]} src={member["src"]}/>)
              }) }
              </Row>
            </Jumbotron>
            </Col>


          </Row>
        </Container>
                  </div>
          )
      }
  }

  export default singleitem;
