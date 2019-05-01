import React, {Component} from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.category}</h3>
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default Question;
