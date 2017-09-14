import React, { Component } from 'react';
import GarageDoor from './GarageDoor';
import InputContainer from './InputContainer';
import List from './List';
import { GARAGE_ENDPOINT } from '../utils/constants';
// import { getItems } from '../helpers';

const initialState = {
  items: [],
  error: '',
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.getItems = this.getItems.bind(this);
    this.postItem = this.postItem.bind(this);
    this.handleListItemChange = this.handleListItemChange.bind(this);
  }

  getItems() {
    fetch(GARAGE_ENDPOINT)
      .then(res => res.json())
      .then(items => {
        this.sortList(items)
      })
      .catch(error => {
        this.setState({ error })
      })
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
      this.sortList([...items, item])
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

      this.sortList(newItems)
    })
    .catch((error) => {
      this.setState({ error })
    })
  }

  sortList(items) {
    this.setState({
      items: items.sort((a, b) => {
        const capA = a.name.toUpperCase();
        const capB = b.name.toUpperCase();
        return (capA < capB) ? -1 : (capA > capB) ? 1 : 0
      })
    });
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1 className='title'>Garage Bin</h1>
        </header>
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
