import React, { Component } from "react";
import logic from "../../logic";
import { Modal } from "../index"
import { withRouter } from 'react-router-dom'


class Profile extends Component {

    defaultPictureUrl = 'https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch_8.png'

    state = {

        userName: '',
        name: '',
        lastName: '',
        age: '',
        location: '',
        picture_url: this.defaultPictureUrl,
        serverErrorMessage: '',
        viewModal: false,
        password: ''

    }

    componentDidMount() {
        let userId = localStorage.getItem('id-app')
        let token = localStorage.getItem('token-app')

        if(userId && token){

            logic.retrieve(userId, token).then(resp => {
                Promise.resolve().then(() => {
                    this.setState({
                        userName: resp.data.username,
                        name: resp.data.name,
                        lastName: resp.data.lastName,
                        age: resp.data.age,
                        location: resp.data.location,
                        picture_url: resp.data.picture_url,
                    })
                })
            })
        }

    }

    _handleName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    _handleLastName = (e) => {
        this.setState({
            lastName: e.target.value,
        })
    }

    _handleAge = (e) => {
        this.setState({
            age: e.target.value,
        })
    }

    _handleLocation = (e) => {
        this.setState({
            location: e.target.value,
        })
    }

    _handlePicture_url = (e) => {
        if (/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(e.target.value)) {
            this.setState({
                picture_url: e.target.value
            })
        } else {

        }
    }
    _handlePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    _handleUpdate = (e) => {
        e.preventDefault()
        let picture_url = document.getElementById('picture_url').value
        let token = localStorage.getItem('token-app')
        let userId = localStorage.getItem('id-app')
        let userName = this.state.userName
        let pass = this.state.password

        let newProps = {
            name: this.state.name,
            lastName: this.state.lastName,
            age: this.state.age,
            location: this.state.location,
            picture_url
        }

        logic.update(userId, token, userName, pass, newProps).then(resp => {
            if (resp.status === 'OK') {
                this.setState({
                    viewModal: true
                })
            } else {
                this.setState({ serverErrorMessage: resp.error })
            }
        })
    }

    _closeModal = () => {
        this.setState({
            viewModal: false
        })
    }

    render() {

        if (!this.props.isLogged()) {
            return <h2>You are not allowed</h2>
            
        } else {
            return (
                <div>
                    <img className='w-25' src={this.state.picture_url} alt="profile pic" />

                    <form onSubmit={this._handleUpdate}>
                        <input value={this.state.name} onChange={this._handleName} id="name" type="text" placeholder="Your name" />
                        <input value={this.state.lastName} onChange={this._handleLastName} id="lastName" type="text" placeholder="Your last name" />
                        <input value={this.state.age} onChange={this._handleAge} id="age" type="text" placeholder="What's your age?" />
                        <input value={this.state.location} onChange={this._handleLocation} id="location" type="text" placeholder="What city do you live in?" />
                        <input value={this.state.profile_url} onChange={this._handlePicture_url} id="picture_url" type="text" placeholder="URL for profile picture?" />

                        <input value={this.state.password} onChange={this._handlePassword}
                            id="password" type="password" placeholder="Confirm password" />

                        <p className="text-danger">{this.state.serverErrorMessage}</p>
                        <input type="submit" value='update' />


                        <Modal viewModal={this.state.viewModal} closeModal={this._closeModal} />

                    </form>

                </div>

            )
        }
    }
}

export default withRouter(Profile);