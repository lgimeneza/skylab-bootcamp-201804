import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: ''
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Notes-app-1.0.0</h1>
        </header>
        <main className="App-intro">
          <h2>This is App.js</h2>
          <form action="">
            <input type="text" />
            <button>enter</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
