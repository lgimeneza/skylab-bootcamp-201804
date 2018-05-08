import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import './App.css';

import Landing from './landing/Landing';
import Register from './register/Register';
import Login from './Login/login';
import Home from './home/Home';
import Profile from './profile/Profile';

class App extends Component {
    state = {
        isLogged: false
    };

    componentWillMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.token;

            token.length
                ? this.setState({ isLogged: true })
                : this.setState({ isLogged: false });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Route
                    exact
                    path="/"
                    render={() => {
                        return this.state.isLogged ? (
                            <Redirect to="/home" />
                        ) : (
                            <Landing />
                        );
                    }}
                />

                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
            </div>
        );
    }
}

export default App;
