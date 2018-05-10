import React from "react"
import { Link } from "react-router-dom"


function _handleLogout() {
    localStorage.removeItem("id-app")
    localStorage.removeItem("token-app")
}

function Header(props) {

    return <header className="App-header bg-darkcyan">

        <nav className="bar">

                {!props.isLogged ?
                    <ul className="bar-ul ">
                        <li className="bar-item">
                            <Link className="bar-link" to="/login">Login</Link>
                        </li>
                        {/* <span className="bar-item"> | </span> */}
                        <li className="bar-item">
                            <Link className="bar-link" to="/register">Register</Link>
                        </li>
                    </ul>
                    :
                    <ul className="bar-ul">
                        <li className="bar-item">
                            <Link className="bar-link" to="/profile">Profile</Link>
                        </li>
                        <li className="bar-item">
                            <Link className="bar-link" onClick={_handleLogout} to="/">Logout</Link>
                        </li>
                        <li className="bar-item">
                            <Link className="bar-link" to="/home">Home</Link>
                        </li>
                    </ul>
                }
        </nav>

    </header>
}

export default Header;


// <nav className="navbar navbar-expand-lg navbar-light bg-light">

// <a className="navbar-brand" href="#">Navbar</a>
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
// </button>

// <div classNameName="collapse navbar-collapse" id="navbarNav">
//     {!props.isLogged ?
//         <ul className="navbar-nav ">

//             <li className="nav-item">
//                 <Link className="nav-link" to="/login">Login</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/register">Register</Link>
//             </li>
//         </ul>
//         :
//         <ul className="navbar-nav ">
//             <li className="nav-item">
//                 <Link className="nav-link" to="/profile">Profile</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" onClick={_handleLogout} to="/">Logout</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" to="/home">Home</Link>
//             </li>
//         </ul>
//     }
// </div>
// </nav>