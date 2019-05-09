

import React, { Component } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import Ratings from './Ratings';
import PriceCard from './PriceCard'
import '../../../Styles/Pagination.css'

class ProductCard extends Component {

  constructor(props) {
     super(props);
  }

  render() {
    return (
      <Card className="responsiveCard" style={{borderRadius: '20px'}}>
        <br/>
        <Card.Img variant="top" src={this.props.src} style={{width:'100', height:'100', mode: 'fit'}}/>
        <Card.Body>
        
          <Card.Text>
            <Ratings />
            <PriceCard />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductCard;
