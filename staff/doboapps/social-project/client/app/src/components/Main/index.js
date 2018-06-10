import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { Register, Login, Error404, Start, Profile,UploadPicture } from "../index";
import logic from "../../logic"
class Main extends Component {


    render() {
        return logic.isLogged() ?

            <div>
                <Switch>
                    <Route exact path="/" render={props => <Start  isLogged={this.props.isLogged}/>} />
                    <Route exact path="/profile" render={props => <Profile />} />               
                    <Route exact path="/upload-picture" render={props => <UploadPicture />} />               
                    <Route path='/' render={props => <Error404 />} />
                </Switch>
            </div>
            :
            <div>
                <Switch>
                <Route exact path="/" render={props => <Start isLogged={this.props.isLogged} />} />
                    <Route path="/register" render={props => <Register />} />
                    <Route path="/login" render={props => <Login logIn={this.props.logIn} />} />
                    <Route path='/' render={props => <Error404 />} />
                </Switch>
            </div>
    }

}

export default Main;