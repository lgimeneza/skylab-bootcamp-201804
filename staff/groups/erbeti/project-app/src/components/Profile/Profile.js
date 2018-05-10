import React, { Component } from 'react'
import logic from '../../logic'
import swal from 'sweetalert2'
import Xtorage from '../../Xtorage'

class Profile extends Component {

    state = {
        username: "",
        password: "",
        name: "",
        surname: "",
        birth: "",
        location: "",
        additional: ""

    }

    

     componentDidMount() {
         const { id, token } = Xtorage.local.get("user")
         logic.retrieveInfo(id, token)
             .then(user => {
                 this.setState({
                     username: user.data.username,
                     name: user.data.name,
                     surname: user.data.surname,
                     birth: user.data.birth,
                     location: user.data.location,
                     additional: user.data.additional
                 })
             })
     }

    

    updateInfoAndPrint = (e) => {
        e.preventDefault()
        
        console.log(Xtorage.local.get("user"))
        const { userName, id, token } = Xtorage.local.get("user")
        
        Promise.resolve()
        .then(()=> this.setState({username: userName}) )
        .then(()=> {
            let body= {
                username: this.state.username,
                password: this.state.password,
                name: this.state.name,
                surname: this.state.surname,
                birth: this.state.birth,
                location: this.state.location,
                additional: this.state.additional
            }
            return body
        })
        .then(body => 
            logic.updateInfo(id, body, token)
            .then(logic.retrieveInfo(id, token)
            .then(resp => this.setState({
                name: resp.data.name,
                surname: resp.data.surname,
                birth: resp.data.birth,
                location: resp.data.location,
                additional: resp.data.additional
            })
            ))
        
        )
        
    }


    updateName = (e) => {
        const name = e.target.value
        this.setState({ name })
    }
    updateSurname = (e) => {
        const surname = e.target.value
        this.setState({ surname })
    }
    updateBirth = (e) => {
        const birth = e.target.value
        this.setState({ birth })
    }
    updateLocation = (e) => {
        const location = e.target.value
        this.setState({ location })
    }
    updateAdditional = (e) => {
        const additional = e.target.value
        this.setState({ additional })
    }
    receivePassword = (e) => {
        const password = e.target.value
        this.setState({ password })
     }

    render() {
        return (
            <div>
                <h1 className="Profile-title">Profile info</h1>
                <form className="App" onSubmit={this.updateInfoAndPrint}>
                    <p>NAME: </p>
                    <input type="text" name="name" value={this.state.name} onChange={this.updateName} />
                    <p>SURNAME: </p>
                    <input type="text" name="surname" value={this.state.surname} onChange={this.updateSurname} />
                    <p>BIRTH: </p>
                    <input name="birth" type="tel" placeholder="     /      /        " pattern="[0-9]*" autocomplete="off" novalidate="" maxlength="10" value={this.state.birth} onChange={this.updateBirth} />
                    <p>LOCATION: </p>
                    <input type="text" name="location" value={this.state.location} onChange={this.updateLocation} />
                    <p>ADDITIONAL: </p>
                    <input type="textarea" rows="20" cols="50" name="message" value={this.state.additional} onChange={this.updateAdditional} />

                    <p>Type your password to save changes: </p>
                    <input type="password" name="password" onChange={this.receivePassword} />

                    <button type="submit">Save changes</button>
                </form>

            </div>
        )
    }

}








export default Profile