import React, { Component } from 'react';
import {Switch} from 'react-router';
import logo from './logo.svg';
import {Home,Landing,Login,Register} from "src/component"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Router exact path="/" component = {Landing} />
          <Router exact path="/home" component = {Home}/>
          <Router exact path="/login" component = {Login} />
          <Router exact path="/register" component = {Register} />    
        </Switch>

      </div>
    );
  }
}

export default App;
