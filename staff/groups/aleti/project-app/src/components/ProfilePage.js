import React, { Component } from 'react';
import { Link, Router, Route } from 'react-router-dom';
import history from '../components/history'
//import { PrivateRoute } from './components/PrivateRoute';
import HomePage from '../components/HomePage'
import Account from '../components/Account'
import Update from '../components/Update'

class ProfilePage extends Component {
    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }

    handleLogoutUser() {
        localStorage.setItem('token', '')
    }

    handleDeleteUser(id) {
        //return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">

                        {<h1>Hi {localStorage.getItem('userName')} ! </h1>}

                        <div>
                            <span>Update</span><br />
                            <span>Account</span>
                        </div>

                        <div>
                            <Route exact path="/profile/account" component={Account} />
                            <Route exact path="/profile/update" component={Update} />

                        </div>

                        <Link to="/home" className="btn btn-link">Home</Link>

                    </div>
                </div>

            </div>
        );
    }
}

export default ProfilePage;