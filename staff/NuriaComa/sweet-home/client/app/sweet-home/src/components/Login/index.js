import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'

class Login extends Component {




    render() {
        return (
            <div>
                 <div>
                    <section>
                    <form>
                        <p> DNI:</p>
                        <input className="formulario" type="text" name="DNI" ></input>
                        <p> Password:</p>
                        <input className="formulario" type="text" name="password"></input>
                    </form>
                    <Link to="/Home">
                    <button className="login-button">Login</button>
                    </Link>
                        <p>New in Sweet Home?</p> 
                        <Link to="/register">
                            <p> Register now</p>
                        </Link>
                    </section>
                </div>
           
            </div>
        )
    }


}

export default Login