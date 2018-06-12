import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import logic from './logic'
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import MainCategories from './components/categories/main-categories'
import Subcategories from './components/categories/sub-categories'
import Nav from './components/nav'

class App extends Component {

  // constructor(props) {

  //   super(props)
  // }

  state = {
    userData: {}
  }

  componentDidMount() {
    
    if (logic.loggedIn) { 
      const userId = sessionStorage.getItem('userId')
    
    console.log(typeof userId)
    console.log(logic.retrieveUser(userId))

      logic.retrieveUser(userId)
        .then(userData => {
              this.setState({
              userData
          })
        })
    }
   
  }

  render() {
    return (
      <div className="App">
        <Nav userData={this.state.userData} />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/categories' component={MainCategories}/>
            <Route path='/subcategories/:categoryId' component={Subcategories}/>
            <Route path='/register' render={() => (!logic.loggedIn) ? <Register /> : <Home/>}/>
            <Route path='/auth' render={() => (!logic.loggedIn) ? <Login /> : <Home/>} />
        </Switch>
      </div>


    );
  }
}

export default App;



{/* <div className="App">
<Menu />
<Header />
<Route exact path="/" render={() => <Landing />} />
{
  <Route exact path="/register" render={() => {
    return this.state.registered ?
      <Link to="/login"><Login /></Link>
      :
      <Register onRegister={this.onRegister} onRegisterError={this.onRegisterError} />
  }} />
}
<Route exact path="/login" render={() => !logic.loggedIn && <Login onLogin={this.onLogin} onLoginError={this.onLoginError} />} />
{logic.loggedIn && <Route exact path="/home" render={() => <Home onLogout={this.onLogout} />} />}
<Footer />
</div> */}