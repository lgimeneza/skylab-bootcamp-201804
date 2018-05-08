import React, { Component } from 'react'

import {Link} from 'react-router-dom'

function Landing(props) {

    return (
        <div>
            <p>Bienvenidos</p>
            <p>la web para ...</p>
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
    )

} 

export default Landing