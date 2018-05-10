import React, { Component } from 'react';
import { render } from "react-dom";
import './HomePage.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,  Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import { FormGroup, FormControl } from 'react-bootstrap'
import logic from '../logic'
import { LinkContainer } from 'react-router-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

class HomePage extends Component {

  state = {
    movies: {},
    value: '',
    page: 1,
    username: '',
    key: 'c9e81d7384a0e7aa9d0deecb8c80c2cc'
  }

  fetchMoreData = () => {
    logic.movie.getMoviesPopular(this.state.key, this.state.page)
      .then(data => {
        this.setState({
          page: this.state.page + 1,
          movies: {
            ...this.state.movies,
            results: [
              ...this.state.movies.results,
              ...data.results
            ]
          }
        })
      })
  };

  componentDidMount() {

    if (localStorage.getItem('userName')){
        this.setState({
          username: localStorage.getItem('userName')
        })
    }

    logic.movie.getMoviesPopular(this.state.key)
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

    if(this.state.value){
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

  handleLogoutUser() {
    localStorage.setItem('token', '')
    localStorage.setItem('id', '')
    localStorage.setItem('userName', '')
    this.setState({
      username: ''
    })
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
              { this.state.username ?
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

        <div>
          <InfiniteScroll
            dataLength={this.state.movies.results ? this.state.movies.results.length : 0}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
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
          </InfiniteScroll>
        </div>


      </div>
    );
  }

}

export default HomePage;
