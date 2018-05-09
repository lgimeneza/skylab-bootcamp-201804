import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/main'
import { HashRouter, Link } from 'react-router-dom'



class App extends Component {



  render() {
    return (
      <HashRouter> 
      <div>
      
        
            <nav className="navbar">
            <h1>VilaReac</h1>
              <ul>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
              </ul>

            </nav>
            <Main />
         
           
      </div>
      </HashRouter>
    );
  }
}

export default App;