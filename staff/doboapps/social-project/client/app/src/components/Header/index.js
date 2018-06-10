import React from "react"
import { Link } from "react-router-dom"
import logic from "../../logic"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom'



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

    render() {

        if(logic.isLogged()) return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Dogger</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

                        {logic.isLogged() ? <Nav className="ml-auto"  navbar>
                            <NavItem>
                                <NavLink  onClick={this.props.logOut} tag={Link}  to="/" >LogOut</NavLink>
                            </NavItem>
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
        else return (<div>hola</div>)
    }
}
export default withRouter(Header);
