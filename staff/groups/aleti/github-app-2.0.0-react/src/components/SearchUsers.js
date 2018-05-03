import React from 'react'

function SearchUsers(props){

    return <form>
        <input type="text" onChange={props.handleWriteUser} value={props.query}/>
        <button onClick={props.searchUsers}>Submit</button>
    </form>
}

export default SearchUsers;