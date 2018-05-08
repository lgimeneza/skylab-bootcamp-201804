import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logic from '../../logic';
import 'animate.css';

import swal from 'sweetalert2';

class Register extends Component {
    state = {
        username: '',
        email: '',
        repeatEmail: '',
        password: '',
        repeatPassword: '',
        redirect: false
    };

    handlerRegister = e => {
        e.preventDefault();

        let error = false;
        let msg = '';

        if (this.state.email !== this.state.repeatEmail) {
            error = true;
            msg += '<p>Email and repeat-Email does not match</p>';
        }

        if (this.state.password !== this.state.repeatPassword) {
            error = true;
            msg += '<p>Password and repeat-Password does not match</p>';
        }

        if (error) {
            swal({
                type: 'error',
                title: 'Oops...',
                html: msg,
                animation: false,
                customClass: 'animated flipInX'
            });
        } else {
            const user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            };

            logic.registerUser(user).then(userData => {
                userData.status === 'OK'
                    ? swal('Registered', 'Go to login', 'success').then(
                          result => {
                              if (result) this.setState({ redirect: true });
                          }
                      )
                    : swal('Warning', userData.error, 'warning');
            });
        }
    };

    // swal({
    //     type: 'error',
    //     title: 'Oops...',
    //     text: 'Password and repeat-Password does not match'
    // });

    handleInput = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        if (this.state.redirect) return <Redirect to="/login" />;

        return (
            <section className="content">
                <header>
                    <h2>FitFood💪</h2>
                </header>

                <form className="form-register" onSubmit={this.handlerRegister}>
                    <div id="username">
                        <p className="keys" id="user">
                            Username
                        </p>
                        <input
                            className="text"
                            id="user-E"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div id="email">
                        <p className="keys" id="email-N">
                            Email
                        </p>
                        <input
                            className="text"
                            id="email-E"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div id="rep-email">
                        <p className="keys" id="reemail-N">
                            Repeat-Email
                        </p>
                        <input
                            className="text"
                            id="reemail-E"
                            type="email"
                            name="repeatEmail"
                            placeholder="Repeat-Email"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div id="password">
                        <p className="keys" id="password-N">
                            Password
                        </p>
                        <input
                            className="text"
                            id="password-E"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div id="rep-password">
                        <p className="keys" id="repass">
                            Repeat-Password
                        </p>
                        <input
                            className="text"
                            id="repass-E"
                            type="password"
                            name="repeatPassword"
                            placeholder="Repeat-Password"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="btns">
                        <input
                            className="buttons"
                            type="submit"
                            defaultValue="Register"
                        />
                    </div>
                    <div className="p-regist">
                        <p>
                            Already registered?
                            <Link to="/login">
                                <span id="span">Log in</span>
                            </Link>
                        </p>
                    </div>
                </form>
                <div className="content-right" />
            </section>
        );
    }
}

export default Register;
