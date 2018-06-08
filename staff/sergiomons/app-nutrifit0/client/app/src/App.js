import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Register from './components/register'
import Login from './components/login'

class App extends Component {

  state
  
  render() {
    return (
      <div className="App">
          <Switch>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exac path='/register' Component={Register}/>
        <Route exac path='/login' Component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
