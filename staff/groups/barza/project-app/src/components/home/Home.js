import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logic from '../../logic';
import swal from 'sweetalert2';

import Header from '../header/Header';

class Home extends Component {
    state = {
        isLogged: false
    };

    componentWillMount() {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user.token;
            token.length
                ? this.setState({ isLogged: true })
                : this.setState({ isLogged: false });
        }
    }

    render() {
        return !this.state.isLogged ? <Redirect to="/" /> : 
            <div><Header isLogged={this.state.isLogged} />
            <h1>Hola</h1>  {this.state.isLogged && <Link to='/profile'>Profile</Link>}
            </div>
    }
}

export default Home;
