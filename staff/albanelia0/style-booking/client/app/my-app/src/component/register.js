import React, { Component } from 'react'
import 'react-router-dom'
import swal from 'sweetalert2'
import moment from 'moment'
import logic from '../logic'


export class Register extends Component {

  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmpw: '',
    conditionForGoToLogin: false,
    formIsFull: false,
    passwordsMatch: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value,
    },
      () => {
        this.setState({
          formIsFull: (
            this.state.name &&
            this.state.surname &&
            this.state.email &&
            this.state.password &&
            this.state.confirmpw
          )
        })
        this.setState({
          passwordsMatch: (this.state.password === this.state.confirmpw)
        })
      }
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, surname, email, password, confirmpw, conditionForGoToLogin, formIsFull ,passwordsMatch } = this.state;
    if (formIsFull) {

      if (passwordsMatch) {
        const body = {
          "name": name,
          "surname": surname,
          "email": email,
          "password": password
        }
        logic.registerUser(body)
          .then(data => {
            console.log(data)
            if (data) {
              this.setState({ conditionForGoToLogin: true })
              swal({
                type: 'success',
                title: 'wiiiiiii!',
                text: 'Register okidoki',
                confirmButtonText: 'Go to loging!'
              }).then((result) => {
                if (result) {
                  this.props.history.push('./login')
                }
              })
            }
          }).catch(data => {
            if (!conditionForGoToLogin) {
              swal({
                type: 'error',
                title: 'Register already exists!',
                text: data.error
              })
              
            }
          })
      }else {
        swal({
          type: 'error',
          title: 'Something went wrong!',
          text: "Those passwords didn't match"
        })
      }
      this.setState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmpw: '',
        conditionForGoToLogin: false
      })
    }
  }
  goToLogin(){
    this.props.history.push('./login.js')
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Register</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <figure className="avatar">
                  <img src="https://placehold.it/128x128" />
                </figure>
                <form >
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="name" className="input is-large" type="text" placeholder="Your name" autofocus="" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="surname" className="input is-large" type="text" placeholder="Your surname" autofocus="" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="email" className="input is-large" type="text" placeholder="Your gmail" autofocus="" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="password" className="input is-large" type="password" placeholder="Your Password" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="confirmpw" className="input is-large" type="password" placeholder="repeat Password" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  {this.state.conditionForGoToLogin ? <button onClick={this.goToLogin} className="button is-block is-info is-large is-fullwidth">Register</button> :
                    <button type="submit" onClick={this.handleSubmit} className="button is-block is-info is-large is-fullwidth " title="Disabled button" disabled={!this.state.formIsFull}>Register</button>
                  }
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
