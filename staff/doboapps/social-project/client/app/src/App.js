import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main/";
import Header from "./components/Header/";
import logic from "./logic";

class App extends Component {

    state = {
        isLogged: logic.isLogged(),
    };

logIn= ()=>{
  this.setState({
      isLogged: true
  });
}

logOut= ()=>{
  logic.logOut()
  this.setState({
      isLogged: false
  });
}

  render() {
    return (
      <div className="App">
        <Header  logOut={this.logOut}/>
        <Main logIn={this.logIn} isLogged={this.state.isLogged} />
      </div>
    );
  }
}

export default App;
