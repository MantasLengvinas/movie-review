import React, { Component } from 'react'
import Link from 'react-router-dom'

class Button extends Component {
  render(){
    return (
    <button
      className="global-button"
      id={this.props.id}
      disabled={this.props.disabled}>
      {this.props.text}
    </button>
    );
  }
}

export default Button;
