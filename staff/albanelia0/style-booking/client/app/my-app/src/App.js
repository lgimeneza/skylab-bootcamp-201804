import React, { Component } from 'react';
import { Title } from './components/title'

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Login</Title>
        <button className="button is-primary">Bulma button</button>
      </div>
    );
  }
}

export default App;
