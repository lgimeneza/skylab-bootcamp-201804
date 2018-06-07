import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'

class Landing extends Component {

    render() {
        console.log('this is render')
        return (
            <main>
                <h1>Landing Page</h1>
                <section>
                    <p className="welcome">Welcome to singing lab</p>

                    <Link to="/auth">
                        <button className="login-button">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="register-button">Register</button>
                    </Link>
                </section>

            </main>
        )
    }

}

export default Landing