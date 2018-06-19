import React from "react";
import { Link } from "react-router-dom"

function Header() {

    const landingNav = (
        <nav>
            <Link className="link" to="/login"> Login </Link>
            <Link className="link" to="/register"> Register </Link>
        </nav>
    )


    const regularNav = (
        <nav>
            <Link className="link" to="/unregister"> Unregister </Link>
            <Link className="link" to="/profile"> Profile </Link>
            <Link className="link" to="/world"> Home </Link>
            <Link className="link" to="/logout"> Log out </Link>
        </nav>
    )

    return (
        <header>
            <Link to="/"><img className="title_wp link" src="/title_light.png" alt="WorldPic"/></Link>
            {sessionStorage.getItem('userId') ? regularNav : landingNav}
        </header>
    )
}

export default Header
