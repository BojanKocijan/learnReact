import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
sayhello(name) {
  return "Hello " + name;
}

constructor(props){
  super(props);
  this.yourname = "ammy";
  this.state = {};
}

  render() {
    const myName = "Boki";
    return (
      <div className="App">
        <h2>just some sample data: {this.yourname}</h2>
      </div>
    );
  }
}


export default App;
