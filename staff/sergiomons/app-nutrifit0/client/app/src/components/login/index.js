import React, { Component } from 'react'
import logic from '../../logic'
import {withRouter} from 'react-router-dom'
import './index.css'
import Nav from '../nav'

class Login extends Component {

    state = {
       email:'',
       password: '',
       isLogged: false
    }

    handlerSubmitLogin = e => {
        e.preventDefault()

        const { email, password} = this.state
        logic.login(email, password)
        .then(res => {
            if (res) {
                  this.props.history.push('/')

            } else {
              console.log('Error, username and/or password wrong')
            }
        })
            .catch(err => err.message)
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

   render() {
    const { email, password } = this.state
    return (
        <div>     
            <Nav />   
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <form role="form" className="form" onSubmit={this.handlerSubmitLogin}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email"  placeholder="@Enter your email" autoFocus value={email} onChange={this.handlerCapturingEmail}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Enter your password" value={password} onChange={this.handlerCapturingPassword}/>
                            </div>
                            <div className="checkbox">      
                                <label>
                                    <input type="checkbox" /> Mantener sesión
                                </label>
                            </div> 
                            <button type="submit" className="btn btn-dark btn-block mt-3" >Login</button>
                        </form>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        </div>
        )
   }      
   
}

export default withRouter(Login)
