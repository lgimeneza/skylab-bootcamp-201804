import React, { Component } from "react";
import logic from "../../logic";
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert2'
import { Button, Row, Col } from 'reactstrap';
import './style.css'

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

            <div className="forms">
                <h2 className="text-center mt-5">LOGIN</h2>
                <Row>
                    <Col xs='12' md={{ size: '6', offset: '3' }}>
                        <form onSubmit={this._handleLogin}>
                            <div className="field mb-4">
                                <input type="text" name="email" id="email" placeholder="johndoe@gmail.com" value={this.state.email} autoFocus onChange={this._handleKeepEmail} />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="field mb-4">
                                <input type="password" name="password" id="password" placeholder="123123ab" value={this.state.password} onChange={this._handleKeepPassword} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <Button type="submit">Log me In</Button>
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Login);