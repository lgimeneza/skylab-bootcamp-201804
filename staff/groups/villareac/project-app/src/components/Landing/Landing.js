import React, { Component } from 'react'
import '../Main/main.css'
import { HashRouter, Link } from 'react-router-dom'

class Landing extends Component {

    render() {
        return (
            // <HashRouter>
            <div className="container">
                <section className="firstSection">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores iste molestiae maxime enim similique, perferendis corrupti aliquam explicabo, velit ea asperiores, iusto distinctio labore ratione officia officiis totam quam.</p>
                    <br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores iste molestiae maxime enim similique, perferendis corrupti aliquam explicabo, velit ea asperiores, iusto distinctio labore ratione officia officiis totam quam.</p>
                </section>
                <section className="secondSection">
                    <section className="linkRegister">
                        <h3>Sign Up For Free</h3>
                        <Link to='/register'><button>Register</button></Link>

                    </section>
                    <section className="linkLogin">
                        <h3>Login into your account</h3>
                        <Link to='/login'><button>Login</button></Link>

                    </section>

                </section>
            </div>
            // </HashRouter>
        )
    }

}


export default Landing