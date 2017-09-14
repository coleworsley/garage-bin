import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      showDetail: false,
    }
  }

  render() {
    const listItemStatus = this.state.showDetail ? 'detail' : '';

    return (
      <div className={`listItem ${listItemStatus}`}>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.cleanliness}</p>
      </div>
    )
  }
}
