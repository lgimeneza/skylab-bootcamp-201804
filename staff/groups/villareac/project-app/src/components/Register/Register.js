import React, { Component } from 'react'
import '../Main/main.css'

class Register extends Component {

    render() {
        return( 
            <div className="container">

            <section className="firstSection">
            <h2>Trabaja mejor en equipo con Fevernote Business</h2>
            <ul className="list">
                <li>Novedad. Espacios para organizar y colaborar con tu equipo</li>
                <li>Usuarios y dispositivos ilimitados para que puedas acceder a las notas desde cualquier lugar</li>
                <li>Con una suscripción anual de Evernote Business se incluye Evernote Premium gratis para uso personal</li>
            </ul>
            </section>
            <section className="secondSection">
            <h2>Register</h2>
                <form onSubmit={this.props._handlerRegister}>
                    <input type="text" value={this.props.username} placeholder="insert username" onChange={this.props._handlerWriteUsername} />
                    <input type="password" value={this.props.password} placeholder="insert password" onChange={this.props._handlerWritePassword} />
                    <button type="submit">Register</button>
                </form>
            
            </section>

               
            </div>
        )

    }

}




export default Register