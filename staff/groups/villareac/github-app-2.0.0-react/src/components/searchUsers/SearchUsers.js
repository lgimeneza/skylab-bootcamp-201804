import React from 'react'

function SearchUsers(props){
    return (
        <div>
          <form onSubmit={props._searchUsers}>
            <input placeholder="search slave!" onChange={props._handlerWriteName} value={props.value}/>
            <button>this is the button</button>
          </form>
        </div>

    )
}

export default SearchUsers