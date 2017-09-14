import React, { Component } from 'react';

export default class InputContainer extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      descriptionInput: '',
      cleanlinessInput: '',
    }
  }

  handleChange(e) {
    this.setState({ cleanlinessInput: e.targe.value })
  }

  render() {
    return (
      <div className='input-container'>
        <input id='name-input' type='text' placeholder='name'/>
        <input id='description-input' type='text' placeholder='description'/>
        <select id='cleanliness-input'>
          <option value='Sparkling'>Sparkling</option>
          <option value='Dusty'>Dusty</option>
          <option value='Rancid'>Rancid</option>
        </select>
        <button id='submit-input'></button>
      </div>
    )
  }
}
