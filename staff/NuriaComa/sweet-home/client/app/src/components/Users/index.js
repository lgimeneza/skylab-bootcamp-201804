import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'
import swal from 'sweetalert2'


class Users extends Component {
    state = {
        usersInfo: [],
        userId: '',
    }
    componentWillMount() {
        Promise.resolve()
            .then(() => {
                const apartmentId = localStorage.getItem('apartmentId')
                logic.listUsers(apartmentId).then(res => {

                   
                    this.setState({
                        usersInfo: res
                    })
                    this.setState({
                        userId: res.id
                    })
                })
            })

    }
   
    update= (_id) => {
       
        (this.props.history.push(`/updateuser/${_id}`))
    }

  logOut=() =>{
    Promise.resolve()
        this.props.history.push('/')     
        localStorage.clear()    
                       
    }

  
    

render() {
    return (
        <div >
            <div>
                <section>

                    <h2 className="usU">USERS</h2>
                    <Link to="/registeruser">
                    <button className="smallButN">NEW USER</button>
                    </Link>
                    <button className="smallButN"  onClick={() => this.logOut()}>LOG OUT</button>
                    <ul className="text">
                        {this.state.usersInfo ? this.state.usersInfo.map((users) => {
                            return (
                                <div key={users.name} className="listUsers"><li><span className="data">Name:</span> {users.name}</li>
                                    <li><span className="data">Surname:</span> {users.surname}</li>
                                    <li><span className="data">Phone:</span> {users.phone}</li>
                                    <li><span className="data">Dni:</span> {users.dni}</li>
                                    <button  className="smallBut" type="submit" onClick={() => this.update(users._id)}>EDIT</button></div>)
                        }) : undefined
                        }
                    </ul>
                    <Link to="/home">
                        <button className="backU">Back</button>
                    </Link>

                </section>
            </div>
        </div>
        )
    }   
}
export default Users