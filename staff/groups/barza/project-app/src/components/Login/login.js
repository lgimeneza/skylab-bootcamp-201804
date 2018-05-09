import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import logic from '../../logic';
import swal from 'sweetalert2';

import Header from '../header/Header';

class Login extends Component {
    state = {
        username: '',
        password: '',
        isLogged: false
    };

    handleSubmitLogin = e => {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        };

        logic.loginUser(user).then(userData => {
            if (userData.status === 'OK') {
                localStorage.setItem('user', JSON.stringify(userData.data));

                this.setState({
                    isLogged: true
                });
            } else {
                swal('Warning', userData.error, 'warning');
            }
        });
    };

    handleInputUsername = e => {
        const value = e.target.value;

        this.setState({
            username: value
        });
    };

    handleInputPassword = e => {
        const value = e.target.value;

        this.setState({
            password: value
        });
    };

    render() {
        if (this.state.isLogged) return <Redirect to="/home" />;

        return (
            <div><Header isLogged={this.state.isLogged} />
            <section className="content">
                <header>
                    <h2>FitFood💪</h2>
                </header>
                <div className="p-intro">
                    <form onSubmit={this.handleSubmitLogin}>
                        <div>
                            <p>
                                <input
                                    className="text"
                                    type="text"
                                    name="user"
                                    placeholder="username"
                                    onChange={this.handleInputUsername}
                                />
                            </p>
                            <p>
                                <input
                                    className="text"
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    onChange={this.handleInputPassword}
                                />
                            </p>
                        </div>
                        <div className="btns">
                            <input
                                className="buttons"
                                type="submit"
                                defaultValue="Login"
                            />
                        </div>
                    </form>
                </div>
                <div className="p-regist">
                    <p>
                        Not registred?
                        <Link to="/register">
                            <span id="span">Create an account</span>
                        </Link>
                    </p>
                </div>
                <div className="content-right" />
            </section>
            </div>
        );
    }
}
export default Login;
