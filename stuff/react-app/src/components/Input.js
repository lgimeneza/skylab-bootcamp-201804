// import React, { Component } from 'react'
import React from 'react'
import './Input.css'


// class Input extends Component {
//     render() {
//         return <input className="input" type="text" onChange={this.props.handleChange} />
//     }
// }

function Input(props) {
    return <input className="input" type="text" onChange={props.handleChange} value={props.value}/>
}


export default Input