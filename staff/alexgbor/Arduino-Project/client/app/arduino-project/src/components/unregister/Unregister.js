import React from 'react'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert2'
//import './style.css'

function _handleUnregister(e) {

    e.preventDefault();

    let id = localStorage.getItem('id-app')
    let token = localStorage.getItem('token-app')
    let pass = document.getElementById('passUser').value

    logic.retrieveUser(id, token).then(resp => resp.email)
        .then(email => logic.unregisterUser(email, pass, token, id))
        .then((r) => {
            if (r) {
                localStorage.removeItem("id-app")
                localStorage.removeItem("token-app")
                this.history.push('/')
            }
            else {
                swal(
                    'Oops! Something went wrong'
                )
            }
        }

        )
}

function Unregister(props) {


    return <div>
        {
            props.isLogged() ?
                <div className="container">

                    <h1 className="text-center">Unregister</h1>
                    <form onSubmit={_handleUnregister.bind(props)}  >
                        {/* <div className="field mb-4">
                            <input type="password" name="password" id="password" placeholder="123123ab" value={this.state.password} onChange={this._handleKeepPassword} />
                            <label htmlFor="password">Password</label>
                        </div> */}
                        <div className="row justify-content-center ">
                            <input className="form-group col-xs-4 m-4 border pl-3" type="password" id='passUser' placeholder="Password" />
                        </div>
                        <div className="row justify-content-center ">

                            <input className="  btn btn-primary bg-darkcyan" type="submit" value="Send" />
                        </div>

                    </form>
                </div>
                :
                <h2> You are not allowed </h2>
        }
    </div>
}

export default withRouter(Unregister)