import React from "react"
import { Link } from "react-router-dom"

function Header() {

    return <header className="App-header">
        <h1>Project App</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header;