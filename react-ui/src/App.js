import React, { Component } from 'react';
import './App.css';

const initialState = {
  garageOpen: false,
  items: [],
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
        this.setState({ items })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
