import React, { Component } from "react";
import logic from "../../logic";


class Profile extends Component {

    defaultPictureUrl = 'https://fch.lisboa.ucp.pt/sites/default/files/assets/images/avatar-fch_8.png'


    componentDidMount() {
        let userId = localStorage.getItem('id-app')
        let token = localStorage.getItem('token-app')

        logic.retrieve(userId, token).then(resp => {
            //DOING
            Promise.resolve().then(() => {
                this.setState({
                    name: resp.data.name || '',
                    lastName: resp.data.lastName || '',
                    age: resp.data.age || '',
                    location: resp.data.location || '',
                    picture_url: resp.data.picture_url || '',
                })
            })
        })
    }

    state = {

        name: '',
        lastName: '',
        age: '',
        location: '',
        picture_url: '',
        serverErrorMessage: ''

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
        this.setState({
            picture_url: e.target.value,
        })
    }

    _handleUpdate = (e) => {
        e.preventDefault()
        let pictureUrl = document.getElementById('picture_url').value
        let token = localStorage.getItem('token-app')
        let userId = localStorage.getItem('id-app')
        let pass = this.props.mainState.password
        let userName = this.props.mainState.userName

        let newProps = {
            name: this.state.name,
            lastName: this.state.lastName,
            age: this.state.age,
            location: this.state.location,
            profile_url: pictureUrl
        }
        logic.update(userId, token, userName, pass, newProps).then(resp => {
            if (resp.status === 'OK') {
                //TO do
            } else {
                this.setState({ serverErrorMessage: resp.error })
            }
        })
    }



    render() {
        return (
            <div>
                <h1>{this.props.mainState.userName}</h1>
                <img className='w-25' src={this.defaultPictureUrl} alt="profile pic" />

                <form onSubmit={this._handleUpdate}>
                    <input value={this.state.name} onChange={this._handleName} id="name" type="text" placeholder="Your name" />
                    <input value={this.state.lastName} onChange={this._handleLastName} id="lastName" type="text" placeholder="Your last name" />
                    <input value={this.state.age} onChange={this._handleAge} id="age" type="text" placeholder="What's your age?" />
                    <input value={this.state.location} onChange={this._handleLocation} id="location" type="text" placeholder="What city do you live in?" />
                    <input value={this.state.profile_url} id="picture_url" type="text" placeholder="URL for profile picture?" />
                    <p className="text-danger">{this.state.serverErrorMessage}</p>
                    <input type="submit" value='update' />

                </form>

            </div>

        )


    }

}

export default Profile;