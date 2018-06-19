import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import logic from "../logic/index"
import api from "api"


class Login extends Component {
    state = {
        user: "",
        password: "",
        state: "",
        token: ""
    }

    userName = (e) => {
        const user = e.target.value
        this.setState({ user })
    }

    userPassword = (e) => {
        const password = e.target.value
        this.setState({ password })
    }

    submit = (e) => {
        e.preventDefault()
        return logic.login(this.state.user, this.state.password)
            .then(() => {
                sessionStorage.setItem("userId", logic.userId)
                sessionStorage.setItem("token", api.token)
                this.bucle()
            })
            .catch(error => {
                console.error(error.message)
                this.props.history.push(`/login`)
            })
    }

    bucle = () => {
        // console.error("alert you are logged in")
        this.props.history.push(`/profile`)
    }

    render() {
        const { user, password } = this.state
        return <div className="containers login">
            <h1>Login</h1>
            <form onSubmit={this.submit} className="form login-form">
                <input type="text" onChange={this.userName} value={user} placeholder="User" autoComplete="off" />
                <input type="password" onChange={this.userPassword} value={password} placeholder="Password" autoComplete="off" />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    }
}

export default withRouter(Login)