

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class PriceCard extends Component {

  render() {
    return (
      <div>
         <b>Actual Price:$100</b><br />
        <b>Discounted Price:$50</b>
      </div>
    );
  }
}

export default PriceCard;
