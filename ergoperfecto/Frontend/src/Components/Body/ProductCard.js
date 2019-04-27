

import React, { Component } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import Ratings from './Cards/Ratings.js';

class ProductCard extends Component {

  render() {
    return (
      <Card style={{ width: '12rem', margin: '2px', textAlign: 'center' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/286x180/5555FF/808080" />
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
