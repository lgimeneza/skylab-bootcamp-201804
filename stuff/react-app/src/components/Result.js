import React from 'react'
import './Result.css'

function Result(props) { // dumb
    return <input className="result" type="text" value={ props.value }  disabled/>
}

export default Result