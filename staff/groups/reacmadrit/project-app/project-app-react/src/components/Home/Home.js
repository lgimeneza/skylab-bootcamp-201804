import React from "react";


function Home (props){

    if(props.isLogged()){
        return <div>Hello from Home </div>
    }
    else{
        return <h2>You are not allowed</h2>
    }
}

export default Home;