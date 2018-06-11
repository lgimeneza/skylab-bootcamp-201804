import React, { Component } from 'react'
import logic from '../../logic'
import { Link } from 'react-router-dom'
import './index.css'
import swal from 'sweetalert'

class Apartment extends Component {

    state = {
        name: '',
        address: '',
        phone: '',
        apartId: '',
        apartmentId: null,
        check: false
    }
    componentWillMount() {
        Promise.resolve()
            .then(() => {
                this.setState({
                    apartmentId: localStorage.getItem('apartmentId') 
                })
                console.log('localStorage', localStorage)
            })

    }

    registerName = (e) => {
        const name = e.target.value
        this.setState({ name })
    }
    registerAddress = (e) => {
        const address = e.target.value
        this.setState({ address })
    }
    registerPhone = (e) => {
        const phone = e.target.value
        this.setState({ phone })
    }
    checkapartId = (e) => {
        const apartId = e.target.value
        this.setState({ apartId })
    }

    checkInput = (name, address, phone) => {
        if (name === '') { 
            alert("name cannot be empty")
            return true
         }

        if (address === '') {
            alert("address cannot be empty")
            return true
        }

        if (phone === '') {
            alert("phone cannot be empty")
            return true
        }
        return false
    }
    checkId = (apartId, apartmentId) =>{
        
        if (this.apartId === this.apartmentId){
            this.setState.check({check:true})
        }
    }
    acceptRegister = (e) => {
        e.preventDefault() 
        const { name, address, phone,apartId, apartmentId } = this.state

                if ( apartId ==='' && apartmentId ===null) {
                    if(this.checkInput(name,address,phone)) return
                    logic.registerApartment(name,address,phone)
                    .then(res => {
                            swal({
                                type: 'success',
                                title: 'Welcome',
                                text: 'Sweet Home!',
                                footer: '<a href>Why do I have this issue?</a>',
                            }).then(() => {
                                this.props.history.push("/registeruser")
                            })
                        })
                        .catch(err => {
    
                            this.setState({
                                name: '',
                                address: '',
                                phone: '',
                            })
                            alert(err)
                        })

                }if (apartId !== '' && apartmentId ===null) {

                    if (!this.state.check) {
                    alert("apartmentid don't match")
                    }
                    if (this.state.check) {
                        this.props.history.push("/registerUser")
                     }
            }
            
    }

    redirect = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="general">
                    <section>
                        <form onSubmit={this.acceptRegister}>
                            <p className="words1"> Name: </p>
                            <input autocomplete="off" className="formularior" type="text" value={this.state.name} onChange={this.registerName} name="name" ></input>
                            <p className="words">Address:</p>
                            <input autocomplete="off" className="formularior" type="text" value={this.state.address} onChange={this.registerAddress} name="address"></input>
                            <p className="words">Phone: </p>
                            <input autocomplete="off" className="formularior" type="text" name="phone" value={this.state.phone} onChange={this.registerPhone} ></input>
                            <p className="words">Id apartment? </p>
                            <input autocomplete="off" className="formularior" type="text" name="apartId" value={this.state.apartId} onChange={this.checkapartId} ></input>
                            <button className="registerButton" type="submit">Continue</button>
                            <button className="backButton" type="button" onClick={this.redirect}>Back</button>
                        </form>

                    </section>
                </div>
            </div>
        )
    }
}
export default Apartment