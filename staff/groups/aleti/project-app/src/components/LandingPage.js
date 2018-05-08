import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LandingPage extends Component {
    constructor(props) {
        super(props);

        //this.props.dispatch(userActions.logout());

        this.state = {

        };

    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <form name="form" onSubmit={this.handleSubmit}>
                    <Link to="/login" className="btn btn-link">Login</Link>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </form>
                <h2>Landing</h2>
            </div>
        );
    }
}



export default LandingPage