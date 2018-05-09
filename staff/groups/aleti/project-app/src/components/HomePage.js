import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
// import { Navbar, MenuItem, NavItem, Nav, NavDropdown, Grid, Row, Col, Thumbnail, FormControl, FormGroup, Button } from 'react-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,  FormGroup, FormControl, Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import logic from '../logic'

//import { userActions } from '../_actions';

class HomePage extends Component {

  state = {
    movies: {}
  }

  componentDidMount() {
    logic.movie.getMoviesPopular('c9e81d7384a0e7aa9d0deecb8c80c2cc')
    .then(data => {
        this.setState({
          movies: data
      })
    })
  }

  handleLogoutUser() {
    localStorage.setItem('token', '')
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
              <a href="#brand">SeriesLAV</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                <Link to="#">Series</Link>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Link to="#">Movies</Link>
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Settings</MenuItem>
                <MenuItem eventKey={3.2}>Help Center</MenuItem>
                <MenuItem eventKey={3.3}>favorites</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}><Link to="/profile" className="btn btn-secundary">Profile</Link></MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <Navbar.Collapse eventKey={4}>
                <Navbar.Form pullLeft>
                  <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                  </FormGroup>{' '}
                  <Button type="submit">Submit</Button>
                </Navbar.Form>
              </Navbar.Collapse>
              <NavItem eventKey={2} href="#">
                <p>
                  <Link to="/" onClick={this.handleLogoutUser}>Logout</Link>
                </p>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row>
            {this.state.movies.results && (
              this.state.movies.results.map(movie => {
                return(
                  <Col xs={12} sm={6} md={3}>
                    <Thumbnail  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}>
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
