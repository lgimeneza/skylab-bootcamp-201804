import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import swal from 'sweetalert'

class Users extends Component {

    listUsers =(e) =>{
        e.preventDefault()
        Promise.resolve()
        .then(()=>{
            logic.listUser()
            .then(users =>{
                return users
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <section>
                        <h2>Users</h2> <button onClick={this.redirect} >Back</button>
                        <ul>
                            {users.map(users => <li>{users}</li>)}
                        </ul>
                       
                    </section>
                </div>
            </div>
        )
    }
}
export default Users