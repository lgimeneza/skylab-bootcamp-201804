import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../header/Header';

const Landing = () => {
    return (
        <div>
            <Header />

            <main>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </main>
        </div>
    );
};

export default Landing;
