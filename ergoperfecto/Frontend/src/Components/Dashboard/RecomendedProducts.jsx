import React, { Component } from 'react';
import {Redirect} from 'react-router';
import {Row, Col, Form, Button, Table, Modal, Spinner} from 'react-bootstrap';

import API from '../../api/API'
import axios from 'axios'

class RecomendedProducts extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount=()=>{

  }

  render() {
    return (
      <div>
        <h3>Recomended Products</h3>
      </div>
    );
  }
}

export default RecomendedProducts;
