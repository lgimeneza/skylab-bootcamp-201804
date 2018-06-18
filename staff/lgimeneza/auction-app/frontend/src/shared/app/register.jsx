import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userActions } from './redux/actions/user';
import { Helmet } from 'react-helmet';


class Register extends Component {

    state = {
        name:'',
        surname: '',
        email: '',
        password: '',
        repeatpassword: '',
        submitted: false
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { name, surname, email, password } = this.state;
        // if (username && password) {
        //     this.props.login(username, password, this.props.history)
        // }
    }

    render() {
        const { name, surname, email, password, passwordconf, submitted } = this.state;
        return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
            </Helmet>

		    <div className="section">

            	<div className="container">

                	<div className="row">

                        <div className="col-md-6 col-md-offset-3 pt-2">

                            <div className="section-title">
                                <h3 className="title">Register</h3>
                            </div>

                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <input type="text" className="input" name="name" placeholder="First Name" value={name} onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <input type="text" className="input" name="surname" placeholder="Last Name" value={surname} onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <input type="text" className="input" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <input type="password" className="input" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <input type="password" className="input" name="repeatpassword" placeholder="Repeat Password" value={repeatpassword} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <button className="primary-btn">Register</button>
                                    <Link to="/login" className="btn btn-link">login</Link>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.user
    return {
        loggingIn
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Register)