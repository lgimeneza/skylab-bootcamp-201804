import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import logo from './logo.svg';
import logic from './logic/logic.js';
import './App.css';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import RegisterUser from './components/RegisterUser/RegisterUser'

class App extends Component {



  render() {
    return (
      <Switch>
        <main>
          <div className="App">
            <Route exact path="/" component={Landing} />
          </div>
          <div className="App">
            <Route path="/login" component={Login} />
            <Route path="/register" component={RegisterUser} />
          </div>
          <div className="App">
            <Route path="/home" component={Home}/>
          </div>
          <div>
            <Route path="/profile" component={Profile}/>
            </div>
          <div>
            <Route path="/user/:user" />
          </div>
        </main>
      </Switch>
    );
  }
}

export default withRouter(App);
