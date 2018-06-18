import React, { Component } from 'react';
// import '../App.css';
// import App from '../App'
import logic from '../logic'
// import Unregister from './Unregister'
// import Xtorage from './Xtorage';

class Profile extends Component {
    state = {
        data: {},
        username: "",
        location: ""
    }

    componentDidMount() {
        if (logic.userId !== "NO-ID") {
            logic.retrieveUser()
                .then(res => {
                    if (res.status === "KO") {
                        logic.logout()
                        console.error("Time expired and you should log in again")
                        this.props.history.push(`/login`)
                    }
                    return res
                })
                .then(data => {
                    this.setState({
                        data,
                        username: data.username,
                        location: data.location
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }  else this.props.history.push(`/`)
    }

    render() {
        return (
            <div className="Profile">
                <section className="pf-profile">
                    <h1>Profile</h1>
                    <article className="info">
                        <h1>{this.state.username}</h1>
                        <h4>{this.state.location}</h4>
                    </article>
                </section>
            </div >
        )
    }
}

export default Profile

