import React, { Component } from 'react'
import logic from '../../logic'
import swal from 'sweetalert'
import './index.css';

class Login extends Component {

    state = {
        email: '',
        password: '',
        id: '',
    }

    loginEmail = (e) => {
        const email = e.target.value
        this.setState({ email })
    }

    loginPassword = (e) => {
        const password = e.target.value
        this.setState({ password })
    }

    acceptLogin = (e) => {
        e.preventDefault()


        logic.login(this.state.email, this.state.password)
            .then(() => {

                sessionStorage.clear()
                sessionStorage.setItem('userId', logic.userId)
                
                return true 
            })        
            .then(()=> 
                swal(
                    'Successful login',
                ).then(this.props.onLogin(logic.userId)))
            .catch(err => {
                swal(
                    err.message,


                )
            }
            )

    }

    

    

    render() {
        return (
            <div>

                <div id="wrapper">
                    <header id="header-wrapper-login">
                        <div id="header-login">
                            <div id="menu1-login">
                                <ul>
                                    <li className="menu_link">
                                        <a>Homepage</a>
                                    </li>
                                    <li className="menu_link">
                                        <a>Castings</a>
                                    </li>
                                </ul>
                            </div>
                            <div id="logo-login">
                                <h1>
                                    <a onClick={this.onBackLanding}>CastMe </a>
                                </h1>
                            </div>
                            <div id="menu2-login">
                                <ul>
                                    <li className="menu_link">
                                        <a>About</a>
                                    </li>
                                    <li className="menu_link">
                                        <a>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </header>

                    <div id="page-login">


                        <div className="post-login">
                            <h2 className="title">Log In</h2>
                            <form className="registration" onSubmit={this.acceptLogin}>
                                <h3>E-mail:</h3>
                                <input type="text" className="text_input" name="email" id="Email" placeholder="john.doe@gmail.com" onChange={this.loginEmail} />
                                <h3>Password:</h3>
                                <input type="password" className="text_input" name="password" id="Password" placeholder="Insert password" onChange={this.loginPassword} />
                                <p>
                                    <button type="submit" className="link-style" id="next" >Login</button>
                                </p>
                                <a className="link-style" type="button" onClick={this.props.onRegister}>First time? Register!</a>
                            </form>
                        </div>



                    </div>

                </div>

                <div id="footer-login">
                    <p>&copy; CastMe. All rights reserved.</p>
                </div>

            </div>
        )
    }


}

export default Login