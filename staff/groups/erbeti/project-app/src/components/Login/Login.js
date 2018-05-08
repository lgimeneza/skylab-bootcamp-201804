import React, { Component } from 'react'
import logic from '../../logic/logic'
import swal from 'sweetalert2'

class Login extends Component {

    state = {
        username: '',
        password: '',
        id:'',
        token:''
    }

    loginUsername = (e) => {
        const username = e.target.value
        this.setState({ username })
    }
    loginPassword = (e) => {
        const password = e.target.value
        this.setState({ password })
    }


    acceptLogin = (e) => {
        e.preventDefault()

        logic.loginUser(this.state.username, this.state.password)
            .then(resp => {
                swal(
                    'Successful login',
                    //this.props.history.push("/home")

                ),
                console.log({})
                
            })
            .catch(err => 
                swal(
                    String(err),
                    

                ))
                
        }

        
    



    render() {
        return (

            <div>
                <form onSubmit={this.acceptLogin}>

                    <p>Username</p>
                    <input type="text" name="username" value={this.state.username} onChange={this.loginUsername} />
                    <p>Password</p>
                    <input type="password" name="password" value={this.state.password} onChange={this.loginPassword} />
                    <p>
                        <button type="submit">Login</button>
                    </p>
                </form>

                <p>

                </p>
            </div>
        )
    }


}

export default Login