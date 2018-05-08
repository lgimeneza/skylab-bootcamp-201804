import React, { Component } from 'react'
import logic from '../../logic/logic'
import swal from 'sweetalert2'

class Profile extends Component{

    state = {
        username:'',
        password:'',
        newpassword:'',
        repeatpassword:'',
        email:'',
        check:true
    }
    
    retrieveInfo = (id,token) =>{
        logic.retrieveInfo(id,token)
        .then(resp => {console.log(resp)})
    }

    render(){
        return(
            <div>
                <h1>{this.state.username}</h1>

            </div>
        )
    }

}








export default Profile