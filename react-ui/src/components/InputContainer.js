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
    const disabled = Object.keys(this.state)
      .findIndex(key => this.state[key].length < 1) >= 0;

    return (
      <div className='input-container'>
        <h3 className="input-title">Enter a New Item</h3>
        <input id='name-input'
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}/>
        <input id='description-input'
          type='textarea'
          placeholder='description'
          name='description'
          value={this.state.description}
          onChange={(e) => this.handleChange(e)}/>
        <div className='select-box'>
          <select id='cleanliness-input'
            name='cleanliness'
            onChange={(e) => this.handleChange(e)}
            value={this.state.cleanliness}>
            <option value='Sparkling'>Sparkling</option>
            <option value='Dusty'>Dusty</option>
            <option value='Rancid'>Rancid</option>
          </select>
          <button id='submit-input'
            disabled={disabled}
            onClick={() => this.handleClick()}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}
