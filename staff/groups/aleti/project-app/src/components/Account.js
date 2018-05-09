import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logic from '../logic/index'
import swal from 'sweetalert2'

class Account extends Component {
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
    }

    handleSubmit(event) {/* 
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password && user.confirmpw) {
            if (user.password === user.confirmpw) {
                const body = {
                    "username": user.username,
                    "password": user.password,
                    "firstname": user.firstName,
                    "lastname": user.lastName
                }
                logic.registerUser(body).then(data => {
                    if (data.status === 'OK') {
                        swal({
                            title: 'Registered!',
                            title: 'Go to login!',
                            type: 'success'
                        }).then(result => {
                            if (result.value) {
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
        } */
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <form name="form" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend><h3>Change Password</h3></legend>
                        <label>old pass</label>
                        <input type="text" /><br />
                        <label>new pass</label>
                        <input type="text" /><br />
                        <label>confirm new pass</label>
                        <input type="text" /><br/>
                        <button>Update Password</button>
                    </fieldset>

                    <fieldset>
                        <legend><h3>Change Username</h3></legend>
                        <p>Changing your username can have unintended side effects</p>
                        <label>new user name : </label>
                        <input type="text" /><br />
                        <button>Change Username</button>
                    </fieldset>

                    <fieldset>
                        <legend><h3>Delete Account</h3></legend>
                        <span>Once you delete your account, there is no going back. Please be certain.<br/></span>
                        <button>Delete Account</button>
                    
                    </fieldset>

                </form>
                <Link to="/home" className="btn btn-link">Go Home</Link>
            </div>
        );
    }
}


export default Account