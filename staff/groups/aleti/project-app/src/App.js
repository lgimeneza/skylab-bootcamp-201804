import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap'
import { FormGroup, FormControl } from 'react-bootstrap'

import history from './components/history'
import { PrivateRoute } from './components/PrivateRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import LandingPage from './components/LandingPage'
import ProfilePage from './components/ProfilePage'
import InfiniteScroll from 'react-infinite-scroll-component';
import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {

  state = {
    movies: {},
    value: '',
    page: 1,
    username: '',
    key: 'c9e81d7384a0e7aa9d0deecb8c80c2cc'
  }


  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.value) {
      logic.movie.searchMulti(this.state.key, this.state.value)
        .then(data => {
          this.setState({
            movies: data
          })
        })
    } else {
      logic.movie.getMoviesPopular(this.state.key)
        .then(data => {
          this.setState({
            movies: data
          })
        })
    }
  }



  render() {
    return (
      <div>

        <Navbar inverse collapseOnSelect>

          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Movies&TV-LAV</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/" onClick={this.handleLogoutUser}>
                <NavItem eventKey={1}>Series</NavItem>
              </LinkContainer>
              <LinkContainer to="/" onClick={this.handleLogoutUser}>
                <NavItem eventKey={2}>Movies</NavItem>
              </LinkContainer>
              {this.state.username ?
                <NavDropdown eventKey={3} title={localStorage.getItem('userName')} id="basic-nav-dropdown">
                  <LinkContainer to="/profile">
                    <NavItem eventKey={3.1}>Profile</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/" onClick={this.handleLogoutUser}>
                    <NavItem eventKey={3.2}>Logout</NavItem>
                  </LinkContainer>
                </NavDropdown>
                :
                <Nav>
                  <LinkContainer to="/login" onClick={this.handleLogoutUser}>
                    <NavItem eventKey={3}>login</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/register" onClick={this.handleLogoutUser}>
                    <NavItem eventKey={4}>register</NavItem>
                  </LinkContainer>
                </Nav>
              }
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" onChange={this.handleChange} value={this.state.value} />
              </FormGroup>{' '}
              <Button onClick={this.handleSubmit} type="submit">Submit</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>

        <Router history={history}>
          <div className="content-api">
            {/* <PrivateRoute path="/home" component={ HomePage } /> */}
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/landing" component={ LandingPage } /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App