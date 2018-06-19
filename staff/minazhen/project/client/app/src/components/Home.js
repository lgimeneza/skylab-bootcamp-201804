import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"
import { withRouter } from "react-router-dom"
import World from "./World"
import Country from "./Country"
import logic from "../logic"


class Home extends Component {

    componentWillMount() {
        if (logic.loggedIn()) {
            return logic.retrieveUser()
            .then(res => {
                if (res.status === "KO") {
                    logic.logout()
                    console.error("Something wrong happened... Try to log in again")
                    this.props.history.push(`/login`)
                }
                return res
            })
            .catch(error => console.error(error.message))
        } else this.props.history.push(`/`)  
    }

    render() {
        return (
        <div className="home">
            <Switch>
                <Route exact path = "/world/:username?" component={World}/>
                <Route exact path = "/:countryName/:username?" component={Country} />
            </Switch>
        </div>)
    }
}

export default withRouter(Home)