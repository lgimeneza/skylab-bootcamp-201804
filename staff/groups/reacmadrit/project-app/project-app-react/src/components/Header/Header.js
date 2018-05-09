import React from "react"
import { Link } from "react-router-dom"


function _handleLogout() {
    localStorage.removeItem("id-app")
    localStorage.removeItem("token-app")
}

function Header(props) {

    return <header className="App-header">
        <h1>Project App</h1>
        <nav>
            {!props.isLogged ?

                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
                :
                <ul>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link onClick={_handleLogout} to="/">Logout</Link>
                    </li>
                </ul>


            }
        </nav>
    </header>
}

export default Header;