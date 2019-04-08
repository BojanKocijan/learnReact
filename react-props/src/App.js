import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          <h3>prop number is {this.props.propNumber}</h3>
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

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "This is string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }
}

class Parent extends Component {
constructor(props){
  super(props);

  this.state = {
    cars: ['Audi2', 'BMW2', 'Posrche', 'Zastava2']
  };
  this.handleClick = this.handleClick.bind(this);
}


handleClick(){
  this.setState( {cars: this.state.cars.reverse()})
}


  render(){
    return(
      <div>
        <h2 onClick={this.handleClick}>Just some info</h2>
        <Cars msg="Cars are cool" model="34567" coolCars={this.state.cars}/>
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
        <div>{this.props.coolCars.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}</div>
      </div>
    );
  }
}

export default App;
