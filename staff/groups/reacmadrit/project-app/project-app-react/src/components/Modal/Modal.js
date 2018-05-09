import React from "react";


function Modal (props){

let modal = <div>
    <p>Updated properly </p>
    <button onClick={props.closeModal}>OK</button>
</div>

if(props.viewModal) return  modal
else return null

}

export default Modal;