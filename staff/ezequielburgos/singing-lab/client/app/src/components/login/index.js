import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'
import Navbar from './../navbar'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            isRegistered: false,
            isLogged: false,
            name: '',
            surname: '',
            email: '',
            password: ''
        }
    }

    handleSubmitLogin = (e) => {
        e.preventDefault()

        logic.login(this.state.email, this.state.password)
            .then(res => {
                if (res) {
                    this.setState({
                        isLogged: true
                    })
                }
            }).catch(err => err.message)
    }


    handlerCapturingEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlerCapturingPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    render() {
        return (
            <div>
                <Navbar/>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmitLogin}>
                    <input type="email" name="email" placeholder="email" onChange={this.handlerCapturingEmail} value={this.state.email} />
                    <input type="password" name="password" onChange={this.handlerCapturingPassword} value={this.state.password} />
                    <button type="submit">Register</button>
                </form>
            </div>


        )

    }
}
export default Login