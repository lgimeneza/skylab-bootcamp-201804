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
            props.history.push('/');
        });
    };

    const renderHeader = () => {
        if (props.isLogged) {
            return (
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand disabled" href="#">
                            CinemaQuiz
                        </a>

                        <div className="" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Home
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Play
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            );
        } else {
            return (
                <div className="jumbotron text-center">
                    <h1 className="display-4">CinemaQuiz</h1>
                    <p className="lead">
                        Answer questions about your favorites actors and actress
                    </p>
                    <hr className="my-4" />
                </div>
            );
        }
    };

    return renderHeader();
};

export default withRouter(Header);
