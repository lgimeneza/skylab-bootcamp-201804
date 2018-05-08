import React, { Component } from 'react'

import { Link } from 'react-router-dom'

function Home(props) {

    return (

        <div>
            <div className="profile">
                <Link to="/profile">
                    <button>Profile</button>
                </Link>
            </div>
            <p>Bienvenidos</p>
            <p>la "home"</p>

        </div>
    )

}

export default Home