import React from 'react'

function UsersList(props){
    return <div>
        <ul>
            {props.users.map((item, i)=> {
                    return <div key={i} onClick={() => props.handleUsers(item.login)}>  
                        <div><img width='50px' src={item.avatar_url} alt=""/></div>
                        <div><a href='#'>{item.login}</a></div>
                    </div> 
                }
            )}
        </ul>
    </div>
}

export default UsersList;