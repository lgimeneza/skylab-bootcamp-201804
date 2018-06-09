import React, { Component } from 'react'
import logic from '../../logic'
// import { Link } from 'react-router-dom'
import './index.css'


class LandingChat extends Component {

    render() {
        return (
                <div className="jumbotron">
                    <h1 className="display-4">Chat with our teachers!</h1>
                    <p className="lead">//TODO: Use the firebase chat example from the Firebase workshop</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Chat now</a>
                </div>
        )
    }

}

export default LandingChat