import React, { Component } from "react"
import logic from '../../logic'
import swal from 'sweetalert2'

class Home extends Component {



    // componentDidMount() {
    //     let userId = localStorage.getItem('id-app')
    //     let token = localStorage.getItem('token-app')

    //     if (userId && token) {

        
    //     }
    // }
    

    render() {

        if (this.props.isLogged()) {
            return <div className="text-center">
                <p>hola</p>
                </div>
        } else {
            return <h2>You are not allowed</h2>
        }
    }
}

export default Home;