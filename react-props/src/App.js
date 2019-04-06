import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Parent/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


class Parent extends Component {
  render(){
    return(
      <div>
        <h2>Just some info</h2>
        <Cars msg="Cars are cool" model="34567" coolCars={this.props.cars}/>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['Audi', 'BMW', 'Zastava']
}

class Cars extends Component {
  render () {
  console.log(this.props);
    return(
      <div>
        <h3>I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <p>{this.props.coolCars.map((item, i) => {
            return " "+item;
          })}</p>
      </div>
    );
  }
}

export default App;
