import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { Navbar, MenuItem, NavItem, Nav, NavDropdown } from 'react-bootstrap'


//import { userActions } from '../_actions';

class HomePage extends Component {
  componentDidMount() {
    //this.props.dispatch(userActions.getAll());
  }

  handleLogoutUser() {
    localStorage.setItem('token', '')
  }

  handleDeleteUser(id) {
    //return (e) => this.props.dispatch(userActions.delete(id));
  }


  render() {
    const { user, users } = this.props;

    // <p>
    //   <Link to="/" onClick={this.handleLogoutUser}>Logout</Link>
    // </p>

    return (

      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">SeriesLAP</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
      </NavItem>
              <NavItem eventKey={2} href="#">
                Link
      </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
      </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
      </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </div>

    );
  }

}

export default HomePage;
