import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Components life cycle
          </h1>
        </header>

        <Body />
      </div>
    );
  }
}



class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    //console.log("random number called");
    this.setState({r: Math.floor(Math.random()*100) })
  }
  render(){
    return(
      <div>
        <p className="App-intro">Some description</p>
        <button onClick={this.getRandomNumber}>Random number</button>
        <Numbers myNumber={this.state.r}/>
      </div>
    );
  }
}

class Numbers extends Component {
  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}


export default App;
