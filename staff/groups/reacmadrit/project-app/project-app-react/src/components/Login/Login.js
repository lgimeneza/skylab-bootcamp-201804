import React, { Component } from "react";
import logic from "../../logic";
import { withRouter } from 'react-router-dom'


class Login extends Component {

    state = {
        userName: "",
        password: "",
        loginFailedMessage: ""
    }


    _handleKeepName = (e) => {
        let userName = e.target.value;
        this.setState({ userName })
    }


    _handleKeepPassword = (e) => {
        let password = e.target.value;
        this.setState({ password })
    }


    _handleLogin = (e) => {
        e.preventDefault()
        logic.login(this.state.userName, this.state.password)
        .then(res => {

            if (res.status === 'OK') {
                localStorage.setItem('token-app', res.data.token)

                localStorage.setItem('id-app', res.data.id)
                this.props.history.push('/home')

                
                    this.props.updatePassword(this.state.userName,this.state.password)
            
               // this.props.setState({ password: this.state.password})
                

            } else {
                this.setState({
                    loginFailedMessage: res.error
                })
            }


        })
    }

    render() {

        return (
            <div>

                <form onSubmit={this._handleLogin}>
                    <input value={this.state.userName} onChange={this._handleKeepName} type="text" placeholder="User name" />
                    <input value={this.state.password} onChange={this._handleKeepPassword} type="password" placeholder="Password" />
                    <p className="text-danger">{this.state.loginFailedMessage}</p>
                    <input type="submit" value="Send" />
                </form>
            </div>

        )
    }
}

export default withRouter(Login);