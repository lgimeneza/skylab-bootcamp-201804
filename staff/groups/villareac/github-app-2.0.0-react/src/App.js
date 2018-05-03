import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logic from './logic'
import SearchUsers from './components/searchUsers/SearchUsers'
import ListUsers from './components/listUsers/ListUsers';

class App extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      data: [],
      onError: 0
    }
  }

  _searchUsers = (e) => {
    e.preventDefault()
    
    logic.searchUsers(this.state.username)
    .then(data => { this.setState({data})
      // data.message ? this.setState({ onError: true }) : this.setState({ onError: false });
      // this.setState({data, username: ''})
    })
  }

  _handlerWriteName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* here goes the title */}
          <h1 className="App-title">Github User App</h1>
        </header>

      < SearchUsers _searchUsers={this._searchUsers}  _handlerWriteName={this._handlerWriteName} value={this.state.username}/>
    
      {!this.state.data.length ? '' : < ListUsers data={this.state.data}/>}

        <div>
          <h2>Show user info</h2>
          <img />
          <p>info </p>
          <p>info</p>
        </div>

      </div>
    );
  }
}

export default App;
