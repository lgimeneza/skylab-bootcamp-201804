import React, { Component } from 'react'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import './index.css'
import swal from 'sweetalert'

class Register extends Component {

    state = {
        name:'',
        surname:'',
        phone:'',
        dni:'',
        password:'',
        repeatpassword:'',
        check:true
    }

    registerName =(e) => {
        const name = e.target.value
        this.setState({name})
    }
    registerSurname =(e) => {
        const surname = e.target.value
        this.setState({surname})
    }
    registerPhone =(e) => {
        const phone = e.target.value
        this.setState({phone})
    }
    registerDni =(e) => {
        const dni = e.target.value
        this.setState({dni})
    }
    registerPassword = (e) => {
        const password = e.target.value
        this.setState({password})
    }
    registerRepeatPassword = (e) => {
        const repeatpassword = e.target.value
        this.setState({repeatpassword})
    }
    checkInput = ()=>{

        if(this.state.name === '')
        {alert("name cannot be empty")}

        else if(this.state.surname===''){
            alert("surname cannot be empty")}
        
        else if(this.state.phone===''){
            alert("phone cannot be empty")}

        else if(this.state.dni===''){
            alert("dni cannot be empty")}

        else if(this.state.password === ''){
            alert("Password cannot be empty")}

        else if(this.state.repeatpassword === ''){
            alert("You must repeat your password")}
        
        else if(this.state.password !== this.state.repeatpassword){
            
            this.setState({check:false})
            
        }else{
            this.setState({check:true})
        }
    }

    acceptRegister = (e) =>{
       
        e.preventDefault()
        Promise.resolve()
        .then(() => this.checkInput())
        .then(()=> {
            if(!this.state.check){
                this.setState({
                    password:'',
                    repeatpassword:''})
                alert("Passwords don't match ;(")
            }
            else{
            logic.registerUser(this.state.name,this.state.surname, this.state.phone, this.state.dni, this.state.password)
            .then(resp => {
                swal(
                    'WELCOME',
                    this.props.history.push("/auth")

                )
            })
            .catch(err => {
                
                this.setState({
                    name:'',
                    surname:'',
                    phone:'',
                    dni:'',
                    password:'',
                    repeatpassword:'',
                    })
                            
                alert(err)})
            }
        })
    }
    redirect= () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="general">
                    <section>
                      
                        <form onSubmit={this.acceptRegister}>
                            <p className="words1"> Name: </p>
                            <input className="formulario" type="text" value={this.state.name}onChange={this.registerName} name="name" ></input>
                            <p className="words">Surname:</p>
                            <input className="formulario" type="text" value={this.state.surname}onChange={this.registerSurname} name="apellido"></input>
                            <p className="words">Phone: </p>
                            <input className="formulario" type="text" name="phone" value={this.state.phone}onChange={this.registerPhone} ></input>
                            <p className="words">DNI: </p>
                            <input className="formulario" type="text" value={this.state.dni}onChange={this.registerDni} name="dni" ></input>
                            <p className="words">Password: </p>
                            <input className="formulario" type="text" value={this.state.password}onChange={this.registerPassword} name="password" ></input>
                            <p className="words">Repeat Password: </p>
                            <input className="formulario" type="text" value={this.state.repeatpassword}onChange={this.registerRepeatPassword} name="password" ></input>
                            <button className="register-button" type="submit">Register</button>
                            <button className="register-button" type="button" onClick={this.redirect}>Back</button>
                        </form>
                        
                    </section>
                </div>
            </div>
        )
    }
}
export default Register