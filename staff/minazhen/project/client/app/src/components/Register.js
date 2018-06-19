import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import logic from "../logic/index"

class Register extends Component {
    state = {
        user: "",
        password: "",
        location: "",
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

    userLocation = (e) => {
        const location = e.target.value
        this.setState({ location })
    }

    submit = (e) => {
        e.preventDefault()
        logic.logout()
        return logic.registerUser(this.state.user, this.state.password, this.state.location)
            .then(this.props.history.push(`/login`))
            .catch(error => {
                console.error(error.message)
                this.props.history.push(`/register`)
            })
    }

    bucle = () => {
        if (this.token) {
            console.error("Wii you are register")
            this.props.history.push(`/home`)
        }
    }

    render() {
        const { user, password, location } = this.state
        return <div className="containers register">
            <h1>Register</h1>
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.userName} value={user} placeholder="User" autoComplete="off" />
                <input type="text" onChange={this.userLocation} value={location} placeholder="Nacionality" autoComplete="off" />
                <input type="password" onChange={this.userPassword} value={password} placeholder="Password" autoComplete="off" />

                <button type="submit">Register</button>
            </form>
        </div>
    }
}

export default withRouter(Register)