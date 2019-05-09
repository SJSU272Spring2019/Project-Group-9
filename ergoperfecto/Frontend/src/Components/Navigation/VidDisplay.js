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
      <div style={{marginLeft: '10'}}>
      {this.state.rows.slice(0, 4).map( (member) => {
        return (<VideoCard title={member["title"]} src={member["src"]}/>)
      }) }
      </div>
    );
  }
}

export default VidDisplay;
