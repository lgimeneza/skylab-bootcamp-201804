import React from 'react'

function UserDetails(props){
    return <div>
        <img width='100px' src={props.user.avatar_url} alt=""/>
        <h3>{props.user.login}</h3>
        <p>{props.user.followers}</p>
        <p>{props.user.following}</p>
    </div>
}

export default UserDetails;