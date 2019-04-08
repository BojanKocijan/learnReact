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
  componentWillMount(){
    console.log("componentWillMount called here")
  }
  componentDidlMount(){
    console.log("componentDidlMount called here")
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called")
  }

  shouldComponentUpdate(newProps, nextState){
    console.log('Called should component update');
    return true;
  }

  componentWillUpdate(newProps, nextState){
    console.log('Called component will update');
  }

  componentDidUpdate(newProps, nextState){
    console.log ('Called component did update');
  }

  componentWillUnmount(){
    console.log('Called Component Will Unmount');
  }

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
