import React, { Component } from 'react'
import logic from '../../logic'
import swal from 'sweetalert2'
import Xtorage from '../../Xtorage'

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
        
        // this.props.saveIdToken(this.state.username, this.state.password)
        logic.loginUser(this.state.username, this.state.password)
            .then(res =>
                    {
                    Xtorage.local.clear()
                    Xtorage.local.set('user', { userName: this.state.username ,id: res.data.id, token: res.data.token })
                    console.log(Xtorage.local.get("user"))
                    }

                    
                
            )
            .then(resp => {

                swal(
                    'Successful login',
                ).then(this.props.history.push('/home'))
                
                
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