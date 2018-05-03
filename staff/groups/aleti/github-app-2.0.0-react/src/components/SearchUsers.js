import React from 'react'
import './SearchUsers.css'

function SearchUsers(props) {
  return (
    <form>
      <h2 className="title">Search GitHub users!</h2>
      <input className="search-input" type="text" onChange={props.handleWriteUser} value={props.query}/>
      <button className="search-button" onClick={props.searchUsers}>Submit</button>
    </form>
  );
}

export default SearchUsers;