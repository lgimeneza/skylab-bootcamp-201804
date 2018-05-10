import React, { Component } from 'react'
import '../Main/main.css'
import { HashRouter, Link } from 'react-router-dom'

/**
 * The Home page where the user lands once the login process is made.
 * 
 * @function Home
 * @returns {function} - a dummy component that prints the Home page.
 */
function Home() {
    return (
        <div className="container">
                <h1>Welcome to Fevernote</h1>
        </div>
    )

}


export default Home