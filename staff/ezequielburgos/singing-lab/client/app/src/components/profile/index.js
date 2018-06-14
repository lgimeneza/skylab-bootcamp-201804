import React, { Component } from 'react'
import './index.css'
import logic from '../../logic'
import Navbar from './../navbar'

class Update extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            surname: '',
            phone: '',
            address: '',
            email: '',
            newEmail: '',
            password: '',
            newPassword: ''
        }
    }

    componentDidMount() {
        logic.retrieveUser()
            .then(user => {
                this.setState({ user })
            })
    }

    handleSubmitUpdate = (e) => {
        e.preventDefault()
        const { name, surname, phone, address, email, password, newEmail, newPassword } = this.state

        logic.updateUser(name, surname, phone, address, email, password, newEmail, newPassword)
            .then(res => {
                if (res) {
                    this.props.history.push('/')
                } else {
                    console.log('Error, username and/or password wrong')
                }

            }).catch(err => {
                return err.message
            })

    }

    handlerCapturingName = (e) => {
        this.setState({ name: e.target.value })
    }

    handlerCapturingSurname = (e) => {
        this.setState({ surname: e.target.value })
    }

    handlerCapturingPhone = (e) => {
        this.setState({ phone: e.target.value })
    }

    handlerCapturingAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    handlerCapturingEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handlerCapturingNewEmail = (e) => {
        this.setState({ newEmail: e.target.value })
    }

    handlerCapturingPassword = (e) => {
        this.setState({ password: e.target.value })
    }

    handlerCapturingNewPassword = (e) => {
        this.setState({ newPassword: e.target.value })
    }


    render() {
        return (
            <main className="my_container register-app">
                <Navbar />
                <div className="container">
                    <div className="py-5 text-center title">
                        <h2>Update</h2>
                    </div>
                    <div className="main-container">
                        <form className="form-register" onSubmit={this.handleSubmitUpdate} noValidate>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control" name="name" placeholder="name" autoFocus="" onChange={this.handlerCapturingName} value={this.state.name} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control" name="surname" placeholder="surname" onChange={this.handlerCapturingSurname} value={this.state.surname} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username">phone</label>
                                <div className="input-group">
                                    <input className="form-control" name="phone" placeholder="phone" onChange={this.handlerCapturingPhone} value={this.state.phone} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username">address</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" name="address" placeholder="address" onChange={this.handlerCapturingAddress} value={this.state.address} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" placeholder="email" onChange={this.handlerCapturingEmail} value={this.state.email} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">New Email</label>
                                <input type="email" className="form-control" name="new-email" placeholder="new-email" onChange={this.handlerCapturingNewEmail} value={this.state.newEmail} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address">password</label>
                                <input type="password" className="form-control" name="password" placeholder="password" onChange={this.handlerCapturingPassword} value={this.state.password} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address2">new password</label>
                                <input type="password" className="form-control" name="passwordConfirm" placeholder="passwordConfirm" onChange={this.handlerCapturingNewPassword} value={this.state.newPassword} />
                            </div>
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block register-submit" type="submit">Update profile</button>
                        </form>
                    </div>
                </div>
            </main>

        )
    }
}

export default Update