import React, { Component } from 'react'
import logic from '../logic'

class Register extends Component {
    state = { username: '', password: '' }

    updateUsername = e => {
        this.setState({ username: e.target.value })
    }

    updatePassword = e => {
        this.setState({ password: e.target.value })
    }

    register = e => {
        e.preventDefault()

        logic.register(this.state.username, this.state.password)
            .then(() => this.props.onRegister())
            .catch(({ message }) => this.props.onRegisterError(message))
    }

    render() {
        return <form onSubmit={this.register}>
            <input type="text" onChange={this.updateUsername} />
            <input type="password" onChange={this.updatePassword} />
            <button type="submit">Register</button>
        </form>
    }
}

export default Register