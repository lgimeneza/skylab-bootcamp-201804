import React, {Component} from "react";
import { Route } from 'react-router-dom'
import { Landing, Home, Profile, Register, Login } from "../index"

class Main extends Component{
    state= {
        userName:'',
        password: ''
    }

    _updatePassword = (userName,password)=>(

        this.setState({
            userName,
            password
        })          
    )
    

    render() {
        return <div>
              <Route exact path="/" component={Landing} />
              <Route path="/home" render={props => <Home />} />
              <Route path="/profile" render={props => <Profile mainState={this.state}/>} />
              <Route path="/register" render={props => <Register/>} />
              <Route path="/login" render={props => <Login updatePassword={this._updatePassword}/>} />        
        </div>
    }

}

export default Main;