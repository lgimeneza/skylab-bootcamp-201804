import React from 'react'

function UsersList(props){


    props._users.map((item)=>{ console.log(item.login)})

    //console.log(props._users)

    return <div>
        <ul>
            {props._users.map((item, i)=> {
                return <div key={i}>  
                    <div><img width='50px' src={item.avatar_url} alt=""/></div>
                    <div><p>{item.login}</p></div>
                    <div><a onClick={handleGetUser}>{item.login}</a></div>
                </div> 
            }
        )}
            
            
            {/* {props._users.map((item, index) => 
            // <li key={index}>{item} <a onClick={() => {props.handleUser(index)}}>X</a></li>
                <li key={index}>{item} > {item.name} </li>
            )} */}
        </ul>
    </div>
}

export default UsersList;