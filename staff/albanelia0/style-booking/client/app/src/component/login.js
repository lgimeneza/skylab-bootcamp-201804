import React, { Component } from 'react'
import 'react-router-dom'
import swal from 'sweetalert2'
import logic from '../logic'
import createBooking from '../helpers/createBooking'
import { create } from 'domain';


export class Login extends Component {

  state = {
    email: '',
    password: '',
    formIsFull: false,
  }


  goToRegister = () => {
    this.props.history.push('/register')
  }

  handleChange = (e) => {

    const { name, value } = e.target

    this.setState({
      [name]: value
    },
      () => {
        this.setState({
          formIsFull: this.state.email && this.state.password ? true : false
        })
      }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { email, password, formIsFull } = this.state

    if (formIsFull) {

      const body = {
        "email": email,
        "password": password
      }

      logic.login(body).then(result => {
        if (result) {
          this.storageUserData(result)

          // aqui se tiene que esperar para ver si te lleva al profile o al data
          this.props.history.push('/confirmBooking')

        }
      }).catch(data => {
        swal({
          type: 'error',
          title: 'wrong credentials',
          text: data.error
        })
      })

      this.setState({
        email: '',
        password: ''
      })
    }
  }
  storageUserData(result) {
    localStorage.setItem('token', result.token)
    localStorage.setItem('id', result.id)
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <figure className="avatar">
                  <img src="https://placehold.it/128x128" alt="" />
                </figure>
                <form>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name='email' className="input is-large" type="email" placeholder="Your Email" autoFocus value={this.state.email} />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name='password' className="input is-large" type="password" placeholder="Your Password" value={this.state.password} />
                    </div>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <button type="submit" onClick={this.handleSubmit} className="button is-block is-info is-large is-fullwidth " title="Disabled button" disabled={!this.state.formIsFull}>Login</button>
                </form>
              </div>
              <p className="has-text-grey">
                <a onClick={this.goToRegister}>Register</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

}
