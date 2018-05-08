import React, { Component } from "react"


class Login extends Component {

    constructor() {
        super();
    }
    render() {
        return (

            <div>
                <h1>login</h1>
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