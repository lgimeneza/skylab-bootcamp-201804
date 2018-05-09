import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Update extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                confirmpw: ''
            },
            submitted: false,
            registerResult: {}

        };
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>Public Profile</h3>
                <form name="form" onSubmit={this.handleSubmit}>

                    <label>Name</label>
                    <input type="text" placeholder="username" /><br />
                    <label>Public eMail</label>
                    <input type="text" /><br />
                    <label>Short biography</label>
                    <textarea type="text" rows="3" cols="60" /><br />
                    
                    <label>Location : </label>
                    <input type="text" placeholder="Barcelona" /><br />
                

                </form>
                <Link to="/home" className="btn btn-link">Go Home</Link>
            </div>

        );
    }
}


export default Update