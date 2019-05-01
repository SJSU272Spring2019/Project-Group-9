

import React, { Component } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import Ratings from './Cards/Ratings';

class VideoCard extends Component {

  constructor(props) {
     super(props);
  }

  render() {
    return (
      <Card style={{ width: '20rem', margin: '2px', textAlign: 'center', display: 'inline-block' }}>
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <iframe width="280" height="150" src={this.props.src} frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen allowfullscreen></iframe>
        <Ratings />
        </Card.Body>
      </Card>
    );
  }
}

export default VideoCard;
