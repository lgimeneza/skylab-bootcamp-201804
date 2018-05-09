import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import './App.css';
import 'animate.css';

import Landing from './landing/Landing';
import Register from './register/Register';
import Login from './Login/login';
import Home from './home/Home';
import Profile from './profile/Profile';
import Header from './header/Header';
import UpdateProfile from './updateProfile/UpdateProfile'

class App extends Component {
    state = {
        isLogged: false
    };

    componentDidMount() {
        console.log("hola app")
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
                <Route exact path="/profile/update" component={UpdateProfile} />
            </div>
        );
    }
}

export default App;
