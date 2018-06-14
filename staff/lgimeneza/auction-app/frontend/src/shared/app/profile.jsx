import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { userActions } from './redux/actions/user'

class Profile extends Component {

    componentDidMount(){
        this.props.retrieveUser()
    }

    handleChange(e) {

    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        const { name, surname, email, password } = this.props.user
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>User</title>
                </Helmet>
                <div className="col-md-6 col-md-offset-3 pt-2">
                    <h2>Profile</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="Name">Name</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Surname</label>
                            <input type="text" className="form-control" name="surname" value={surname} onChange={this.handleChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Email</label>
                            <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="surname" value={password} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Save</button>
                            <Link to="/login" className="btn btn-link">Logout</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
	const { user } = state
    return {
        user
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(userActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Profile);