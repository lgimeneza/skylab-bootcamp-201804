import React, { Component } from 'react'
import logic from '../../logic'
import {withRouter} from 'react-router-dom'

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
            <form onSubmit={this.handlerSubmitLogin}>

                <input className="text" id="email-E" type="email" name="email" placeholder="Email" value={email} onChange={this.handlerCapturingEmail}/>
            
                <input className="text" id="password-E" type="password" name="password" placeholder="Password" value={password} onChange={this.handlerCapturingPassword}/>

                <input className="buttons" type="submit" value="Login"/>

            </form>    
        </div>
        )
   }      
   
}

export default withRouter(Login)
