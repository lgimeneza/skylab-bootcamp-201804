import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logic from './logic'

logic.token = '316f8c330c989ac16e9c3a0a6fa1a2b8c3c18935'

class App extends Component {
  state = {
    query: '',
    users: [],
    user: {}
  }

  keepQuery = (e) => {
    const query = e.target.value

    this.setState({
      query
    })
  }

  search = (e) => {
    e.preventDefault()

    logic.searchUsers(this.state.query)
      .then(users => this.setState({ users, query: '' }))
      .catch(this.showError)
  }

  showError() {
    alert('something gone wrong :(')
  }

  showInfo(username) {
    logic.retrieveUser(username)
      .then(user => this.setState({ user }))
      .catch(this.showError)
  }

  render() {
    const { query, users, user: { login, avatar_url, followers, following } } = this.state

    return (
      <main>
        <header>
          <h1>github app</h1>
        </header>
        <section>
          <h2>search</h2>
          <form onSubmit={this.search}>
            <input type="text" onChange={this.keepQuery} value={query} placeholder="input a query..." />
            <button type="submit">search</button>
          </form>
        </section>
        <div>
          <section className="left">
            <h2>list</h2>
            <ul>
              {users.map(({ id, login, avatar_url }) =>
                <li key={id}>
                  <h3>{login}</h3>
                  <img src={avatar_url} onClick={() => this.showInfo(login)} alt={login} title={login} />
                </li>)}
            </ul>
          </section>
          {login && <section className="right">
            <h2>info</h2>
            <h3>{login}</h3>
            <img src={avatar_url} alt={login} title={login} />
            <h4>followers: {followers}</h4>
            <h4>following: {following}</h4>
          </section>}
        </div>
      </main>
    )
  }
}

export default App;
