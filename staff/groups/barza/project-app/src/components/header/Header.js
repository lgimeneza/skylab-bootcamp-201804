import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
        <div className="jumbotron text-center">
            <h1 className="display-4">CinemaQuiz</h1>
            <p className="lead">
                Answer questions about your favorites actors and actress
            </p>
            <hr className="my-4" />
        </div>
    );
};

export default withRouter(Header);

/* <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            {props.isLogged && (
                <nav>
                    <Link to="/profile">Profile</Link>
                    <a href="#" onClick={handleLogout}>
                        Logout
                    </a>
                </nav>
            )}
        </header> */
