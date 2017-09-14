import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
    }
  }

  render() {
    const listItemStatus = this.state.showDetail ? 'detail' : '';

    return (
      <div className={`listItem ${listItemStatus}`}
        onClick={() => this.setState({ showDetail: !this.state.showDetail })}>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <select className='list-item-cleanliness'
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
      </div>
    )
  }
}
