import React, { Component } from 'react'
import logic from '../../logic'

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
                if (!res) alert('Algo falló')
                return alert('Registrado')
            })
            .catch()
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
        <div>        
            <form onSubmit={this.handlerSubmitRegister}>
            
                <input className="text" id="username-E" type="text" name="username" placeholder="Username" value={username} onChange={this.handlerCapturingUsername}/>

                <input className="text" id="email-E" type="email" name="email" placeholder="Email" value={email} onChange={this.handlerCapturingEmail}/>
            
                <input className="text" id="password-E" type="password" name="password" placeholder="Password" value={password} onChange={this.handlerCapturingPassword}/>

                <input className="text" id="repass-E" type="password" name="rep-password" placeholder="Repeat-Password" value={repeatPassword} onChange={this.handlerCapturingRepeatPassword}/>

                <input className="buttons" type="submit" value="Register"/>

            </form>    
        </div>
        )
   }      
   
}

export default Register