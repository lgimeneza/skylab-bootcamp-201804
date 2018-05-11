import React, { Component } from 'react'
import logic from '../logic'

class Login extends Component {
    state = { username: '', password: '' }

    updateUsername = e => {
        this.setState({ username: e.target.value })
    }

    updatePassword = e => {
        this.setState({ password: e.target.value })
    }

    login = e => {
        e.preventDefault()

        logic.login(this.state.username, this.state.password)
            .then(() => this.props.onLogin())
            .catch(({ message }) => this.props.onLoginError(message))
    }

    render() {
        return <form onSubmit={this.login}>
            <input type="text" onChange={this.updateUsername} />
            <input type="password" onChange={this.updatePassword} />
            <button type="submit">Login</button>
        </form>
    }
}

export default Login