import React, { Component } from 'react';
import logic from './../../logic/';

class Profile extends Component {
    state = {
        user: {},
        isLoading: true
    };

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);

        logic.token = user.token;

        logic.retrieveUser(user.id).then(res => {
            if (res.status === 'OK') {
                this.setState({
                    user: res.data,
                    isLoading: false
                });
            }
        });
        // Coger los datos de la API (RETRIEVE USER)
        // Ponerlos en el estado
    }

    render() {
        return this.state.isLoading ? (
            <span>Loading user data...</span>
        ) : (
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

                <button>Edit Profile</button>
                <button>Delete Account</button>
            </section>
        );
    }
}

export default Profile;
