import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';


import history from './components/history'
import { PrivateRoute } from './components/PrivateRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import LandingPage from './components/LandingPage'
import ProfilePage from './components/ProfilePage'
import InfiniteScroll from 'react-infinite-scroll-component';
import { LinkContainer } from 'react-router-bootstrap';
import '../src/components/HomePage.css';

class App extends Component {

    state = {
        movies: {},
        value: '',
        page: 1,
        username: '',
        key: 'c9e81d7384a0e7aa9d0deecb8c80c2cc'
    }

    render() {
        return (
            <Router history={history}>
                <div className="content-api">
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/" component={HomePage} />
                    {/* <Route path="/landing" component={ LandingPage } /> */}
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <PrivateRoute path="/profile" component={ProfilePage} />
                </div>
            </Router>
        );
    }
}

export default App