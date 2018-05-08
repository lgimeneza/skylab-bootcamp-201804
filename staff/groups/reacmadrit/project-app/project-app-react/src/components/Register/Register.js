import React, { Component } from "react";
import logic from "../../logic";
import {withRouter} from 'react-router-dom'

class Register extends Component {
    state = {
        userName: "",
        password: "",
        repeatPassword: "",
        notMatchingMessage: "",
        registerFailedMessage:""
    }

    _comparePassword() {
        if (this.state.password !== this.state.repeatPassword) {
            this.setState({
                notMatchingMessage: "Passwords don't match"
            })
        } else {
            this.setState({
                notMatchingMessage: ""
            })
        }
    }

    _handleKeepName = (e) => {
        let userName = e.target.value;
        this.setState({ userName })
    }

    _handleKeepPassword = (e) => {
        let password = e.target.value;

        Promise.resolve().then(() => {
            this.setState({ password })
        }).then(() => {
            this._comparePassword()
        })

    }

    _handleKeepRepeatPassword = (e) => {
        let repeatPassword = e.target.value;

        Promise.resolve().then(() => {
            this.setState({ repeatPassword })
        }).then(() => {
            this._comparePassword()
        })
    }

    _handleRegister = (e) => {
        e.preventDefault();
        if (!this.notMatchingMessage) {
            logic.register(this.state.userName,this.state.password)
            .then(res => {
                if (res.status==='OK') {
                    this.props.history.push('/login')
                }
                else {
                    this.setState({ registerFailedMessage:res.error.toUpperCase() })
                }
            
            })
        }        
    }

    
    render() {

        return <div>

            <form onSubmit={this._handleRegister}>
                <input value={this.state.userName} onChange={this._handleKeepName} type="text" placeholder="User name" />
                <input value={this.state.password} onChange={this._handleKeepPassword} type="password" placeholder="Password" />
                <input value={this.state.repeatPassword} onChange={this._handleKeepRepeatPassword} type="password" placeholder="Repeat Password" />
                <p className="text-danger">{this.state.notMatchingMessage}</p>
                <p className="text-warning">{this.state.registerFailedMessage}</p>
                <input type="submit" value="Send" />
            </form>

        </div>
    }

}

export default withRouter(Register);