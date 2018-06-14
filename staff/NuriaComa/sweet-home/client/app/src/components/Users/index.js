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
    deleteUser = () => {
        const apartId = localStorage.getItem('apartmentId')
        const userId = localStorage.getItem('userId')

        Promise.resolve()
            .then(() => {
                swal({
                    title: 'Are you sure?',
                    text: "your user will be removed",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })
                    .then(() => {
                        const { value: dni } = swal({
                            title: 'Enter your dni',
                            input: 'dni',
                            customClass: 'swal2-inputdni',
                            inputPlaceholder: 'Enter your dni',
                            inputAttributes: {
                                'maxlength': 10,
                                'autocapitalize': 'off',
                                'autocorrect': 'off'
                            }
                        })
                         if (this.state.usersInfo.dni === dni) {
                                const { value: password } = swal({
                                    title: 'Enter your password',
                                    input: 'password',
                                    customClass: 'swal2-inputdni',
                                    inputPlaceholder: 'Enter your password',
                                    inputAttributes: {
                                        'maxlength': 10,
                                        'autocapitalize': 'off',
                                        'autocorrect': 'off'
                                    }
                                })
                                    if (this.state.usersInfo.password === password) {
                                        logic.unregisterUser(this.state.userId, this.state.usersInfo.dni, this.state.usersInfo.password)
                                    } else {
                                        swal('incorrect password')
                                    }
                                
                            } else {
                                swal('incorrect dni')
                            }
                        

                    })
                    .then(this.props.history.push('/'))
            
            })
            .then(localStorage.clear())     
                       
        }
    

render() {
    return (
        <div >
            <div>
                <section>

                    <h2 className="us">USERS</h2>
                    <ul className="text">
                        {this.state.usersInfo ? this.state.usersInfo.map(users => {
                            return (
                                <div key={users.name} className="listUsers"><li><span className="data">Name:</span> {users.name}</li>
                                    <li><span className="data">Surname:</span> {users.surname}</li>
                                    <li><span className="data">Phone:</span> {users.phone}</li>
                                    <li><span className="data">Dni:</span> {users.dni}</li><button onClick={() => this.deleteUser(this.state.userId)}>DELETE</button></div>)
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