import React, { Component } from 'react'
import '../Main/main.css'
import { HashRouter, Link } from 'react-router-dom'

class Logout extends Component{

_handlerClearStorage = () =>{
    sessionStorage.clear();
}


    render(){
        return (
            <button onClick={this._handlerClearStorage}>Logout</button>
        )
    }
}

export default Logout