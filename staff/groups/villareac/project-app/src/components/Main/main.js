import React, { Component } from 'react'
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
            age: '',
            gender: '',
            onError: false,
            token: '',
            disabled: "disabled",
            newUsername: "",
            newPassword: "",
            sessionInfo: {
                id: "",
                token: ""
            },
            bodyUpdate: {
                password: '',
                username: '',
                age: '',
                gender: '',
                newPassword: '',
                newUsername: '' 
            }  
        }
    }

    componentDidMount(){
        const sessionData = sessionStorage.getItem('key');
        if(sessionData) {
            this.setState({ sessionInfo: JSON.parse(sessionData) })
        }
    }
 
    // REGISTER

    _handlerRegister = (e) => {
        e.preventDefault();

        let userData = {
            username: this.state.username,
            password: this.state.password,
            age: this.state.age,
            gender: this.state.gender
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
        this.setState({ password: e.target.value})
        this.setState({bodyUpdate:{password: e.target.value, username: this.state.publicData.username}})
    }


    _handlerWriteAge = (e) => {
        this.setState({ age: e.target.value })
        this.setState({bodyUpdate:{age: e.target.value}})
    }

    _handlerWriteGender = (e) => {
        this.setState({ gender: e.target.value, bodyUpdate:{gender: e.target.value} })
        console.log(this.state.bodyUpdate)
    }

    _handlerWriteNewUsername = (e) => {
        this.setState({ newUsername: e.target.value, bodyUpdate:{newUsername: e.target.value} })
    }

    _handlerWriteNewPassword = (e) => {
        this.setState({ newPassword: e.target.value, bodyUpdate:{newPassword: e.target.value} })
    }


    // LOGIN

    _handlerLogin = (e) => {
        e.preventDefault();

        let userData = {
            username: this.state.username,
            password: this.state.password
        }

        logic.login(userData)
            .then(data => this.onSetSession(data, 'key'));
    }

    onSetSession = (data, key) => {
        sessionStorage.setItem(key, JSON.stringify(data.data))
        this.setState({ id: data.data.id, token: data.data.token, username: '', sessionInfo: { id: data.data.id, token: data.data.token } })
    }

    // RETRIEVE

    _handlerRetrieve = (e) => {
        e.preventDefault();

        logic.id = this.state.sessionInfo.id;
        logic.token = this.state.sessionInfo.token;

        logic.retrieve()
            .then(data =>
                this.setState({ publicData: data.data })
            )
            console.log(this.state.publicData)
    }

    // UPDATE

    _handlerUpdate = (e) => {

        logic.id = this.state.sessionInfo.id;
        logic.token = this.state.sessionInfo.token;

        let userData = this.state.bodyUpdate;

        console.log("this is userdata")
        console.log(userData)

        logic.update(userData)
            .then(data => console.log(data))

        for (const prop of Object.getOwnPropertyNames(this.state.bodyUpdate)) {
            delete this.state.bodyUpdate[prop];
          }
    }
  

    // DELETE

    _handlerDelete = () => {

        logic.id = this.state.sessionInfo.id;
        logic.token = this.state.sessionInfo.token;

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
                    <Route path="/login" render={() => (
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
                            age={this.state.publicData.age}
                            gender={this.state.publicData.gender}

                            _handlerRetrieve={this._handlerRetrieve}
                            _handlerUpdate={this._handlerUpdate}
                            _handlerWriteNewUsername={this._handlerWriteNewUsername}
                            _handlerWriteAge={this._handlerWriteAge}
                            _handlerWriteGender={this._handlerWriteGender}

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