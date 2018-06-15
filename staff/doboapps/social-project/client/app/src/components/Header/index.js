import React from "react"
import { Link ,withRouter,} from "react-router-dom"
import logic from "../../logic"
import { NavBarDisconnection } from "../index";
import { CardImg, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './style.scss'


class Header extends React.Component {


    toggle = this.toggle.bind(this);
    state = {
        isOpen: false,
    }
 
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    goBack=()=>{
        this.props.history.goBack();
    }

    render() {

        if(logic.isLogged()) return (
            <div>
                <Navbar className="navbar-logged" color="light" light expand="md">
                    <i  onClick={this.goBack} className="rotate fas fa-caret-square-left fa-2x "></i>
                    <NavbarBrand className="logo zi-1" tag={Link}  to="/" >Dogger</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {logic.isLogged() ? <Nav className="ml-auto"  navbar>
                            <ul className="zi-1">
                                <li>
                                    <NavLink  onClick={this.props.logOut} tag={Link}  to="/" >LogOut</NavLink>
                                </li>
                                <li>
                                <NavLink  tag={Link}  to={`/user/${localStorage.getItem("id-app")}`} >
                                    <span >{this.props.dataUser.name} </span>
                                    <CardImg className="rounded-circle" top src={this.props.dataUser.photoProfile} alt="Card image cap" />
                                </NavLink>
                                </li>
                            </ul>
                        </Nav>
                            :
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/Login">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/register">register</NavLink>
                                </NavItem>
                            </Nav>
                        }
                    </Collapse>
                </Navbar>
            </div>
        )
        else return (<NavBarDisconnection/>)
    }
}
export default withRouter(Header);
