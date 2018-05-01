'use strict'

import React from 'react'
import './Result.css'

function Result(props) { // dumb
    return <div className="box">{ props.value }</div>
}

export default Result