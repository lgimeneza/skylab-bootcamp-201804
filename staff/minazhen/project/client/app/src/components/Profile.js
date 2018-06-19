import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import logic from "../logic"

class Profile extends Component {
    state = {
        data: {},
        username: "",
        location: ""
    }

    componentDidMount() {
        if (logic.loggedIn()) {
            logic.retrieveUser()
                .then(res => {
                    if (res.status === "KO") {
                        logic.logout()
                        console.error("Something wrong happened... Try to log in again")
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
                }).catch(error => console.error(error.message))
        }  else this.props.history.push(`/`)
    }

    render() {
        return (
            <div className="containers profile">
                <h1>Profile</h1>

                    <article className="info">
                        <p> Username: </p>
                        <h1>{this.state.username}</h1>
                        <br/>
                        <p> Location: </p>
                        <h3>{this.state.location}</h3>
                        <br/>
                    </article>

            </div >
        )
    }
}

export default withRouter(Profile)

