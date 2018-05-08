import React from "react";
import { Route } from 'react-router-dom'
import { Landing, Home, Profile, Register, Login } from "../index"

function Main (){

    return <div>
          <Route exact path="/" component={Landing} />
          <Route path="/home" render={props => <Home />} />
          <Route path="/profile" render={props => <Profile />} />
          <Route path="/register" render={props => <Register/>} />
          <Route path="/login" render={props => <Login />} />        
    </div>

}

export default Main;