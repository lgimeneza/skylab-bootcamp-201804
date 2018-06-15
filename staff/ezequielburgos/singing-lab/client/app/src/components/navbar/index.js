import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logic from '../../logic'
import './index.css'

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            isLogged: false,
            user: []
        }
    }

    componentDidMount() {

        if (!this.state.isLogged) {
            if (sessionStorage.getItem('token')) {
                logic.retrieveUser()
                    .then(user => {
                        this.setState({ user, isLogged: true })
                    })
            }
        }else{
            this.setState({ isLogged: false })
        }
    }

    logout() {
        sessionStorage.clear()
        this.setState({ isLogged: false })
    }

    render() {
        return (
            <main>
                <nav className="site-header sticky-top py-1">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        <div className="py-2 d-none d-md-inline-block">
                            {/* <i className="fas fa-music" />
                            <i className="fas fa-music" /> */}
                        </div>
                        <span className="py-2 d-none d-md-inline-block">
                            <Link to="/">Home</Link>
                        </span>
                        <span className="py-2 d-none d-md-inline-block">
                            <Link to="/categories">Products</Link>
                        </span>
                        <span className="py-2 d-none d-md-inline-block">
                            <Link to="/our-team">Our Team</Link>
                        </span>
                        <span className="py-2 d-none d-md-inline-block">
                            <Link to="/cart"><span role="img" aria-label="cart">🛒</span></Link>
                        </span>
                        {(!this.state.isLogged) ?
                            <div>
                                <span className="py-2 d-none d-md-inline-block login-navbar">
                                    <Link to="/auth">Login</Link>
                                </span>
                                <span className="py-2 d-none d-md-inline-block">
                                    <Link to="/register">Register</Link>
                                </span>
                            </div>
                            :
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.user.name}</button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link to="/profile" className="dropdown-item">Profile</Link>
                                    <a className="dropdown-item">My cart</a>
                                    <Link to="/" className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => { this.logout() }}>logout</Link>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </main>
        )
    }

}

export default Navbar