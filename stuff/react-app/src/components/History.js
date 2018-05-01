import React from 'react'

function History(props) {
    return <ul>
        {props.operations.map((operation, index) => <li key={index}>{operation}</li>)}
    </ul>
}

export default History