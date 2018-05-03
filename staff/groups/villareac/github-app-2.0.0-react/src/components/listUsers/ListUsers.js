import React from 'react'

function printList(data) {
    let nameList = data.map(user =>       
        <div>
            <ul>
                <li>{user.login}</li>
                <li><img src={user.avatar_url} alt="hello" /></li>
            </ul>
        </div>
    )

return nameList

}

function ListUsers(props) {

    let list = printList(props.data); 
    return <div>{list}</div>
    
}

export default ListUsers