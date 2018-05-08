import React, { Component } from "react"
import '../Main/main.css'


class Login extends Component {

    render() {
        return (

            <div className="container2">
                <h2>login</h2>
                <form onSubmit={this.props._handlerLogin}>
                    <input type="text" value={this.props.username} placeholder="insert username" onChange={this.props._handlerWriteUsername} />
                    <input type="password" value={this.props.password} placeholder="insert password" onChange={this.props._handlerWritePassword} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

}

export default Login