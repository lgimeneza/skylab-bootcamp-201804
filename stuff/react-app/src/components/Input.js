'use strict'

// import React, { Component } from 'react'
import React from 'react'


// class Input extends Component {
//     render() {
//         return <div className="input">
//             <input type="text" onChange={this.props.handleChange} />
//         </div>
//     }
// }

function Input(props) {
    return <div className="input">
        <input type="text" onChange={props.handleChange} />
    </div>
}


export default Input