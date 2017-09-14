import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/api/v1/garage')
      .then(res => res.json())
      .then(garage => console.log(garage))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
