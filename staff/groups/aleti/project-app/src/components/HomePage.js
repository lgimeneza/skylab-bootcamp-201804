import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { Navbar, MenuItem, NavItem, Nav, NavDropdown, Grid, Row, Col, Thumbnail, FormControl, FormGroup, Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'

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

        <div className="container-LAV">
          <h2>Popular in LAV</h2>
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/carousel.png" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/carousel.png" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/carousel.png" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="container-start">
        <h2>keep watching</h2>
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="../images/fff(1).png" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/carousel.png" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src="/carousel.png" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

            

        );
    }



}

export default HomePage;
