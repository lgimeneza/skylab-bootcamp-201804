import React, { Component } from 'react'
import logic from '../../logic'
import './index.css'
import Navbar from './../Navbar'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            isRegistered: false,
            isLogged: false,
            email: '',
            password: ''
        }
    }

    handleSubmitLogin = (e) => {
        e.preventDefault()

        const { email, password } = this.state
        if (email !== "" || password !== "") {

            logic.login(email, password)
                .then(res => {
                    if (res) {
                        this.props.history.push('/')

                    } else {
                        console.log('Error, username and/or password wrong')
                    }

                }).catch(err => err.message)
        }
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
            <div className="login-app">
                <Navbar />
                <form className="form-signin" onSubmit={this.handleSubmitLogin}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" name="email" placeholder="email" onChange={this.handlerCapturingEmail} value={this.state.email} />
                    <br />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" name="password" placeholder="password" onChange={this.handlerCapturingPassword} value={this.state.password} />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block login-submit" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>

            </div>


        )

    }
}
export default Login