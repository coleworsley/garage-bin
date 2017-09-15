import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
    }
  }

  render() {
    const listItemStatus = this.state.showDetail ? 'detail' : 'detail-hidden';

    return (
      <div className={`listItem ${listItemStatus}`}>
        <p className='list-item__name'>Name: {this.props.name}</p>
        <p className='list-item__description'>Description: {this.props.description}</p>
        <select className='list-item__cleanliness'
          value={this.props.cleanliness}
          name='list-item-cleanliness'
          onChange={(e) => this.props.handleListItemChange(
            this.props.id,
            { cleanliness: e.target.value }
          )}>
            <option value='Sparkling'>Sparkling</option>
            <option value='Dusty'>Dusty</option>
            <option value='Rancid'>Rancid</option>
        </select>
        <button
          className='detail-btn'
          onClick={() => this.setState({ showDetail: !this.state.showDetail })}>
          { this.state.showDetail ? 'Hide Detail' : 'Show Detail'}
        </button>
      </div>
    )
  }
}
