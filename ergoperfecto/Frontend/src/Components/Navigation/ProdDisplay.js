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
        {this.state.rows.slice(0, 3).map(member=><ProductCard src={member} name="Product Card" />)}
      </div>
    );
  }
}

export default ProdDisplay;
