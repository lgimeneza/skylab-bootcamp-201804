import React from 'react'
import './index.css'

function LandingChat (){
        return (
                <div className="jumbotron">
                    <h1 className="display-4">Chat with our teachers!</h1>
                    <p className="lead">Use the firebase chat example from the Firebase workshop</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-outline-secondary" role="button">Chat now</a>
                </div>
        )
}

export default LandingChat