import React from 'react'
import logic from '../../logic'

function _handleUnregister() {
    

    let id = localStorage.getItem('id-app')
    let token = localStorage.getItem('token-app')
    let pass=document.getElementById('passUser').value

    logic.retrieve(id, token).then(resp => {
        if (resp.status === "OK") {
            return resp.data.username
        } else {
             // todo sweet alert
        }
    })
        .then(resp => {
            logic.Unregister(resp,pass,token,id)  //sweetalert
        })

    // DOING HERE.

}

function Unregister(props) {


    return <div>
        {
            props.isLogged() ?
                <div class="container">

                    <h1>Unregister</h1>
                    <form onSubmit={_handleUnregister}  >
                        <input type="password" id='passUser' placeholder="type your password here" />
                        <input className="  btn btn-primary bg-darkcyan" type="submit" value="Send" />
                    </form>
                </div>
                :
                <h2> You are not allowed </h2>
        }
    </div>
}

export default Unregister


// props.isLogged() ?
// <div>
//     <h1>Unregister:</h1>
//     <form onSubmit={_handleUnregister}  >
//         <input type="password" id='passUser' placeholder="type your password here" />
//         <input type="submit" value="Send" />
//     </form>
// </div>
// :
// <h2> You are not allowed </h2>