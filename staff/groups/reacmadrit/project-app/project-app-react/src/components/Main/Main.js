import React, { Component } from "react";
import logic from "../../logic";
import { Route,Switch } from 'react-router-dom';
import { Landing, Home, Profile, Register, Login, Error404 } from "../index";

class Main extends Component {

    isLogged = () => {
        return localStorage.getItem("token-app") ? true : false
      }

    // _viewInfoPrivate = () => {

    //     let token = localStorage.getItem('token-app')
    //     let userId = localStorage.getItem('id-app')
    //     if (token && userId) {
    //         this.setState({
    //             viewInfoPrivate: true
    //         })
    //     }
    // }


    render() {
        return <div>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/home" render={props => <Home  isLogged={this.isLogged} />} />
                <Route path="/profile" render={props => <Profile isLogged={this.isLogged} />} />
                <Route path="/register" render={props => <Register />} />
                <Route path="/login"  render={props => <Login />} />
                <Route path='/' render={props => <Error404 />} />
            </Switch>
        </div>
    }

}

export default Main;