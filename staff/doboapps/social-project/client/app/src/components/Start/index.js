import React from "react";
import { Landing, Home } from "../"
import { withRouter } from 'react-router-dom'

function Start(props) {
  
                if (props.isLogged) return <Home/> 
                else return <Landing />        
}
export default withRouter(Start);

    
    