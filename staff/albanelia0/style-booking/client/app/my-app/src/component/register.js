import React, { Component } from 'react'
import moment from 'moment'
import logic from '../logic'


export class Register extends Component {

  state = {
    name: '',
    surname:'',
    email: '',
    password: '',
    confirmpw:''
  }

  handleChange = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value,
    })
    console.log(this.state.gmail)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, surname, email, password } = this.state;

    if(name && surname && email && password) {

      if(confirmpw === password){
        
      }


    }
     logic.registerUser(this)



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
                <form onSubmit={this.handleSubmit()}>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="name" className="input is-large" type="text" placeholder="Your Email" autofocus="" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="surname" className="input is-large" type="text" placeholder="Your Email" autofocus="" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="email" className="input is-large" type="text" placeholder="Your Email" autofocus="" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="password" className="input is-large" type="password" placeholder="Your Password" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input onChange={this.handleChange} name="confirmpw" className="input is-large" type="password" placeholder="Your Password" />
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
