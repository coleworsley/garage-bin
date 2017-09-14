import React, { Component } from 'react';

export default class GarageDoor extends Component {
  constructor() {
    super();
    this.state = { open: false }
  }

  render() {
    const { open } = this.state;
    const garageStatus = open ? 'open' : 'closed';
    
    return (
      <div className={`garage-door ${garageStatus}`}></div>
    )
  }
}
