import React, { Component } from 'react'

class Register extends Component {
    constructor() {
        super()
    }

    render() {
        return( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.props._handlerRegister}>
                    <input type="text" value={this.props.username} placeholder="insert username" onChange={this.props._handlerWriteUsername} />
                    <input type="password" value={this.props.password} placeholder="insert password" onChange={this.props._handlerWritePassword} />
                    <button type="submit">Register</button>
                </form>
            </div>
        )

    }

}




export default Register