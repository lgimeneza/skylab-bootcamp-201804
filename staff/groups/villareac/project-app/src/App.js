import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logic from './logic'

class App extends Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      publicData: [],
      id: '',
      onError: false,
      token: ''
    }
  }

  // REGISTER

  _handlerRegister = (e) => {
    e.preventDefault();

    let userData = {
      username: this.state.username,
      password: this.state.password
    }

    logic.register(userData)
      .then(data =>
        this.setState({ id: data.data.id, username: '', password: '' })
      )
  }

  _handlerWriteUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  _handlerWritePassword = (e) => {
    this.setState({ password: e.target.value })
  }


  // LOGIN

  _handlerLogin = (e) => {
    e.preventDefault();

    let userData = {
      username: this.state.username,
      password: this.state.password
    }

    logic.login(userData)
      .then(data =>
        this.setState({ id: data.data.id, token: data.data.token, username: '', password: '' })
      )
  }

  // RETRIEVE

  _handlerRetrieve = (e) => {
    e.preventDefault();

    logic.id = this.state.id;
    logic.token = this.state.token

    logic.retrieve()
      .then(data =>
        this.setState({ publicData: data.data })
      )
  }

  _handlerDelete = () => {

    logic.id = this.state.id;
    logic.token = this.state.token

    let userData = {
      username: this.state.username,
      password: this.state.password
    }

    logic.unregister(userData)
      .then(data => console.log(data))

  }

  render() {
    return (
      <div>
        {/* REGISTER */}
        <h1>register</h1>
        <form onSubmit={this._handlerRegister}>
          <input type="text" value={this.state.username} placeholder="insert username" onChange={this._handlerWriteUsername} />
          <input type="password" value={this.state.password} placeholder="insert password" onChange={this._handlerWritePassword} />
          <button type="submit">Register</button>
        </form>

        {/* LOGIN */}
        <h1>login</h1>
        <form onSubmit={this._handlerLogin}>
          <input type="text" value={this.state.username} placeholder="insert username" onChange={this._handlerWriteUsername} />
          <input type="password" value={this.state.password} placeholder="insert password" onChange={this._handlerWritePassword} />
          <button type="submit">Login</button>
        </form>

        {/* PROFILE */}
        <h1>Profile</h1>
        <button onClick={this._handlerRetrieve}>Conseguir datos</button>
        <input type="text" placeholder={this.state.publicData.username} />
        <input type="text" placeholder={this.state.publicData.id} />

        {/* Delete profile */}
        <h2>Delete profile</h2>
        <div>
          <input type="text" value={this.state.username} placeholder="insert username" onChange={this._handlerWriteUsername} />
          <input type="password" value={this.state.password} placeholder="insert password" onChange={this._handlerWritePassword} />
          <button onClick={this._handlerDelete}>confirm</button>
        </div>

      </div>
    );
  }
}

export default App;
