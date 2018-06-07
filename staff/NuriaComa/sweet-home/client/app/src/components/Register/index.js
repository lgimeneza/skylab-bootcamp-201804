import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'

class Register extends Component {


    render() {
        return (
            <div>
                <div>
                    <section>
                         <form>
                            <p className="words1"> Name: </p>
                            <input className="formulario" type="text" name="name" ></input>
                            <p className="words">Surname:</p>
                            <input className="formulario" type="text" name="apellido"></input>
                            <p className="words">Phone: </p>
                            <input className="formulario" type="text" name="phone" ></input>
                            <p className="words">DNI: </p>
                            <input className="formulario" type="text" name="dni" ></input>
                            <p className="words">Password: </p>
                            <input className="formulario" type="text" name="password" ></input>
                            <p className="words">Repeat Password: </p>
                                <input className="formulario" type="text" name="password" ></input>
                         </form>
                         <Link to="/auth"> 
                            <input className="buton" type="button" value="Register"></input>
                        </Link>
                    </section>
                </div>
            </div>
        )
    }
}
export default Register