import React, { Component } from 'react'
import logic from '../../../logic'

class Unregister extends Component {

    state = {
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
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="email" onChange={this.handlerCapturingEmail} value={this.state.email} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">password</label>
                        <input type="password" className="form-control" name="password" placeholder="password" onChange={this.handlerCapturingPassword} value={this.state.passwordToDelete} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address2">confirm password</label>
                        <input type="password" className="form-control" name="passwordConfirm" placeholder="passwordConfirm" onChange={this.handlerCapturingPasswordConfirm} value={this.state.passwordToDeleteConfirm} />
                    </div>
                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block register-submit" type="submit">Delete profile</button>
                </form>
            </section>
        )
    }
}

export default Unregister