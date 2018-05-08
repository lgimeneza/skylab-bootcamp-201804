import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logic from '../../logic';
import swal from 'sweetalert2';

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
        return !this.state.isLogged ? <Redirect to="/" /> : <h1>Hola</h1>;
    }
}

export default Home;
