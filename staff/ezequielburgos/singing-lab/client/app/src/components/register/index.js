import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'

class Register extends Component {

    constructor() {
      super()
      this.state = {
        isRegistered: false,
        isLogged: false,
        name: '',
        surname: '',
        email: '',
        password: ''
      }
    }

    handleSubmitRegister = (e) => {
      e.preventDefault()

      logic.registerUser(this.state.name, this.state.surname, this.state.email, this.state.password)
        .then(res => {

          if(res){
            this.setState({
              isRegistered: true,
              email: '',
              password: ''
            })
          }
        }).catch(err => err.message)
    }
    
    handlerCapturingName = (e) => {
      this.setState({
        name: e.target.value
      })
    }

    handlerCapturingSurname = (e) => {
      this.setState({
        surname: e.target.value
      })
    }
    handlerCapturingEmail = (e) => {
      this.setState({
        email: e.target.value
      })
    }

    handlerCapturingPassword = (e) => {
      this.setState({
        password: e.target.value
      })
    }

    render() {
        return (
            <main>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmitRegister}>
                    <input type="name" name="name" onChange={this.handlerCapturingName} value={this.state.name} />
                    <input type="surname" name="surname" onChange={this.handlerCapturingSurname} value={this.state.surname} />
                    <input type="email" name="email" placeholder="email" onChange={this.handlerCapturingEmail} value={this.state.email} />
                    <input type="password" name="password" onChange={this.handlerCapturingPassword} value={this.state.password} />
                    <Link to="/auth">
                        <button type="submit">Register</button>
                    </Link>
                </form>
            </main>
        )
    }

}

export default Register