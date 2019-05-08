import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Row, Col, Tabs, Tab} from 'react-bootstrap';

import API from '../../api/API'
import axios from 'axios'

class RecomendedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'products',
    };
  }

  componentWillMount=()=>{

  }

  render() {
    return (
      <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
        <Tab eventKey="products" title="Products">

        </Tab>
        <Tab eventKey="exercises" title="Exercises">

        </Tab>
      </Tabs>
    );
  }
}

export default RecomendedProducts;
