import React from "react";


function Home (props){


    if(props.viewInfoPrivate){

        return <div>Hello from Home {localStorage.getItem('token-app')}</div>
    }
    else{
        return <div>You are not allowed </div>

    }


}

export default Home;