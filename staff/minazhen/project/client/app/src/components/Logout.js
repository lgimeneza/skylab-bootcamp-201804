import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import logic from '../logic/index'


class Logout extends Component {

    logout = () => {
        logic.logout()
        const history = this.props.history
        setTimeout(function(){ history.push(`/`) }, 700);
    }

    render() {
        return <div className="containers"> {this.logout()} <h3>You logged out</h3> </div>
    }
}

export default withRouter(Logout)