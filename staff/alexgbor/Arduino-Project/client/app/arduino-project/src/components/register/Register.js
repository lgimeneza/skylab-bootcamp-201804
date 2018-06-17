import React, { Component } from "react";
import logic from "../../logic";
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert2'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
                            text: res,
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
        return <div className="container">
            <h2 className="text-center ">REGISTER </h2>

            <Form onSubmit={this._handleRegister}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input autoFocus value={this.state.name} onChange={this._handleKeepName} type="text" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                    <Label>Surname</Label>
                    <Input value={this.state.surname} onChange={this._handleKeepSurname} type="text" placeholder="Surname" />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input value={this.state.email} onChange={this._handleKeepEmail} type="text" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input value={this.state.password} onChange={this._handleKeepPassword} type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Label>Repeat Password</Label>
                    <Input value={this.state.repeatPassword} onChange={this._handleKeepRepeatPassword} type="password" placeholder="Repeat Password" />
                </FormGroup>
                <Button type="submit">Register</Button>
            </Form>
                <div className="row justify-content-center ">

                    <p className="text-danger text-capitalize">{this.state.notMatchingMessage}</p>
                </div>

                <div className="row justify-content-center ">

                </div>

        </div>
    }

}

export default withRouter(Register);