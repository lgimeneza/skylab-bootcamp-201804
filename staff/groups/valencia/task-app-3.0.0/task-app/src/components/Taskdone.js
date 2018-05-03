import React from 'react'

function Taskdone(props) {
    let lists = props.tasks.filter((v) => v.done === 1)
    let view
    (lists.length !== 0)?view = (<h3>Done's</h3>) : view = ""
    
    return <ul>{view}
        {lists.map((list, index) => <li key={index}>{list.t}<button value={list.i} onClick={
            (e) => {
                e.preventDefault()
                props.handler(list.i)
        }}>❌</button></li>)}
    </ul>
}

export default Taskdone