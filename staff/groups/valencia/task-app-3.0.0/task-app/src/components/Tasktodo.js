import React from 'react'




function Tasktodo(props) {
    let lists = props.tasks.filter((v) => v.done === 0)
    let view
    (lists.length !== 0)?view = <h3>To Do's</h3> : view = ""
    return <ul>{view}
        {lists.map((list, index) => <li key={index}>{list.t}<button value={list.i} onClick={
            (e) => {
                e.preventDefault()
                props.handler(list.i)
        }}>V</button></li>)}
    </ul>
}

export default Tasktodo