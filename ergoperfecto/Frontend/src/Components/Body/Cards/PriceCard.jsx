

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class PriceCard extends Component {

  render() {
    return (
      <div>
         <b>Rate</b><br />
         <FontAwesomeIcon icon="star" style={{color: "#d2d2d2"}}/>
        <FontAwesomeIcon icon="star" style={{color: "#d2d2d2"}}/>
        <FontAwesomeIcon icon="star" style={{color: "#d2d2d2"}}/>
        <FontAwesomeIcon icon="star" style={{color: "#d2d2d2"}}/>
        <FontAwesomeIcon icon="star" style={{color: "#d2d2d2"}}/>
      </div>
    );
  }
}

export default PriceCard;
