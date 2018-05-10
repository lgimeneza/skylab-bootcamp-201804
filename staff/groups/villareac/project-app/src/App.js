import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/main'
import { HashRouter, Link } from 'react-router-dom'
import Logout from './components/Logout/Logout'
import Nav from './components/Nav/Nav'



class App extends Component {

  constructor() {
    super();

    this.state={
      logged: false
    }
  }



// } 
//     const sessionData = sessionStorage.getItem('key');
//     (sessionData) ? this.setState({ logged: true }) : this.setState({ logged: false })
// }    


    render() {
   
      return (
        <HashRouter>
          <div>

            <Nav logged={this.state.logged} />
            <Main />

          </div>
        </HashRouter>
      );
    }
  }

  export default App;