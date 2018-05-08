import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom'
import logic from '../../logic'
import './main.css'

import Register from '../Register/Register'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'



class Main extends Component {


    constructor() {
        super();
    
        this.state = {
            username: '',
            password: '',
            publicData: [],
            id: '',
            onError: false,
            token: '',
            disabled: "disabled",
            newUsername: "",
            newPassword: ""
        }
    }
    
    // REGISTER
    
    _handlerRegister = (e) => {
        e.preventDefault();
    
        let userData = {
            username: this.state.username,
            password: this.state.password
        }
    
        logic.register(userData)
            .then(data =>
                this.setState({ id: data.data.id, username: '', password: '' })
            )
    }
    
    _handlerWriteUsername = (e) => {
        this.setState({ username: e.target.value })
    }
    
    _handlerWritePassword = (e) => {
        this.setState({ password: e.target.value })
    }
    
    
    // LOGIN
    
    _handlerLogin = (e) => {
        e.preventDefault();
    
        let userData = {
            username: this.state.username,
            password: this.state.password
        }
    
        logic.login(userData)
            .then(data =>
                this.setState({ id: data.data.id, token: data.data.token, username: '' })
            )
    }
    
    // RETRIEVE
    
    _handlerRetrieve = (e) => {
        e.preventDefault();
    
        logic.id = this.state.id;
        logic.token = this.state.token
    
        logic.retrieve()
            .then(data =>
                this.setState({ publicData: data.data })
            )
    }
    
    // UPDATE
    
    _handlerUpdate = (e) => {
    
        logic.id = this.state.id;
        logic.token = this.state.token
    
        let userData = {
            username: this.state.publicData.username,
            password: this.state.password,
            newUsername: this.state.newUsername,
            newPassword: this.state.newPassword
        }
    
        logic.update(userData)
            .then(data => console.log(data))
    
    }
    _handlerWriteNewUsername = (e) => {
        this.setState({ newUsername: e.target.value })
    }
    
    _handlerWriteNewPassword = (e) => {
        this.setState({ newPassword: e.target.value })
    }
    
    
    
    _handlerDelete = () => {
    
        logic.id = this.state.id;
        logic.token = this.state.token
    
        let userData = {
            username: this.state.username,
            password: this.state.password
        }
    
        logic.unregister(userData)
            .then(data => console.log(data))
    
    }



    render() {
        return (
             <div className="container">


         

            <Switch>
                    <Route path="/register" render={() => (
                         
                            <Register
                                _handlerWriteUsername={this._handlerWriteUsername}
                                _handlerWritePassword={this._handlerWritePassword}
                                _handlerRegister={this._handlerRegister}
                                username={this.state.username}
                                password={this.state.password}
                            />
                           
                    )} />
                    <Route path="/login" render={() =>  (
                            <Login
                                _handlerWriteUsername={this._handlerWriteUsername}
                                _handlerWritePassword={this._handlerWritePassword}
                                _handlerLogin={this._handlerLogin}
                                username={this.state.username}
                                password={this.state.password}
                            />
                        )} />
                    <Route path="/Profile" render={() => (
                            <Profile
                                username={this.state.publicData.username}
                                password={this.state.password}

                                _handlerRetrieve={this._handlerRetrieve}
                                _handlerUpdate={this._handlerUpdate}
                                _handlerWriteNewUsername={this._handlerWriteNewUsername}

                                _handlerDelete={this._handlerDelete}
                                _handlerWriteUsername={this._handlerWriteUsername}
                                _handlerWritePassword={this._handlerWritePassword}
                            />
                        )
                    } />
                </Switch>
            
 
               
            </div>
        )
    }

}

export default Main