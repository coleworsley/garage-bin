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
    this.handleListItemChange = this.handleListItemChange.bind(this);
  }

  postItem(body) {
    fetch(GARAGE_ENDPOINT, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(body),
    })
    .then(res => res.json())
    .then((item) => {
      const { items } = this.state;
      this.setState({ items: [...items, item], error: '' })
    })
    .catch((error) => {
      this.setState({ error });
    })
  };

  handleListItemChange(id, cleanliness) {
    fetch(`api/v1/garage/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(cleanliness),
    })
    .then((res) => res.json())
    .then((item) => {
      const { items } = this.state;
      const newItems = items.map((e) => {
        if (e.id === item.id) {
          e.cleanliness = item.cleanliness;
        }
        return e;
      });

      this.setState({ items: newItems, error: '' });
    })
    .catch((error) => {
      this.setState({ error })
    })
  }

  componentDidMount() {
    getItems(this);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <main>
          <GarageDoor />
          <InputContainer
            postItem={this.postItem}
          />
          <List
            items={this.state.items}
            handleListItemChange={this.handleListItemChange}
          />
        </main>

      </div>
    );
  }
}

export default App;
