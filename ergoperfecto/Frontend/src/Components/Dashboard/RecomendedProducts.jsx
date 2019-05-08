import React, { Component, useCallback } from 'react';
import {Redirect} from 'react-router';
import VideoCard from '../Body/Cards/VideoCard'
import {Row, Col, Tabs, Tab, Carousel} from 'react-bootstrap';

import API from '../../api/API'
import axios from 'axios'
var search = require('youtube-search');
var opts = {
  maxResults: 10,
  key: 'AIzaSyCHt0bzmXNaq4dhiXw8E_dqjOv-Rau9KBE',


};
class RecomendedProducts extends Component {
  constructor(props) {
    super(props);
     this.state = {
       index: 0,
       direction: null,
       rows:[]
     };
     this.handleSelect = this.handleSelect.bind(this);
     this.populaterows=this.populaterows.bind(this);
   }

  componentDidMount=()=>{

  }
  populaterows(results){
    this.setState({rows:results})
    console.log(this.state.rows)
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    var id=[],result,display=[],id1="",id2="",id3="",id4="",id5="";
    search('neck office ergonomics ', opts, function(err, results) {
      if(err) return console.log(err);

      console.log(results);
     result=results;
     var i=0;
      results.map(member=>

        id[i++]="https://www.youtube.com/embed/"+member.id


        )
        id.map(member=>  display.push(   <VideoCard title="Exercise 1" src={member}/>))

  })
 console.log(id,"check")



    const { index, direction } = this.state;
    const image1 = require('../../products/chair1.jpg')
    const image2 = require('../../products/wayfair-homestar-height-adjustable-desk.jpg')
    const image3 = require('../../products/staples-imouse-wireless-vertical-ergonomic-mouse.jpg')
    return (
      <>
      <h3>Recommendations</h3>
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


        {/*  VIDEO TAB BELOW    */}

        <Tab eventKey="exercises" title="Exercises">
          <div className="recommendedContent">
          <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
             <Carousel.Item>
              <Row>
                <Col sm={3} md={3} lg={3}></Col>
                <Col sm={3} md={3} lg={3}>
                    <VideoCard title="Exercise 1" src="https://www.youtube.com/embed/K88q_oEwRS8"/>
                </Col>
                <Col sm={3} md={3} lg={3}></Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col sm={3} md={3} lg={3}>
                </Col>
                <Col sm={3} md={3} lg={3}>
                  <VideoCard title="Exercise 2" src="https://www.youtube.com/embed/AJSDoHFN30Y" />
                </Col>
                <Col sm={3} md={3} lg={3}></Col>
              </Row>
           </Carousel.Item>
           <Carousel.Item>
             <Row>
               <Col sm={3} md={3} lg={3}></Col>
               <Col sm={3} md={3} lg={3}>
                 <VideoCard title="Exercise 3" src="https://www.youtube.com/embed/5lbe9oZbpDs" />
               </Col>
               <Col sm={3} md={3} lg={3}></Col>
             </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={3} md={3} lg={3}></Col>
              <Col sm={3} md={3} lg={3}>
                <VideoCard title="Exercise 4" src="https://www.youtube.com/embed/eJ48kgGJz88" />
              </Col>
              <Col sm={3} md={3} lg={3}></Col>
            </Row>
         </Carousel.Item>
         <Carousel.Item>
           <Row>
             <Col sm={3} md={3} lg={3}></Col>
             <Col sm={3} md={3} lg={3}>
               <VideoCard title="Exercise 5" src="https://www.youtube.com/embed/b2IXhNX5nJA" />
             </Col>
             <Col sm={3} md={3} lg={3}></Col>
           </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col sm={3} md={3} lg={3}></Col>
            <Col sm={3} md={3} lg={3}>
              <VideoCard title="Exercise 6" src="https://www.youtube.com/embed/XkT7jxFfPHA" />
            </Col>
            <Col sm={3} md={3} lg={3}></Col>
          </Row>
       </Carousel.Item>
       <Carousel.Item>
         <Row>
           <Col sm={3} md={3} lg={3}></Col>
           <Col sm={3} md={3} lg={3}>
             <VideoCard title="Exercise 7" src="https://www.youtube.com/embed/_JmSpW5CrhQ" />
           </Col>
           <Col sm={3} md={3} lg={3}></Col>
         </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row>
          <Col sm={3} md={3} lg={3}></Col>
          <Col sm={3} md={3} lg={3}>
            <VideoCard title="Exercise 8" src="https://www.youtube.com/embed/_JmSpW5CrhQ" />
          </Col>
          <Col sm={3} md={3} lg={3}></Col>
        </Row>
     </Carousel.Item>
     <Carousel.Item>
       <Row>
         <Col sm={3} md={3} lg={3}></Col>
         <Col sm={3} md={3} lg={3}>
           <VideoCard title="Exercise 9" src="https://www.youtube.com/embed/uylD3fdYrBM" />
         </Col>
         <Col sm={3} md={3} lg={3}></Col>
       </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
        <Col sm={3} md={3} lg={3}></Col>
        <Col sm={3} md={3} lg={3}>
          <VideoCard title="Exercise 10" src="https://www.youtube.com/embed/EcA9f7jxBjc" />
        </Col>
        <Col sm={3} md={3} lg={3}></Col>
      </Row>
     </Carousel.Item>
     <Carousel.Item>
       <Row>
         <Col sm={3} md={3} lg={3}></Col>
         <Col sm={3} md={3} lg={3}>
           <VideoCard title="Exercise 10" src="https://www.youtube.com/embed/AGkkicts6b0" />
         </Col>
         <Col sm={3} md={3} lg={3}></Col>
       </Row>
    </Carousel.Item>
         </Carousel>
          </div>
        </Tab>
      </Tabs>
      </>
    );
  }
}

export default RecomendedProducts;
