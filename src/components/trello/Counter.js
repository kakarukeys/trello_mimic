import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/trello/counter.scss';


class Counter extends Component {
  render() {
    let {num} = this.props;

    return (
      <div className="counter">
        { num }<br/>
        PROJECTS
      </div>
    );
  }
}

Counter.propTypes = {
  num: PropTypes.number.isRequired,
};


export default Counter;
