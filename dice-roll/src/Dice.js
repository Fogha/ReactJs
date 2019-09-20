import React, { Component } from 'react';
import './Dice.css';

export default class Dice extends Component {
  render() {
    return (
      <div>
        <i className={`Die fas fa-dice-${this.props.face}`}></i>
      </div>
    )
  }
}
