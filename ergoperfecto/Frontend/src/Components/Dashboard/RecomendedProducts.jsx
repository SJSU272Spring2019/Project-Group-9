import React, { Component } from 'react';
import {Redirect} from 'react-router';
import ProductCard from '../Body/Cards/ProductCard'
import {Row, Col, Tabs, Tab, Carousel} from 'react-bootstrap';

import API from '../../api/API'
import axios from 'axios'

class RecomendedProducts extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);

     this.state = {
       index: 0,
       direction: null,
     };
   }



  componentWillMount=()=>{

  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    const image1 = require('../../products/chair1.jpg')
    const image2 = require('../../products/wayfair-homestar-height-adjustable-desk.jpg')
    const image3 = require('../../products/staples-imouse-wireless-vertical-ergonomic-mouse.jpg')
    return (
      <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
        <Tab eventKey="products" title="Products">
          <div className="recommendedContent">
            <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
               <Carousel.Item>
                <Row>
                <Col sm={1} md={1} lg={1}></Col>
                  <Col sm={3} md={3} lg={3}>
                    <h3>Lumbar Support Chair</h3>
                    <p>Helps relieve back pain and provides support to the lumbar area.<br />Helps to put your spine in the correct "S" position for better posture and less strain on your spine. Breathable mesh fabric allows air flow while keeping you cool and comfortable </p>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                      <img src={image1} width="300"/>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col sm={1} md={1} lg={1}></Col>
                  <Col sm={3} md={3} lg={3}>
                    <h3>Vertical Mouse </h3>
                    <p>Ergonomic mouse is designed with a vertical orientation and a contoured shape that provides a uniquely comfortable user experience</p>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <img src={image3} width="300"/>
                  </Col>
                </Row>
             </Carousel.Item>
             <Carousel.Item>
               <Row>
                 <Col sm={1} md={1} lg={1}></Col>
                 <Col sm={3} md={3} lg={3}>
                   <h3>Adjustable Desk</h3>
                   <p>Height-adjustable desks allow workers to easily change postures from sitting to standing height throughout the day which can positively impact physical health</p>
                 </Col>
                 <Col sm={4} md={4} lg={4}>
                   <img src={image2} width="300"/>
                 </Col>
               </Row>
            </Carousel.Item>
           </Carousel>
          </div>
        </Tab>
        <Tab eventKey="exercises" title="Exercises">
          <div className="recommendedContent">
          <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
             <Carousel.Item>
              <Row>
              <Col sm={1} md={1} lg={1}></Col>
                <Col sm={3} md={3} lg={3}>
                  <h3>Lumbar Support Chair</h3>
                  <p>Helps relieve back pain and provides support to the lumbar area.<br />Helps to put your spine in the correct "S" position for better posture and less strain on your spine. Breathable mesh fabric allows air flow while keeping you cool and comfortable </p>
                </Col>
                <Col sm={4} md={4} lg={4}>
                    <img src={image1} width="300"/>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col sm={1} md={1} lg={1}></Col>
                <Col sm={3} md={3} lg={3}>
                  <h3>Vertical Mouse </h3>
                  <p>Ergonomic mouse is designed with a vertical orientation and a contoured shape that provides a uniquely comfortable user experience</p>
                </Col>
                <Col sm={4} md={4} lg={4}>
                  <img src={image3} width="300"/>
                </Col>
              </Row>
           </Carousel.Item>
           <Carousel.Item>
             <Row>
               <Col sm={1} md={1} lg={1}></Col>
               <Col sm={3} md={3} lg={3}>
                 <h3>Adjustable Desk</h3>
                 <p>Height-adjustable desks allow workers to easily change postures from sitting to standing height throughout the day which can positively impact physical health</p>
               </Col>
               <Col sm={4} md={4} lg={4}>
                 <img src={image2} width="300"/>
               </Col>
             </Row>
          </Carousel.Item>
         </Carousel>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default RecomendedProducts;
