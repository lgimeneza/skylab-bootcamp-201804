import React from "react";


function UserSearch(props) {

    
    
    if (props.notFound) return (<p> User not found</p>);
    
    return (

        <aside>
            <div className="ulList">
            {(props.list.length>0) &&
            <h1 className="h1Title" >Users found</h1>
            }
            <ul>
                {props.list.map(function(e){
                    return (<li key={e.id}> <img src={e.avatar_url} /> <p > {e.login} <button onClick={() => props.handlerClick(e.login)}>➤</button></p> </li>)
                })}
            </ul>
            </div>
         </aside>

    )
    
}
    
    




export default UserSearch;