import React, { Component } from 'react';
import logo from './logo.svg';
// Main application
import './App.css';
// Components
import Bojan from './Components/Navbar';
import HeaderCarousel from './Components/HeaderCarousel';
import Container from './Components/Container';
import Footer from './Components/Footer';

// Rendering HTML
class App extends Component {
  render() {
    return (
      <div>
        <Bojan />
        <HeaderCarousel />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
