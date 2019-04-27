

import React, { Component } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import Ratings from './Cards/Ratings.js';

class ProductCard extends Component {

  constructor(props) {
     super(props);
     // Will use props for naming the card
     let name = "Product Card";
     // If statement temporary
     if (props.name) name = props.name;
     this.state = {
                    src: props.src,
                    name: name
                  };
  }

  render() {
    return (

      <Card style={{ width: '12rem', margin: '2px', textAlign: 'center', display: 'inline-block' }}>
        <Card.Img variant="top" src={this.props.src} style={{width:'1000', height:'100', mode: 'fit'}}/>
        <Card.Body>
          <Card.Title>Product Card</Card.Title>
          <Card.Text>
            <Ratings />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductCard;
