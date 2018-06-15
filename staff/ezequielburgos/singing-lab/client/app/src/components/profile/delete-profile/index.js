import React, { Component } from 'react'
import logic from '../../../logic'
import { Redirect } from 'react-router'
import Forms from '../forms'

class DeleteProfile extends Component {

    state = {
        isLogged: true,
        email: '',
        passwordToDelete: '',
        passwordToDeleteConfirm: ''
    }


    handleSubmitUnregister = (e) => {
        e.preventDefault()

        const { email, passwordToDelete, passwordToDeleteConfirm } = this.state
        if (email !== "" || passwordToDelete !== "" || passwordToDeleteConfirm !== "") {
            if (passwordToDelete === passwordToDeleteConfirm) {
                logic.unregisterUser(email, passwordToDelete)
                    .then(res => {
                        if (res) {
                            sessionStorage.clear()
                            this.props.history.push('/')
                        } else {
                            console.log('Error, username and/or password wrong')
                        }

                    }).catch(err => err.message)
            }
        }
    }

    handlerCapturingEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handlerCapturingPassword = (e) => {
        this.setState({ passwordToDelete: e.target.value })
    }

    handlerCapturingPasswordConfirm = (e) => {
        this.setState({ passwordToDeleteConfirm: e.target.value })
    }


    render() {
        return (
            <section>
                <form className="form-register" onSubmit={this.handleSubmitUnregister} noValidate>
                    <Forms type="text" label='email' placeholder="insert email" captureInput={this.handlerCapturingEmail} inputField={this.state.email} />
                    <Forms type="password" label='password' placeholder="password" captureInput={this.handlerCapturingPassword} inputField={this.state.passwordToDelete} />
                    <Forms type="password" label='confirm password' placeholder="insert new password" captureInput={this.handlerCapturingPasswordConfirm} inputField={this.state.passwordToDeleteConfirm} />

                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block register-submit" type="submit">Delete profile</button>
                </form>
            </section>
        )
    }
}

export default DeleteProfile