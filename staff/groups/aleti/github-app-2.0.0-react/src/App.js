import React, { Component } from 'react';
import logo from './logo.svg';
import SearchUsers from './components/SearchUsers'
import UsersList from './components/UsersList'
import UserDetails from './components/UserDetails'
import logic from './logic/index'

import './App.css';

class App extends Component {

  state = {
    users: [],
    query: '',
  }

  searchUsers = e => {
    e.preventDefault();

    logic.searchUsers(this.state.query)
      .then(users => {
        this.setState({users: users})
      });
  }

  handleGetUser = e => {
    e.preventDefault();

    logic.retrieveUser()
  }

  handleChange = e => {
    this.setState({query: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <SearchUsers 
          handleWriteUser={this.handleChange} 
          searchUsers={this.searchUsers} 
          value={this.state.query} />

        <UsersList _users={this.state.users}/>
        <UserDetails />
      </div>
    );
  }
}

export default App;
