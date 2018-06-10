import React, { Component } from 'react'
import logic from '../../logic'
import {withRouter} from 'react-router-dom'
import './index.css'
import Nav from '../nav'

class Register extends Component {

    state = {
       username: '',
       email:'',
       password: '',
       repeatPassword: '',
    }

    handlerSubmitRegister = e => {
        e.preventDefault()

        const { username, email, password, repeatPassword } = this.state
        logic.registerUser(username, email, password, repeatPassword)
            .then(res => {
                if (res) {
                    this.props.history.push('/auth')
                } else {
                    alert('wrong error')
                }     
            })
            .catch(err => err.message)
    }

    handlerCapturingUsername = e => {
        const value = e.target.value
        this.setState({
            username: value
        })
    }

    handlerCapturingEmail = e => {
        const value = e.target.value
        this.setState({
            email: value
        })
    }

    handlerCapturingPassword = e => {
        const value = e.target.value
        this.setState({
            password: value
        })
    }

    handlerCapturingRepeatPassword = e => {
        const value = e.target.value
        this.setState({
            repeatPassword: value
        })
    }

   render() {
    const { username, email, password, repeatPassword } = this.state
    return (
        <div className="body-register">     
            <Nav />   
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                    </div>
                    <div className="col-md-4">
                        <form role="form" className="mt-5" onSubmit={this.handlerSubmitRegister}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" id="exampleInputusername1" name="username" placeholder="Enter your username" autoFocus value={username} onChange={this.handlerCapturingUsername} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="@Enter your email" value={email} onChange={this.handlerCapturingEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Enter your password" value={password} onChange={this.handlerCapturingPassword}/>
                            </div>
                            <div className="form-group">
                                <label>Repeat Password</label>
                                <input type="password" className="form-control" id="exampleInputRepeatPassword1" name="rep-password" placeholder="Enter repeat password" value={repeatPassword} onChange={this.handlerCapturingRepeatPassword}/>
                            </div>
                            <button type="submit" className="btn btn-secondary btn-block mt-5">Registrar</button>
                        </form>
                    </div>
                    {/* <div className="col-md-4">
                    </div> */}
                </div>
            </div>
        </div>
        )
   }      
   
}

export default withRouter(Register)