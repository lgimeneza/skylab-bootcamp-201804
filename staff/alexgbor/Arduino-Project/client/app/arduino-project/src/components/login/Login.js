import React, { Component } from "react";
import logic from "../../logic";
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert2'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends Component {

    state = {
        email: "",
        password: "",
        loginFailedMessage: ""
    }

    _handleKeepEmail = (e) => {
        let email = e.target.value;
        this.setState({ email })
    }


    _handleKeepPassword = (e) => {
        let password = e.target.value;
        this.setState({ password })
    }


    _handleLogin = (e) => {
        e.preventDefault()
        logic.login(this.state.email, this.state.password)
            .then(res => {
                if (res.status === 'OK') {
                    localStorage.setItem('token-app', res.data.token)

                    localStorage.setItem('id-app', res.data.id)
                    this.props.history.push('/home')

                } else {
                    swal({
                        type: 'error',
                        title: 'Oopsies!',
                        text: res.error,
                    })
                    this.setState({
                        loginFailedMessage: res.error
                    })
                }
            })
    }

    render() {

        return (

            <div className="container login-form">
                <h2 className="text-center ">LOGIN </h2>

                <Form onSubmit={this._handleLogin}>
                <FormGroup>
                    <Label>Email</Label>
                    <Input value={this.state.email} autoFocus onChange={this._handleKeepEmail} type="text" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input value={this.state.password} onChange={this._handleKeepPassword} type="password" placeholder="Password" />
                </FormGroup>
                <Button type="submit">Log me In</Button>
            </Form>
            </div>
        )
    }
}

export default withRouter(Login);