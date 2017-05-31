import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      let inputText = e.target.value.trim();

      this.props.onEnter(inputText);
      this.setState({text: ''});
      e.preventDefault();
    }
  }

  render() {
    let { onEnter } = this.props;

    return (
      <input 
        type="text" 
        className="form-control"
        value={this.state.text} 
        onChange={this.handleChange}
        onKeyDown={onEnter ? this.handleKeyDown : function () {}} />
    );
  }
}

TextInput.propTypes = {
  // function(text) {...}
  onEnter: PropTypes.func
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(null, mapDispatchToProps)(TextInput);
