import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'
import Navbar from './../navbar'
import storage from '../../utils/storage'

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
            <div>
                <Navbar/>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmitLogin}>
                    <input type="email" name="email" placeholder="email" onChange={this.handlerCapturingEmail} value={this.state.email} />
                    <input type="password" name="password" onChange={this.handlerCapturingPassword} value={this.state.password} />
                    <button type="submit">Login</button>
                </form>
            </div>


        )

    }
}
export default Login