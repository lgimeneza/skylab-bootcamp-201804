import React, { Component } from 'react'

function CharacterSearch (props) {
    
    return (
        
        <section>
            <div className="ulList">
            {(props.list.length>0) &&
            <h1 className="h1Title" >Characters found</h1>
            }
            <ul>
                {props.list.map(function(e){
                    return (<li key={e.id}> <img src={e.thumbnail.path} /> <p > {e.name} </p> </li>)
                })}
            </ul>
            </div>
        </section>


    )



}


export default CharacterSearch;

