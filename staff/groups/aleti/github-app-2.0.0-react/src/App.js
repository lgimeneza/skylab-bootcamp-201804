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
    user: {},
    query: '',
  }

  _searchUsers = e => {
    e.preventDefault();

    logic.searchUsers(this.state.query)
      .then(users => {
        this.setState({users: users})
      });
  }

  _retrieveUser = username => {
    logic.retrieveUser(username)
      .then(user => {
        console.log(user)
        this.setState({user})
      });
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
            searchUsers={this._searchUsers} 
            value={this.state.query} />
        <div className="Row">
          <div className="Col">
            <UsersList 
              users={this.state.users}
              handleUsers={this._retrieveUser}/>
          </div>
          <div className="Col">
            <UserDetails 
              user={this.state.user}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
