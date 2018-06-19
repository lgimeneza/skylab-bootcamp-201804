import React, { Component } from "react";
import logic from '../../logic'
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert2'
import './style.css'
import { Button, Col, Row } from 'reactstrap'


class Unregister extends Component {

    state = {
        password: ''
    }

    _handleKeepPassword = ({ target: { value: password } }) => {
        this.setState({ password })
    }

    _handleUnregister(e) {

        e.preventDefault();

        let id = localStorage.getItem('id-app')
        let token = localStorage.getItem('token-app')
        let pass = this.state.password

        logic.retrieveUser(id, token).then(resp => resp.email)
            .then(email => logic.unregisterUser(email, pass, token, id))
            .then((r) => {
                if (r === true) {
                    swal({
                        type: 'success',
                        title: 'Sad tou see you leave...'
                    })
                    localStorage.removeItem("id-app")
                    localStorage.removeItem("token-app")
                    this.history.push('/')
                }
                else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: r
                    })
                }
            }

            )
    }
    render() {
        return <div>
            {
                this.props.isLogged() ?
                    <div className="forms">

                        <h1 className="text-center mt-5">Unregister</h1>
                        <Row>
                            <Col xs='12' md={{ size: '6', offset: '3' }}>
                                <form onSubmit={this._handleUnregister}  >
                                    <div className="field mb-4">
                                        <input type="password" name="password" id="password" placeholder="123123ab" value={this.state.password} onChange={this._handleKeepPassword} />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="row justify-content-center ">
                                        <Button type="submit">Send</Button>
                                    </div>

                                </form>
                            </Col>
                        </Row>
                    </div>
                    :
                    <h2> You are not allowed </h2>
            }
        </div>
    }
}

export default withRouter(Unregister)