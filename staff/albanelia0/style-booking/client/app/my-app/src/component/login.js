import React, { Component } from 'react'
import moment from 'moment'
import logic from '../logic'


export class Login extends Component {

  state = {
    gmail: '',
    password: ''
  }

  handleChange = (e) => {

    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { gmail, password } = this.state

    if (gmail && password) {

      const body = {gmail, password}
      
      logic.login(body).then(result => {

        if (result.status === 'OK') {
          this.storageUserData(result)
          localStorage.setItem(password)
        } else {
          swal({
            type: 'error',
            title: 'Something went wrong!',
            text: result.error
          })
        }
      })
      this.setState({
        gmail: '',
        password: ''
      })
    }
  }

  storageUserData(result){
    localStorage.setItem('token', result.data.token)
    localStorage.setItem('id', result.data.id)
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
                  <img src="https://placehold.it/128x128" />
                </figure>
                <form onSubmit={this.handleSubmit()}>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name='gmail' className="input is-large" type="email" placeholder="Your Email" autofocus="" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name='password' className="input is-large" type="password" placeholder="Your Password" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <button className="button is-block is-info is-large is-fullwidth">Login</button>
                </form>
              </div>
              <p className="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
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
