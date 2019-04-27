

import React, { Component } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import Ratings from './Cards/Ratings.js';

class ProductCard extends Component {

  constructor(props) {
     super(props);
     // Will use props for these
     //let name = "Product Card";
     //let src = "https://via.placeholder.com/280x180/5555FF";
     // If statement temporary
     // if (props.name !== null) name = props.name;
     // if (props.src !== null) src = props.src;
     this.state = {
                    src: this.props.src,
                    name: this.props.name
                  };
  }

  render() {
    return (

      <Card style={{ width: '12rem', margin: '2px', textAlign: 'center', display: 'inline-block' }}>
        <Card.Img variant="top" src={this.props.src} style={{width:'1000', height:'100', mode: 'fit'}}/>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>
            <Ratings />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductCard;
