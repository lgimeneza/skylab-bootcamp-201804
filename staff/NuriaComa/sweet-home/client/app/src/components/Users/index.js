import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import swal from 'sweetalert'

class Users extends Component {
    state = {
        usersInfo:''
    }
    componentWillMount(){
        Promise.resolve()
        .then(()=>{
            const apartmentId = localStorage.getItem('apartmentId')
                logic.listUsers(apartmentId).then(res => { 
                    console.log(res)
                    this.setState({
                        usersInfo: res
                    })
                })
            })
        
    }
    

    render() {
        return (
            <div >
                <div>
                    <section>
                       
                        <h2 className="us">USERS</h2>
                        <ul className="text">
                            {this.state.usersInfo ? this.state.usersInfo.map(users => {
                                return(
                                <div className="listUsers"><li><span className="data">Name:</span> {users.name}</li>
                                <li><span className="data">Surname:</span> {users.surname}</li>
                                <li><span className="data">Phone:</span> {users.phone}</li>
                                <li><span className="data">Dni:</span> {users.dni}</li></div>)
                            }) : undefined
                            }
                        </ul>
                        <Link to="/home">
                             <button className="back">Back</button>
                        </Link>
                       
                    </section>
                </div>
            </div>
        )
    }
}
export default Users