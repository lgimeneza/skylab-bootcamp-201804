import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../header/Header';

const Landing = () => {
    return (
        <div>
            <Header isLogged={false} />

            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-4">
                        <Link
                            to="/login"
                            className="btn btn-info btn-lg btn-block"
                        >
                            Login
                        </Link>
                    </div>
                    <div className="col-4">
                        <Link
                            to="/register"
                            className="btn btn-secondary btn-lg btn-block"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
