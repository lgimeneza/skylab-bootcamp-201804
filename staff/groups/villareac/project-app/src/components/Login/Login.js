import React, { Component } from "react"
import '../Main/main.css'

/**
 * The Login component that allows the user to login into his/her profile.
 * 
 * @class Login
 * @extends {Component}
 */
class Login extends Component {

    render() {
        return (

            <div className="container2">
                <h2>login</h2>
                <form onSubmit={this.props._handlerLogin}>
                    <input type="text" placeholder="Insert your username" onChange={this.props._handlerWriteUsername} />
                    <input type="password" placeholder="Insert your password" onChange={this.props._handlerWritePassword} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

}

export default Login