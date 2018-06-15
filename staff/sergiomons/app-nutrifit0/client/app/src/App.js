import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Register, Login, Home, Categories, ProductsByCategory, Nav, Footer } from './components'
import './App.css';
import logic from './logic'


class App extends Component {

  state = {
    userData: {},
  }

  componentDidMount() {

    if (logic.loggedIn) {
    logic.retrieveUser()
    .then(userData => {
          this.setState({
          userData
      })
    })
  }
  }

  onLogin = () => {

        logic.retrieveUser()
        .then(userData => {
              this.setState({
              userData
          })
        })
  }

  render() {
    return (
      <div className="App">
        <Nav userData={this.state.userData}/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/category/:categoryId/subcategories' component={Categories}/>
            <Route path='/category/:categoryId/products/' component={ProductsByCategory}/>
            <Route path='/register' render={() => (!logic.loggedIn) ? <Register/> : <Home/>}/>
            <Route path='/auth' render={() => (!logic.loggedIn) ? <Login onLogin={this.onLogin}/> : <Home/>} />
        </Switch>
        <Footer/>
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