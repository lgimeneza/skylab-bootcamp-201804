import React,{ Component } from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import Logout from '../Logout/Logout'


class Nav extends Component{

    constructor(){
        super();
   
 
    }
 

    render(){
        {
            console.log(this.props)
        }
        return(

            <nav className="navbar">
              <h1>VilaReac</h1>
              {!(this.props.logged) ?

                <ul>
                  <li><Link to='/landing'>Landing</Link></li>
                  <li><Link to='/register'>Register</Link></li>
                  <li><Link to='/login'>Login</Link></li>
                </ul>
                :
                
                <ul>
                  <li><Link to='/home'>Home</Link></li>
                  <li><Link to='/profile'>Profile</Link></li>
                  <li><Link to='/landing'><Logout /></Link></li>
                </ul>}
            </nav>

        )


        
    }
}


export default Nav