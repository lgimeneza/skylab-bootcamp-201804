import React, { Component } from 'react';
import logo from './logo.svg';
import logic from './logic'
import './App.css';


class App extends Component {
  state = {
    name:'',
    surname:'',
    email:'',
    password:''
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value 
    })
  }
  updateSurname = (e) => {
    this.setState({
      surname: e.target.value 
    })
  }
  updateEmail = (e) => {
    this.setState({
      email: e.target.value 
    })
  }
  updatePassword = (e) => {
    this.setState({
      password: e.target.value 
    })
  }
  register = (e) =>{
    e.preventDefault()
    
    logic.register(this.state.email, this.state.password)


    this.setState({email:'', password:''})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Register</h1>
        <form onSubmit={this.state.register}>
          
          <input type="name" name="name" placeholder="name" value={this.state.name} onChange={this.updateName} />
          <input type="surname" name="surname" placeholder="surname" value={this.state.surname} onChange={this.updateSurname} />
          <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.updateEmail} />
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.updatePassword} />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default App;
