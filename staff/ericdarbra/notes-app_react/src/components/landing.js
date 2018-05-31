import React from 'react'
import {Link} from 'react-router-dom'

class Landing extends Component {
    render() {
      return (
        
        <div className="App">
        
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        
        </div>
      );
    }
  }
  
  export default Landing;
  