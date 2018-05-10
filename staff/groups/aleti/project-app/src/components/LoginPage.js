import React, { Component } from 'react';
import logic from '../logic'
import swal from 'sweetalert2'
import InputUser from './InputUser';
import ButtonInput from './ButtonInput';
import Clap from 'react-clap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import { FormGroup, FormControl } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        // reset login statu

        this.state = {
            username: '',
            password: '',
            submitted: false,
            totalClapCount: 100,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            const body = { "username": username, "password": password }
            logic.user.loginUser(body).then(result => {
                if (result.status === 'OK') {
                    this.storageUserData(result)
                    this.props.history.push('/')
                } else {
                    swal({
                        type: 'error',
                        title: 'Something went wrong!',
                        text: result.error
                    })
                }
            })
            this.setState({
                username: '',
                password: '',
                submitted: false
            })
        }
    }

    storageUserData(result) {
        localStorage.setItem('token', result.data.token)
        console.log("entra en el login el sig token :" ,localStorage.getItem("token") )
        localStorage.setItem('id', result.data.id)
        logic.user.retrieveUser(result.data.id, result.data.token)
        .then(res => {
            if (res.status === 'OK') {
                localStorage.setItem('userName', res.data.username)
            }
        })

    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
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
                                <LinkContainer to="/profile" className="btn btn-secundary">
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


                <form name="form" onSubmit={this.handleSubmit}>
                    <InputUser type='text' name='username' helpText='Username is required' labelText='Username'
                        value={username} submitted={submitted} handleChange={this.handleChange} />
                    <InputUser type='password' name='password' helpText='Password is required' labelText='Password'
                        value={password} submitted={submitted} handleChange={this.handleChange} />
                    <ButtonInput name='Login' destination='register' nameLink='Register' condition={loggingIn}/>
                </form>
            </div>
        );
    }
}


export default LoginPage