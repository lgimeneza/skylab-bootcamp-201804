import React, { Component } from "react";
import logic from "../../logic";
import { Route,Switch } from 'react-router-dom';
import { Landing, Home, Profile, Register, Login, Error404 } from "../index";

class Main extends Component {
    state = {
        viewInfoPrivate: false
    }


    _viewInfoPrivate = () => {

        let token = localStorage.getItem('token-app')
        let userId = localStorage.getItem('id-app')

        if (token && userId) {
            this.setState({
                viewInfoPrivate: true
            })
        }
    }


    render() {

        return <div>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route viewInfoPrivate={this.state.viewInfoPrivate} path="/home" render={props => <Home />} />
                <Route viewInfoPrivate={this.state.viewInfoPrivate} path="/profile" render={props => <Profile mainState={this.state} updatePassword={this._updatePassword} />} />
                <Route path="/register" render={props => <Register />} />
                <Route path="/login" viewInfoPrivate={this._viewInfoPrivate} render={props => <Login />} />
                <Route path='/' render={props => <Error404 />} />
            </Switch>
        </div>
    }

}

export default Main;