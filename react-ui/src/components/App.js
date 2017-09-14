import React, { Component } from 'react';
import GarageDoor from './GarageDoor';
import InputContainer from './InputContainer';
import List from './List';
import { GARAGE_ENDPOINT } from '../utils/constants';
import { getItems } from '../helpers';

const initialState = {
  items: [],
  error: '',
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.postItem = this.postItem.bind(this);
  }

  postItem(body) {
    fetch(GARAGE_ENDPOINT, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(body),
    })
    .then(res => res.json())
    .then(item => {
      const { items } = this.state;
      this.setState({ items: [...items, item], error: '' })
    })
    .catch((error) => {
      this.setState({ error });
    })
  };

  componentDidMount() {
    getItems(this);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <main>
          <GarageDoor />
          <InputContainer postItem={this.postItem} />
          <List items={this.state.items} />
        </main>

      </div>
    );
  }
}

export default App;
