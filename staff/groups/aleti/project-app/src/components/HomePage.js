import React, { Component } from 'react';
import './HomePage.css';
// import { Navbar, MenuItem, NavItem, Nav, NavDropdown, Grid, Row, Col, Thumbnail, FormControl, FormGroup, Button } from 'react-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,  Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import { FormGroup, FormControl } from 'react-bootstrap'
import logic from '../logic'
import { LinkContainer } from 'react-router-bootstrap';

//import { userActions } from '../_actions';

class HomePage extends Component {

  state = {
    movies: {},
    value: ''
  }

  componentDidMount() {
    logic.movie.getMoviesPopular('c9e81d7384a0e7aa9d0deecb8c80c2cc')
      .then(data => {
        this.setState({
          movies: data
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(e)
    logic.movie.searchMulti('c9e81d7384a0e7aa9d0deecb8c80c2cc', this.state.value)
      .then(data => {
        this.setState({
          movies: data
        })
      })
  }

  handleLogoutUser() {
    //localStorage.setItem('token', '')
  }

  handleDeleteUser(id) {
    //return (e) => this.props.dispatch(userActions.delete(id));
  }


  render() {
    return (

      <div className="content-home">
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

              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Settings</MenuItem>
                <MenuItem eventKey={3.2}>Help Center</MenuItem>
                <MenuItem eventKey={3.3}>favorites</MenuItem>
                <MenuItem divider />
                <LinkContainer to="/profile" onClick={this.handleLogoutUser} className="btn btn-secundary">
                  <NavItem eventKey={3.4}>Profile</NavItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                  <FormControl type="text" placeholder="Search" onChange={this.handleChange} value={this.state.value} />
              </FormGroup>{' '}
              <Button onClick={this.handleSubmit} type="submit">Submit</Button>
              <LinkContainer to="/" onClick={this.handleLogoutUser}>
                <NavItem eventKey={2}>Logout</NavItem>
              </LinkContainer>
            </Navbar.Form>

          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row>
            {this.state.movies.results && (
              this.state.movies.results.map(movie => {
                return (
                  <Col xs={12} sm={6} md={3} key={movie.id}>
                    <Thumbnail src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}>
                      <h3>Thumbnail label</h3>
                      <p>Description</p>
                      <p>
                        <Button bsStyle="primary">Button</Button>&nbsp;
                        <Button bsStyle="default">Button</Button>
                      </p>
                    </Thumbnail>
                  </Col>
                )
              })
            )}
          </Row>
        </Grid>


      </div>
    );
  }

}

export default HomePage;
