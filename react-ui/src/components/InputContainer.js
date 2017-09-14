import React, { Component } from 'react';

const initialState = {
  name: '',
  description: '',
  cleanliness: 'Sparkling',
}

export default class InputContainer extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    this.props.postItem(this.state);
    this.setState(initialState);
  }

  render() {
    return (
      <div className='input-container'>
        <input id='name-input'
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}/>
        <input id='description-input'
          type='text'
          placeholder='description'
          name='description'
          value={this.state.description}
          onChange={(e) => this.handleChange(e)}/>
        <select id='cleanliness-input'
          name='cleanliness'
          onChange={(e) => this.handleChange(e)}
          value={this.state.cleanliness}>
            <option value='Sparkling'>Sparkling</option>
            <option value='Dusty'>Dusty</option>
            <option value='Rancid'>Rancid</option>
        </select>
        <button id='submit-input'
          onClick={() => this.handleClick()}>
          Submit
        </button>
      </div>
    )
  }
}
