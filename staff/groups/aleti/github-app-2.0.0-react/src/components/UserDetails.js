import React from 'react'
import './UserDetails.css'

function UserDetails(props){
  return (
    <div className="details">
      <img className="detail-image" src={props.user.avatar_url} alt=""/>
      <h3 className="detail-login">{props.user.login}</h3>
      <p className="detail-followers">{props.user.followers}</p>
      <p className="detail-following">{props.user.following}</p>
    </div>
  );
}

export default UserDetails;
