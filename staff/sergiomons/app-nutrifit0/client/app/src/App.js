import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'

class App extends Component {

  state
  
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/register' component={Register}/>
            <Route path='/auth' component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
