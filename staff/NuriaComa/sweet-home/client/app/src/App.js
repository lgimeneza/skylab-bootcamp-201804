import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/landing/'
import Home from './components/home/'
import Login from './components/login/'
import Register from './components/register/'
import Users from './components/users/'


class App extends Component {
  render() {
    return (
      <Switch>
        
          <div className="App">
            <Route exact path="/" component={Landing} />
          
            <Route path="/auth" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/users" component={Users} />
            </div>
        
      </Switch>
    );
  }
}

export default withRouter(App);
