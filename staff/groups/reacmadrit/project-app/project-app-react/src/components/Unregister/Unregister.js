import React from 'react'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'


function _handleUnregister(e) {

    e.preventDefault();

    let id = localStorage.getItem('id-app')
    let token = localStorage.getItem('token-app')
    let pass = document.getElementById('passUser').value

    logic.retrieve(id, token).then(resp => {
        if (resp.status === "OK") {
            return resp.data.username
        } else {
            // todo sweet alert
        }
    })
        .then(resp => {
            logic.unregister(resp, pass, token, id)  //sweetalert
        }).then((r) => {
            localStorage.removeItem("id-app")
            localStorage.removeItem("token-app")
            this.history.push('/')
        }

        )
    // DOING HERE.

}

function Unregister(props) {


    return <div>
        {
            props.isLogged() ?
                <div class="container">

                    <h1 className="text-center">Unregister</h1>
                    <form onSubmit={_handleUnregister.bind(props)}  >
                        <div className="row justify-content-center ">
                            <input className="form-group col-xs-4 m-4 border pl-3" type="password" id='passUser' placeholder="type your password here" />
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

