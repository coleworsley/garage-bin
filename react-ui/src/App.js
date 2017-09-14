import React, { Component } from 'react';
import GarageDoor from './GarageDoor';
import InputContainer from './InputContainer';
import List from './List';
import './App.css';

const initialState = {
  items: [],
  error: '',
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }


  componentDidMount() {
    fetch('/api/v1/garage')
      .then(res => res.json())
      .then(items => {
        this.setState({ items, error: '' })
      })
      .catch(error => {
        this.setState({ error })
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <main>
          <GarageDoor />
          <InputContainer />
          <List items={this.state.items}/>
        </main>

      </div>
    );
  }
}

export default App;
