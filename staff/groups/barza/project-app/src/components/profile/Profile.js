import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import logic from './../../logic/';

import Header from '../header/Header';
import swal from 'sweetalert2';

class Profile extends Component {
    state = {
        user: {},
        isLoading: true,
        isLogged: true,
        isUserRemoved: false,
        tokenExpired: false
    };

    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            
            logic.token = user.token;

            logic.retrieveUser(user.id).then(res => {
                if (res.status === 'OK') {
                    this.setState({
                        user: res.data,
                        isLoading: false
                    });
                
                } else {
                     this.setState({
                        tokenExpired: true
                     })
                 }
            });
        } else {
            this.setState({
                isLogged: false
            })
        }
    }

    handleUnregisterUser = () => {
        const userId = this.state.user.id;

        swal({
            title: 'Are you sure you want to delete your account?',
            text: 'Enter your password to confirm',
            input: 'password',
            type: "warning",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete!',
            showLoaderOnConfirm: true,
            preConfirm: (password) => {
                const unregisterUser = {
                    "username": this.state.user.username,
                    "password": password
                }

                return logic.unregisterUser(userId, unregisterUser).then(res => res);
            },
            allowOutsideClick: () => !swal.isLoading()
          }).then((result) => {

            if(result.value.status === 'OK') {
                swal({
                    title: "Account deleted!",
                    type: 'success'
                }).then(result => {
                    localStorage.removeItem("user");

                    this.setState({
                        isUserRemoved: true
                    }); 
                })
            }
            else {
                swal({
                    title: "Invalid Password!",
                    type: "error"
                });
            }
          });
    }
    
    renderProfile = () => {

        if (this.state.tokenExpired || !this.state.isLogged || this.state.isUserRemoved) return <Redirect to='/login' />

        if (this.state.isLoading) return <span>Loading user data...</span>
        
        return (
            <div>
                <Header isLogged={this.state.isLogged} />
                <section>
                    <p>Username: {this.state.user.username}</p>
                    <p>
                        {this.state.user.email
                            ? `Email: ${this.state.user.email}`
                            : ''}
                    </p>
                    <p>
                        {this.state.user.age ? `Age: ${this.state.user.age}` : ''}
                    </p>
                    <p>
                        {this.state.user.country
                            ? `Country: ${this.state.user.country}`
                            : ''}
                    </p>
                    <p>
                        {this.state.user.gender
                            ? `Gender: ${this.state.user.gender}`
                            : ''}
                    </p>
                    <p>
                        {this.state.user.number
                            ? `Tel. Number: ${this.state.user.number}`
                            : ''}
                    </p>

                    <button><Link to='/profile/update'>Edit Profile</Link></button>
                    <button onClick={this.handleUnregisterUser} >Delete Account</button>
                </section>
            </div>
        );
    }

    render() {
        return this.renderProfile()
    }
}

export default Profile;
