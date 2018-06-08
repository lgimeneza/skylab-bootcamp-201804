import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'
import Navbar from './../navbar'

class Register extends Component {

  constructor() {
    super()
    this.state = {
      isLogged: false,
      isRegistered: false,
      name: '',
      surname: '',
      address: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }


  handleSubmitRegister = (e) => {
    e.preventDefault()

    const { name, surname, address, email, password, passwordConfirm } = this.state
    if (password === passwordConfirm) {
      if (name !== "" || surname !== "" || address !== "" || email !== "" || password !== "") {

        logic.registerUser(name, surname, address, email, password)
          .then(res => {
            if (res) {
              // logic.login(res.email, res.password)
              //   .then(() => {
                  this.props.history.push('/auth')
                 
                //   this.setState({ isRegistered: true })
                // })

            } else {
              console.log('Error, username and/or password wrong')
            }

          }).catch(err => err.message)
      }
    }
  }

  handlerCapturingName = (e) => {
    this.setState({ name: e.target.value })
  }

  handlerCapturingSurname = (e) => {
    this.setState({ surname: e.target.value })
  }

  handlerCapturingAddress = (e) => {
    this.setState({ address: e.target.value })
  }

  handlerCapturingEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handlerCapturingPassword = (e) => {
    this.setState({ password: e.target.value })
  }

  handlerCapturingPasswordConfirm = (e) => {
    this.setState({ passwordConfirm: e.target.value })
  }


  render() {
    return (
      <main>
        <Navbar />
        <h1>Register</h1>
        <form onSubmit={this.handleSubmitRegister}>
          <input type="text" name="name" placeholder="name" autoFocus="" onChange={this.handlerCapturingName} value={this.state.name} />
          <input type="text" name="surname" placeholder="surname" onChange={this.handlerCapturingSurname} value={this.state.surname} />
          <input type="text" name="address" placeholder="address" onChange={this.handlerCapturingAddress} value={this.state.address} />
          <input type="email" name="email" placeholder="email" onChange={this.handlerCapturingEmail} value={this.state.email} />
          <input type="password" name="password" placeholder="password" onChange={this.handlerCapturingPassword} value={this.state.password} />
          <input type="password" name="passwordConfirm" placeholder="passwordConfirm" onChange={this.handlerCapturingPasswordConfirm} value={this.state.passwordConfirm} />
          <button type="submit">Register</button>
        </form>
      </main>
    )
  }
}

export default Register