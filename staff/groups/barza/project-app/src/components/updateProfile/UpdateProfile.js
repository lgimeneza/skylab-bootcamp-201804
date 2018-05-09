import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import logic from './../../logic/';
import 'animate.css';
import swal from 'sweetalert2';

import Header from '../header/Header'

class UpdateProfile extends Component {

    state = {
   
        isLoading: true,
        isLogged: true,
        tokenExpired: false,
        redirect: false,

        username: '',
        newUsername: '',
        email: '',
        age: '',
        country: '',
        gender: '',
        telNumber: '',
        password: '',
        newPassword: '',
        id: ''
    };

    
    componentDidMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.token;

            logic.token = user.token;

            logic.retrieveUser(user.id).then(res => {
                if (res.status === 'OK') {
                    this.setState({
                        newUsername: res.data.username,
                        username: res.data.username,
                        email: res.data.email,
                        age: res.data.age,
                        country: res.data.country,
                        gender: res.data.gender,
                        telNumber: res.data.telNumber,
                        password: res.data.password,
                        newPassword: res.data.newPassword,
                        id: res.data.id,

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

    handleWriteInputNewUsername = (e) => {
        let value = e.target.value
        this.setState({
            newUsername: value
        })
    }

    handleWriteInputEmail = (e) => {
        let value = e.target.value
        this.setState({
            email: value
        })
    }

    handleWriteInputAge = (e) => {
        let value = e.target.value
        this.setState({
            age: value
        })
    }

    handleWriteInputCountry = (e) => {
        let value = e.target.value
        this.setState({
            country: value
        })
    }

    handleWriteInputGender = (e) => {
        let value = e.target.value
        this.setState({
            gender: value
        })
    }

    handleWriteInputTelNumber = (e) => {
        let value = e.target.value
        this.setState({
            telNumber: value
        })
    }

    handleWriteInputPassword = (e) => {
        let value = e.target.value
        this.setState({
            password: value
        })
    }

    handleWriteInputNewPassword = (e) => {
        let value = e.target.value
        this.setState({
            newPassword: value
        })
    }

    handleSubmitUpdateProfile = (e) => {
        e.preventDefault()
        const { username, newUsername, email, age, country, gender, telNumber, password, newPassword } = this.state

        const updateUser = {
            username: username ,
            newUsername: newUsername,
            email: email,
            age: age,
            country: country,
            gender: gender,
            telNumber: telNumber,
            password: password,
            newPassword: newPassword
        }
    
        logic.updateUser(this.state.id, updateUser).then(res =>{
                    if (res.status === 'OK'){ 
                    swal({
                        title:'Update Profile!',
                        type:'success',
                        animation: false,
                        customClass: 'animated flipInX'}).then(
                            result => {
                                if(result) this.setState({ redirect: true})
                            })
                    } else {
                        swal({
                            title:'Updail Fail!',
                            type:'error',
                            text: res.error,
                            animation: false,
                            customClass: 'animated flipInX'})
                    }
    })   
    
    } 

    renderUpdate = () => {

        if (this.state.tokenExpired || !this.state.isLogged) return <Redirect to='/login' />

        if (this.state.isLoading) return <span>Loading user data...</span>

        if(this.state.redirect) return <Redirect to='/profile' />

        const { newUsername, username, email, age, country, gender, telNumber, password, newPassword } = this.state

        return (
            <div><Header isLogged={this.state.isLogged} />
                <section>
                    <form onSubmit={this.handleSubmitUpdateProfile}>
                        <p>Username</p> <input type="text" placeholder='New username' value={newUsername} onChange={this.handleWriteInputNewUsername} />
                        <p>Email</p><input type="email" placeholder='email' value={email} onChange={this.handleWriteInputEmail} />
                        <p>Age</p><input type="number" placeholder='Age' value={age} onChange={this.handleWriteInputAge} />
                        <p>Country</p><input type="text" placeholder='Country' value={country} onChange={this.handleWriteInputCountry} />
                        <p>Gender</p><input type="text" placeholder='Gender' value={gender} onChange={this.handleWriteInputGender} />
                        <p>Telephone number</p><input type="number" placeholder='Telephone number' value={telNumber} onChange={this.handleWriteInputTelNumber} />
                        <p>Password</p><input type="password" placeholder='Password' value={password} onChange={this.handleWriteInputPassword} />
                        <p>New password</p><input type="password" placeholder='New Password' value={newPassword} onChange={this.handleWriteInputNewPassword} />
                        <button type='submit'>Update Profile</button>
                    </form>

                </section>
            </div>
        );
    }

    render() {

        return this.renderUpdate()
    }
}

export default UpdateProfile;

