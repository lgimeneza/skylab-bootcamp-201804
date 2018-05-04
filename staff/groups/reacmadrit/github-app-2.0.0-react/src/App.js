import React, { Component } from 'react';
import './App.css';
import logic from './logic'
import Form from './components/Form/Form'
import ShowList from './components/ShowList/ShowList'
import ShowDetails from './components/ShowDetails/ShowDetails'

class App extends Component {


  constructor() {
    super()
    this.state = {
      inputText: '',
      resultsList: [],
      userDetails: {}
    }
  }

  showDetails = (login) => {
    logic.retrieveUser(login)
    .then(data => 
    this.setState({
      userDetails: data
    })
    
    )
  }


  listUsers = e => {
    e.preventDefault()

    logic.searchUsers(this.state.inputText)
      .then(data =>

        this.setState({
          inputText: '',
          resultsList: data,
          userDetails:{}
        }))



  }

  handlerText = e => {

    let inputText = e.target.value

    this.setState({
      inputText: inputText
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Github Users App</h1>
        </header>

        <Form onHandlerText={this.handlerText} onListUsers={this.listUsers} onState={this.state} />

        <section>
          
          <ShowList onState={this.state} onShowDetails={this.showDetails}/>
        </section>

        
        <section>
          <ShowDetails onState={this.state}/>
        </section>

      </div>
    );
  }
}

export default App;
