import React from 'react';
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Timer start={Date.now()} />
      <p>
        View the <code>src/App.js</code>.
      </p>
      <button
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        View it on a GitHub
      </button>


    </header>
    </div>
  );
}

export default App;
