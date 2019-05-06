import React, { Component } from 'react';
import {Redirect} from 'react-router';
import { Jumbotron, Row, Col, Container,Button } from 'react-bootstrap';

import Pagination from '../Navigation/Pagination';
import ProductCard from '../Body/Cards/ProductCard';


class ProdDisplay extends Component {
  constructor(props){
    super(props);
    super(props);
    this.state = {
      rows:[],
      memberid:"",
      
    }

    }
    login=(e)=>{
      this.setState({goto:true})
    }
  importAll=(r)=> {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  componentWillMount=()=>{
    const images = this.importAll(require.context('../../products', false, /\.(png|jpe?g|svg)$/));
    const values= Object.values(images);
    this.setState({rows:values})
  }
  render() {


    return (
      <div>

        <Container fluid>
          <Row>
            <Col sm={9} md={20} lg={25}>
            <Jumbotron>
            
              {this.state.rows.slice(0, 3).map(member=><ProductCard src={member} name="Product Card" />)}
              
            </Jumbotron>
            
            </Col>
            <Col >
            <Jumbotron>
         <h2>   Creating an ergonomic life</h2>


Necessities for an ergonomic office and workstation should include: an adjustable ergonomic chair, a computer input device and keyboard that helps maintain natural posture, proper lighting to avoid eye strain, and footrest so legs and feet are in a comfortable position.
 Get them with a much discounted price at ErgoPerfecto.<br /><i>Don't forget to ask for free consultation</i>       
         <br /> <br />
            <Button>Set Up your workstation <br /> Become ErgoPerfecto</Button>
          </Jumbotron>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProdDisplay;
