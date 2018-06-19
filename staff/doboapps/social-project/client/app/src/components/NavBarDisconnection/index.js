import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, Nav} from 'reactstrap';
import { withRouter,Link} from "react-router-dom"
import './style.scss';
import logo from "../../images/others/logo.png"


 class NavBarDisconnection extends Component {


  render() {
    let { pathname: route } = this.props.location

    
    return (<Navbar className="nav-bar-disconnection" color="light" light expand="md">
            <NavbarBrand className="logo-initial zi-1" tag={Link}  to="/" >
                    <img src={logo} alt="logo"/>
            </NavbarBrand>
           
            <Nav className="ml-auto" navbar>

            <div>
                     {(route!=="/login")&&<Button color="link text-muted" tag={Link}  to="/login">Login</Button>}
                     {(route!=="/register")&&<Button color="link text-muted" tag={Link}  to="/register">Register</Button>}


            </div>
            </Nav>
        
    
    </Navbar>
 
    );
  }
}


export default withRouter(NavBarDisconnection)

