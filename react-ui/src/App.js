import React, { Component } from 'react';
import './App.css';

const initialState = {
  
}

class App extends Component {
  constructor() {
    this.state = initialState;
  }


  componentDidMount() {
    fetch('/api/v1/garage')
      .then(res => res.json())
      .then(garage => console.log(garage))
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
