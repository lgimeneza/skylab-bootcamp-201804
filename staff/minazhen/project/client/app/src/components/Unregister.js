import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import logic from "../logic/index"

class Unregister extends Component {
    state = {
        user: "",
        password: "",
        state: ""
    }

    componentDidMount() {
        if (!logic.loggedIn()) this.props.history.push(`/`)
    }

    userName = (e) => {
        const user = e.target.value
        this.setState({ user })
    }
    userPassword = (e) => {
        const password = e.target.value
        this.setState({ password })
    }
    submit = (e) => {
        e.preventDefault()
            //console.error(ALERT are you sure?)
        logic.unregister(this.state.user, this.state.password)
            .then(this.bucle)
            .catch(error => console.error(error.message))
    }
    bucle = () => {
        if (logic.userId === "NO-ID") {
            this.props.history.push(`/`)
        }else{
            this.props.history.push(`/unregister`)
        }
    }
    render() {
        const { user, password } = this.state
        return <div className="containers unregister">
            <h1>Delete User</h1>
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.userName} value={user} placeholder="User" />

                <input type="password" onChange={this.userPassword} value={password} placeholder="Password" />
                <button type="submit">Delete</button>
            </form>
        </div>
    }
}

export default withRouter(Unregister)
