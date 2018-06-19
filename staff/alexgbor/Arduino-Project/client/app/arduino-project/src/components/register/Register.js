import React, { Component } from "react";
import logic from "../../logic";
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert2'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import './style.css'

class Register extends Component {
    state = {
        name: "",
        surname: "",
        password: "",
        email: "",
        repeatPassword: "",
        notMatchingMessage: "",
        registerFailedMessage: ""
    }


    _comparePassword() {

        if ((this.state.password !== this.state.repeatPassword) && this.state.repeatPassword.length) {
            this.setState({
                notMatchingMessage: "Passwords don't match"

            })
        } else {
            this.setState({
                notMatchingMessage: ""
            })
        }
    }

    _handleKeepName = (e) => {
        let name = e.target.value;
        this.setState({ name })
    }

    _handleKeepSurname = (e) => {
        let surname = e.target.value;
        this.setState({ surname })
    }

    _handleKeepEmail = (e) => {
        let email = e.target.value;
        this.setState({ email })
    }

    _handleKeepPassword = (e) => {
        let password = e.target.value;

        Promise.resolve().then(() => {
            this.setState({ password })
        }).then(() => {
            this._comparePassword()
        })
    }

    _handleKeepRepeatPassword = (e) => {
        let repeatPassword = e.target.value;

        Promise.resolve().then(() => {
            this.setState({ repeatPassword })
        }).then(() => {
            this._comparePassword()
        })
    }

    _handleRegister = (e) => {
        e.preventDefault();
        if (this.state.notMatchingMessage === '') {

            logic.registerUser(this.state.name, this.state.surname, this.state.email, this.state.password)
                .then(res => {
                    if (res.status === 'OK') {
                        swal({
                            type: 'success',
                            title: 'You registered awesomely!',
                            text: 'Now please proceed to Sign In.',
                        })
                        this.props.history.push('/login')
                    }
                    else {
                        swal({
                            type: 'error',
                            title: 'Oops...',
                            text: res
                        })
                    }
                })
        } else {
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Passwords don\'t match',
            })
        }
    }


    render() {
        return <div className="forms">
            <h2 className="text-center mt-3">REGISTER</h2>
            <Row>
                <Col xs='12' md={{ size: '6', offset: '3' }}>
                    <form onSubmit={this._handleRegister}>
                        <div className="field mb-4">
                            <input type="text" name="name" id="name" placeholder="John" autoFocus value={this.state.name} onChange={this._handleKeepName} />
                            <label htmlFor="name">Name</label>
                        </div><div className="field mb-4">
                            <input type="text" name="surname" id="surname" placeholder="Doe" value={this.state.surname} onChange={this._handleKeepSurname}  />
                            <label htmlFor="surname">Surname</label>
                        </div><div className="field mb-4">
                            <input type="text" name="email" id="email" placeholder="johndoe@gmail.com" value={this.state.email} onChange={this._handleKeepEmail} />
                            <label htmlFor="email">Email</label>
                        </div><div className="field mb-4">
                            <input type="password" name="Password" id="Password" placeholder="123123ab" value={this.state.password} onChange={this._handleKeepPassword}/>
                            <label htmlFor="password">Password</label>
                        </div><div className="field mb-4">
                            <input type="password" name="repeatpassword" id="repeatpassword" placeholder="123123ab" value={this.state.repeatPassword} onChange={this._handleKeepRepeatPassword} type="password" />
                            <label htmlFor="repeatpassword">Repeat Password</label>
                        </div>
                        <Button type="submit">Register</Button>
                    </form>
                </Col>
            </Row>
            <div className="row justify-content-center ">

                <p className="text-danger text-capitalize">{this.state.notMatchingMessage}</p>
            </div>

            <div className="row justify-content-center ">

            </div>

        </div>
    }

}

export default withRouter(Register);