import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logic from '../logic/index'
import swal from 'sweetalert2'
import InputUser from './InputUser';
import ButtonInput from './ButtonInput';


class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                confirmpw: ''
            },
            submitted: false,
            registerResult: {}
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password && user.confirmpw) {
            if (user.password === user.confirmpw){
                const body = { 
                    "username": user.username, 
                    "password": user.password, 
                    "firstname": user.firstName,
                    "lastname": user.lastName
                }
                logic.registerUser(body).then(data => {
                    if (data.status === 'OK'){
                        swal({
                            title:'Registered!',
                            title:'Go to login!',
                            type: 'success'
                        }).then(result => {
                            if(result.value){
                                this.props.history.push('/login')
                            }
                        })
                    } else {
                        swal({
                            type: 'error',
                            title: 'Something went wrong!',
                            text: data.error
                        })
                    }

                })
            } else {
                swal({
                    type: 'error',
                    title: 'Something went wrong!',
                    text: "Those passwords didn't match"
                })
            }
            this.setState({
                user: {
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: '',
                    confirmpw: ''
                },
                submitted: false
            })
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <InputUser name='firstName' helpText='First Name is required' labelText='First Name' 
                        value={user.firstName} submitted={submitted} handleChange={this.handleChange}  />
                    <InputUser name='lastName' helpText='Last Name is required' labelText='Last Name' 
                        value={user.lastName} submitted={submitted} handleChange={this.handleChange}  />
                    <InputUser name='username' helpText='Username is required' labelText='Username' 
                        value={user.username} submitted={submitted} handleChange={this.handleChange}  />
                    <InputUser name='password' helpText='Password is required' labelText='Password' 
                        value={user.password} submitted={submitted} handleChange={this.handleChange}  />
                    <InputUser name='confirmpw' helpText='Password is required' labelText='Confirm password' 
                        value={user.confirmpw} submitted={submitted} handleChange={this.handleChange}  />
                    <ButtonInput name='Register' destination='login' nameLink='Cancel' condition={registering} />
                </form>
            </div>
        );
    }
}


export default RegisterPage