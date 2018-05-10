import React, { Component } from 'react'
import '../Main/main.css'


/**
 * The page where the user can create a new user and password
 * 
 * @class Register
 * @extends {Component}
 */
class Register extends Component {

    render() {
        return( 
            <div className="container">

            <section className="firstSection">
            <h2>Trabaja mejor en equipo con Fevernote Business</h2>
            <br/>
            <ul className="list">
                <li>Novedad. Espacios para organizar y colaborar con tu equipo</li>
                <li>Usuarios y dispositivos ilimitados para que puedas acceder a las notas desde cualquier lugar</li>
                <li>Con una suscripción anual de Evernote Business se incluye Evernote Premium gratis para uso personal</li>
            </ul>
            </section>
            <section className="secondSection">
            <h2>Register</h2>
            <br/>
                <form onSubmit={this.props._handlerRegister}>
                <label htmlFor="inputUsername">Username:</label>
                <input id="inputUsername" type="text" value={this.props.username} placeholder="Choose username" onChange={this.props._handlerWriteUsername} />
                <label htmlFor="inputPassword">Password:</label>
                    <input id="inputPassword"  type="password" placeholder="Choose password" onChange={this.props._handlerWritePassword} />
                    <br/>
                    <h5>Additional data:</h5>
                    <br/>
                    <label htmlFor="inputAge">Age:</label>
                    <input id="inputAge" type="text" placeholder="Insert age" onChange={this.props._handlerWriteAge} />
                    <label htmlFor="inputGender">Gender:</label>
                    <input id="inputGender"type="text" placeholder="Insert gender" onChange={this.props._handlerWriteGender} />
                    <button type="submit">Register</button>
                </form>
            
            </section>

               
            </div>
        )

    }

}




export default Register