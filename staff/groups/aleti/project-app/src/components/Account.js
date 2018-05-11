import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logic from '../logic/userLogic'
import swal from 'sweetalert2'
import InputUser from './InputUser';
import ButtonInput from './ButtonInput';
import './Account.css';

class Account extends Component {

    state = {
        user: {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            bio: '',
            location: ''
        },
        submitted: false,
    };

    handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    componentDidMount = () => {
        logic.retrieveUser(localStorage.getItem('id'), localStorage.getItem("token"))
            .then(data => {
                if (data.status === 'OK') {
                    const { name, value } = data;
                    this.setState({
                        user: {
                            ...data.data,
                            [name]: value
                        }
                    })
                } else {
                    throw Error("wrong token")
                }
            });
    }

    handleSubmit = (event) => {}
    

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
                        <input type="text" /><br />
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
                        <span>Once you delete your account, there is no going back. Please be certain.<br /></span>
                        <button>Delete Account</button>

                    </fieldset>

                </form>
                <Link to="/home" className="btn btn-link">Go Home</Link>
            </div>
        );
    }
}


export default Account