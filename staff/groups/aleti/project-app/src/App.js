import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import history from './components/history'
import { PrivateRoute } from './components/PrivateRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import LandingPage from './components/LandingPage'
import ProfilePage from './components/ProfilePage'

class App extends Component {

  render() {
    return (
        <Router history={history}>
            <div className="content-api">
                <PrivateRoute path="/home" component={ HomePage } />
                <Route exact path="/" component={ LandingPage } />
                <Route path="/landing" component={ LandingPage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/register" component={ RegisterPage } />
                <Route path="/profile" component={ ProfilePage } />
            </div>
        </Router>
    );
  }
}

export default App