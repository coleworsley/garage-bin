import React, { Component } from 'react';

export default class InputContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      cleanliness: 'Sparkling',
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className='input-container'>
        <input id='name-input'
          type='text'
          placeholder='name'
          name='name'
          value={this.state.nameInput}
          onChange={(e) => this.handleChange(e)}/>
        <input id='description-input'
          type='text'
          placeholder='description'
          name='description'
          value={this.state.descriptionInput}
          onChange={(e) => this.handleChange(e)}/>
        <select id='cleanliness-input'
          name='cleanliness'
          onChange={(e) => this.handleChange(e)}>
            <option value='Sparkling'>Sparkling</option>
            <option value='Dusty'>Dusty</option>
            <option value='Rancid'>Rancid</option>
        </select>
        <button id='submit-input' onClick={() => this.props.postItem(this.state)}>
          Submit
        </button>
      </div>
    )
  }
}
