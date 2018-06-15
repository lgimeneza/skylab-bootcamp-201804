import React from "react";
import { Landing, Home } from "../"
import { withRouter } from 'react-router-dom'

function Start(props) {
                if (props.isLogged) return <Home dataUser={props.dataUser} retrieveUser={props.retrieveUser} isLogged={props.isLogged} /> 
                else return <Landing />        
}
export default withRouter(Start);

    
    