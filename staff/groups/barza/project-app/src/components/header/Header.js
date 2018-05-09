import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import swal from 'sweetalert2';

const Header = props => {
    const handleLogout = e => {
        e.preventDefault();

        localStorage.removeItem('user');

        swal({
            title: 'Logged out!',
            type: 'success',
            animation: false,
            customClass: 'animated flipInX'
        }).then(result => {
            if (result) props.history.push('/');
        });
    };
    return (
        <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            {props.isLogged && (
                <nav>
                    <Link to="/profile">Profile</Link>
                    <a href="#" onClick={handleLogout}>
                        Logout
                    </a>
                </nav>
            )}
        </header>
    );
};

export default withRouter(Header);