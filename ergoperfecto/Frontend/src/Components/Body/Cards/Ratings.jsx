

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Ratings extends Component {

  render() {
    return (
      <div>
        <FontAwesomeIcon icon="star" style={{color: '#fcdc06'}}/>
        <FontAwesomeIcon icon="star" style={{color: '#fcdc06'}}/>
        <FontAwesomeIcon icon="star" style={{color: '#fcdc06'}}/>
        <FontAwesomeIcon icon="star" style={{color: '#fcdc06'}}/>
        <FontAwesomeIcon icon="star" style={{color: '#d2d2d2'}}/>
      </div>
    );
  }
}

export default Ratings;
