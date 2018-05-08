import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logic from '../logic'
import swal from 'sweetalert2'
import InputUser from './InputUser';
import ButtonInput from './ButtonInput';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        // reset login statu

        this.state = {
            username: '',
            password: '',
            submitted: false
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
        //const { dispatch } = this.props;
        if (username && password) {

            const body = { "username": username, "password": password  }
            logic.loginUser(body).then(data => {
                if (data.status === 'OK'){
                    localStorage.setItem('token', data.data.id)
                    this.props.history.push('/home')
                } else {
                    swal({
                        type: 'error',
                        title: 'Something went wrong!',
                        text: data.error
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

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <InputUser name='username' helpText='Username is required' labelText='Username'
                        value={username} submitted={submitted} handleChange={this.handleChange} />
                    <InputUser name='password' helpText='Password is required' labelText='Password'
                        value={password} submitted={submitted} handleChange={this.handleChange} />
                    <ButtonInput name='Login' destination='register' nameLink='Register' condition={loggingIn}/>
                </form>
            </div>
        );
    }
}


export default LoginPage