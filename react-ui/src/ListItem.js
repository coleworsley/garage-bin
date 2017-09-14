import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      showDetail: false,
    }
  }

  render() {
    const listItemStatus = showDetail ? 'detail' : '';

    return (
      <div className='listItem'>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props.cleanliness}</p>
      </div>
    )
  }
}
